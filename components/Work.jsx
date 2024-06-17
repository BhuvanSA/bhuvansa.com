"use client";

import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "Web App",
    name: "Flask Feedback Form",
    description: "A form to collect feedbacks for multiple teams!",
    link: "https://flaskfeedbackform.bhuvansa.com",
    github: "https://github.com/BhuvanSA/flask-feedback-form",
  },
  {
    image: "/work/2.png",
    category: "Web App",
    name: "Ideathon Landing Page",
    description: "A landing page for an Ideathon event!",
    link: "https://ideathon.bhuvansa.com",
    github: "https://github.com/BhuvanSA/ideathon-landingpage",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="mx-auto mb-12 flex max-w-[400px] flex-col items-center justify-center text-center xl:mx-0 xl:h-[400px] xl:items-start xl:text-left">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Here are some of the projects I've worked on recently.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl: right-0 top-0 max-w-[1000px] xl:absolute">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
