"use client";
import { ArrowUp } from "lucide-react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";


export default function AiAgent() {
    const words = [
        "What technologies do you use?",
        "Tell me about your projects.",
        "How can I contact you?",
    ]
	return (
		<section
			aria-label="AI assistant"
			className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 flex items-center border border-input rounded-full bg-background p-1 cursor-pointer transition-transform duration-300 hover:scale-110 origin-center"
		>
			{/* <text className="border-none w-40 p-3 rounded-full text-muted-foreground">Ask me anything...</text> */}
            <ContainerTextFlip words={words} className="text-muted-foreground" />
			<div className="rounded-full h-[40px] w-[40px] flex items-center justify-center p-0 bg-primary text-primary-foreground">
				<ArrowUp />
			</div>
		</section>
	);
}
