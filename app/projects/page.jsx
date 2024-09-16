"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    // image: "/work/1.png",
    image: "https://flaskfeedbackform.bhuvansa.com/static/images/OG.png",
    category: ["Full-Stack", "Backend", "PostgreSQL"],
    techStack: ["Flask", "SQLAlchemy", "PostgreSQL"],
    name: "Flask Feedback Form",
    description: "A form to collect feedbacks for multiple teams.",
    link: "https://flaskfeedbackform.bhuvansa.com",
    github: "https://github.com/BhuvanSA/flask-feedback-form",
  },
  {
    image: "https://ideathon.bhuvansa.com/assets/card-image.jpeg",
    category: ["Frontend", "Tailwind CSS"],
    name: "Ideathon Landing Page",
    description: "A landing page for an Ideathon event, hosted by my college.",
    link: "https://ideathon.bhuvansa.com",
    github: "https://github.com/BhuvanSA/ideathon-landingpage",
  },
  {
    image: "/work/hacksprinta2.png",
    category: ["GenAI", "Streamlit", "LLM"],
    name: "Dr.AIGuru",
    description:
      "1st Prize @Hacksprint, A medical chatbot using finetune llama2",
    link: "https://hacksprinta2.streamlit.app/",
    github: "https://github.com/BhuvanSA/hacksprint_a2",
    linkedin:
      "https://www.linkedin.com/posts/prajwal-p-patil-5a044525a_hacksprint-hackathon-24hourhackathon-ugcPost-7150137179174768640--pW-",
  },
];

// remove category duplicates
const uniqueCategory = [
  "all projects",
  // ...new Set(projectData.map((item) => item.category.)),
  ...new Set(projectData.map((item) => item.category).flat(1)),
];
// console.log(uniqueCategory);

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategory);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    // return category === "all projects"
    //   ? project
    //   : project.category === category;
    return category === "all projects"
      ? project
      : project.category.includes(category);
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-8 text-center xl:mb-16">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="mx-auto mb-12 grid h-full w-full dark:border-none md:grid-cols-3 md:border lg:max-w-[640px]">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => {
                    setCategory(category);
                  }}
                  value={category}
                  key={index}
                  className="w-[162px] capitalize md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="grid grid-cols-1 gap-4 text-lg lg:grid-cols-3 xl:mt-8">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
