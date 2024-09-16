export const Categories = [
    "All",
    "Full-Stack",
    "Backend",
    "AI",
    "Web Scraper",
    "Console",
    "Frontend",
];

export const AllProjects = [
    {
        // image: "/work/1.png",
        name: "Flask Feedback Form",
        description: "A form to collect feedbacks for multiple teams.",
        image: "https://flaskfeedbackform.bhuvansa.com/static/images/OG.png",
        category: ["FullStack", "Backend"],
        techStack: ["Flask", "Docker", "PostgreSQL"],
        link: "https://flaskfeedbackform.bhuvansa.com",
        github: "https://github.com/BhuvanSA/flask-feedback-form",
        linkedin: null,
        isLatest: true,
    },
    {
        name: "Ideathon Landing Page",
        description: "A landing page for an Ideathon event, hosted by my college.",
        image: "https://ideathon.bhuvansa.com/assets/card-image.jpeg",
        category: ["Frontend"],
        techStack: ["Next.js", "Tailwind CSS"],
        link: "https://ideathon.bhuvansa.com",
        github: "https://github.com/BhuvanSA/ideathon-landingpage",
        linkedin: null,
        isLatest: true,
    },
    {
        name: "Dr.AIGuru",
        description:
            "1st Prize @Hacksprint, A medical chatbot using finetuned llama2",
        link: "https://hacksprinta2.streamlit.app/",
        image: "/work/hacksprinta2.png",
        category: ["Hackathon", "LLM", "Streamlit"],
        techStack: ["Streamlit", "LLM"],
        github: "https://github.com/BhuvanSA/hacksprint_a2",
        linkedin:
            "https://www.linkedin.com/posts/prajwal-p-patil-5a044525a_hacksprint-hackathon-24hourhackathon-ugcPost-7150137179174768640--pW-",
        isLatest: true,
    },
];