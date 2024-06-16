import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import Badge from "./Badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group relative h-full overflow-hidden">
      <CardHeader className="p-0">
        {/* images */}
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
        <Badge containerStyles="uppercase text-sm font-medium mb-2 absolute top-4 left-5 ">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-lg text-muted-foreground">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
