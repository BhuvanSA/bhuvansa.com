# bhuvansa.com

Personal site + an AI agent that represents me, built from first principles.

> **Ultimate goal:** "Hire Bhuvan" — me and my agent working together to complete tasks for you. The agent triages, gathers context, drafts work; I review, decide, and ship. One inbox, two collaborators.

---

## Status

| Component | State |
|---|---|
| Next.js portfolio (`apps/web`) | Live at [bhuvansa.com](https://bhuvansa.com) |
| Rust agent (`apps/agent`) | Not started — see [Roadmap](#roadmap) |
| Monorepo (bun workspaces + cargo workspace) | Set up |

This is an **active learning project**. I'm building the agent end-to-end in Rust without an agent framework so I understand every layer.

---

## Vision

A visitor arrives at bhuvansa.com. They open a chat. They ask:

> "Has Bhuvan worked with Rust? Can he help me build a backend?"

The agent:
1. Reads my portfolio files
2. Searches the web for relevant context
3. Recalls past conversations with other visitors who asked similar things
4. Answers honestly — including "I'm not sure, want me to flag this for Bhuvan?"
5. If the visitor wants to engage, it drafts a project intake and emails me with the context

The agent is **not** a marketing chatbot. It's a real assistant with tools, memory, and the ability to escalate to me. Over time it gets better because:
- New content I write becomes new context
- Past conversations distill into reusable knowledge
- Failure cases turn into rules ("when asked X, do Y")

---

## Architecture

```
Browser (bhuvansa.com)
    │
    │  POST /chat { msg, visitor_id }
    ▼
┌────────────────────────────────────────────┐
│  apps/agent (Rust, axum)                  │
│                                            │
│   ┌──────────────────────────────────┐    │
│   │ Agent loop                       │    │
│   │  • Build messages + tool defs    │    │
│   │  • Call model (via router)       │    │
│   │  • Execute tool calls            │    │
│   │  • Append results, repeat        │    │
│   │  • Return final answer           │    │
│   └──────────────────────────────────┘    │
│                                            │
│   Model router ──► Free tier (DeepSeek,   │
│                    Groq, OpenRouter free)  │
│                ──► Paid fallback           │
│                    (Claude, GPT) on quota  │
│                                            │
│   Tools:                                   │
│     read_file, list_files, search,         │
│     fetch_url, web_search, recall,         │
│     remember, escalate_to_bhuvan           │
│                                            │
│   Storage (volume):                        │
│     content/  — my docs (read-only)        │
│     memory/global/  — curated facts        │
│     memory/visitors/{id}.md — per-user     │
│     memory/learned/  — distilled lessons   │
│     cache.sqlite  — response cache         │
└────────────────────────────────────────────┘
    │
    ▼
  Fly.io (Docker container + persistent volume)
```

---

## Tech stack

**Web (`apps/web`)**
- Next.js 16, React 18, Tailwind, shadcn-style Radix primitives
- Deployed on Vercel

**Agent (`apps/agent`)**
- Rust (stable), Tokio async runtime
- `axum` for HTTP, `reqwest` for outbound API calls
- `serde` / `serde_json` for message types
- `rusqlite` for response cache (later phases)
- Deployed as a Docker container on Fly.io

**Models**
- Primary (free): DeepSeek V3, Groq free tier, OpenRouter free models
- Paid fallback: Claude Haiku / GPT-4o-mini for reliability when free fails
- All accessed via OpenAI-compatible API (one client, swap base URL + model)

---

## Roadmap

Phased so each week ships something working. Targets are *weeks of focused effort*, not calendar weeks.

### Phase 0 — Monorepo foundation ✓
- Convert repo to bun workspaces
- Move Next.js into `apps/web`
- Vercel root directory updated

### Phase 1 — Rust agent crate scaffolding
- Add `apps/agent` Cargo workspace member
- Hello-world axum server on `:8787`
- Define `Message`, `Tool`, `ToolCall` types matching the OpenAI chat API shape
- `cargo run -p agent` boots a server

### Phase 2 — Agent loop v0 (CLI)
- Single provider: DeepSeek via OpenAI-compatible API
- One tool: `read_file` (sandboxed to `content/`)
- CLI binary: pipe a question in, get an answer out
- **Goal: understand the loop. Iteration cap, message-history append rules, tool_call_id handling.**

### Phase 3 — HTTP API + web UI
- `POST /chat { messages }` endpoint
- Simple chat widget on `apps/web` (server-side rendered, no auth yet)
- CORS, request timeout, max-iteration cap
- Streaming responses (Server-Sent Events) as a stretch goal

### Phase 4 — Tool ecosystem
- `list_files(dir)`, `search(query)`, `fetch_url(url)`
- `web_search(query)` via Tavily or Brave
- Tool dispatch is registry-based — adding a tool is one trait impl

### Phase 5 — Memory layer
- File-based: `memory/visitors/{id}.md` per visitor, `memory/global/` curated by me
- Visitor ID via signed cookie
- Rolling summary when transcript exceeds N turns
- `recall(query)` / `remember(topic, content)` tools

### Phase 6 — Response cache
- SQLite `cache(hash, response, hits, created_at)`
- Key = `sha256(normalized_question + content_version)`
- TTL based on whether the response used web tools
- L1 exact match first; embedding-based L2 only if needed

### Phase 7 — Model router
- Trait: `Provider { fn chat(...) }`
- Multiple impls: DeepSeek, Groq, OpenRouter, Claude, OpenAI
- Router strategy: try free providers in order, fall through to paid on 429 / quota exhaustion
- Per-provider in-memory rate-limit tracking with reset windows
- Config-driven: providers and order in a TOML file

### Phase 8 — Rate limiting + abuse handling
- Per-IP rate limit via `tower-governor`
- Per-visitor daily token budget
- Cheap pre-filter to drop obvious jailbreaks / prompt injections
- Logging + metrics for what got rejected and why

### Phase 9 — Docker + production deploy
- Multi-stage Dockerfile (~50 MB final image)
- `fly.toml`, persistent volume mounted at `/data` for memory + cache
- Health checks, graceful shutdown
- Backup strategy for the volume

### Phase 10 — Reflection + skill library
- After each conversation, cheap critic model rates the answer
- Failures append to `memory/learned/mistakes.md`
- Successful tool sequences become reusable skills in `memory/learned/skills/`
- Skills are loaded into context when relevant patterns appear

### Phase 11 — "Hire Bhuvan" workflow
- `intake_project(scope, budget, timeline)` tool
- Agent gathers requirements over multiple turns, summarises
- `escalate_to_bhuvan(summary, contact)` emails me a structured brief
- I respond inside the agent's context so it can follow up with the visitor
- Ultimately: agent does discovery + drafting, I do decisions + delivery

---

## Repo structure

```
bhuvansa.com/
├── package.json              ← bun workspace root
├── Cargo.toml                ← cargo workspace root (Phase 1+)
├── apps/
│   ├── web/                  ← Next.js portfolio
│   └── agent/                ← Rust agent (Phase 1+)
└── README.md
```

---

## Development principles

- **No agent framework.** The agent loop is ~100 lines of Rust. Frameworks hide the thing I'm trying to learn.
- **First-class observability.** Every model call, tool call, and routing decision is logged with cost. I want to *see* what the agent is doing.
- **Free first, paid as fallback.** A portfolio site shouldn't burn money. The router exists so the agent stays useful even on $0/month.
- **Memory is human-readable.** Markdown files, not opaque embeddings (until embeddings are actually needed). I should be able to `cat` what the agent knows.
- **Escalate, don't hallucinate.** If the agent isn't confident, it asks me. Better to email Bhuvan than to lie.

---

## Getting started

### Web app

```bash
bun install
bun dev          # starts apps/web on :3000
```

### Agent (once Phase 1 lands)

```bash
cargo run -p agent     # starts the agent on :8787
```

### Required env vars (eventually)

```
# apps/web/.env
SMTP_HOST=
SMTP_PORT=
SMTP_EMAIL=
SMTP_PASSWORD=
NOTIFICATION_EMAIL=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=

# apps/agent/.env (later)
DEEPSEEK_API_KEY=
GROQ_API_KEY=
OPENROUTER_API_KEY=
ANTHROPIC_API_KEY=
TAVILY_API_KEY=
```

---

## License

Personal project. Code is MIT — content (text, images, project descriptions) is mine, ask before reusing.
