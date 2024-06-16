import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <Card className="group relative overflow-hidden">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:bg-no-repeat xl:dark:bg-work_project_bg_dark">
          <Image
            className="absolute bottom-0 rounded-t-lg shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          />
          {/* btn links */}
          <div className="flex gap-4">
            <Link
              href={project.link}
              target="_blank"
              className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              target_="_blank"
              className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        {/* <Badge className="absolute left-5 top-4 mb-2 text-sm font-medium uppercase">
          {project.category}
        </Badge> */}
        <div className="left-5 top-4 mb-2 flex">
          {Array.isArray(project.category)
            ? project.category.map((badge_name, index) => (
                <Badge
                  key={index}
                  className="mr-2 text-sm font-medium uppercase"
                >
                  {badge_name}
                </Badge>
              ))
            : null}
        </div>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-lg text-muted-foreground">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
