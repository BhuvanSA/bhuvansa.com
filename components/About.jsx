import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  CalendarRange,
  Briefcase,
  Calendar,
  University,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Bhuvan S A",
  },
  // {
  //   icon: <PhoneCall size={20} />,
  //   text: "+91 1234567890",
  // },
  {
    icon: <MailIcon size={20} />,
    text: "bhuvansa@icloud.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 22 April, 2003",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "BE in Artificial Intelligence & Machine Learning",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Bengaluru",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Global Academy of Technology",
        degree: "Bachelor of Engineering",
        years: "2021 - 2025",
      },
      {
        pre_university: "Naryana PU College",
        degree: "Pre University",
        years: "2019 - 2021",
      },
      {
        school: "Shanti Dhama International Public School",
        degree: "SSLC",
        years: "2019",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Giftolexia Solutions Private Limited",
        role: "Data Analyst and Full Stack Developer Intern",
        time: "2018 - 2020",
      },
      {
        company: "LiaPlusAI",
        role: "Full Stack Developer Intern",
        time: "2018 - 2020",
      },
    ],
  },
];

const skillsData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "React",
      },
      {
        name: "Next.js",
      },
      {
        name: "Node.js",
      },
      {
        name: "Express.js",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Python",
      },
      {
        name: "Machine Learning",
      },
      {
        name: "Data Analysis",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="pb-12 xl:h-[860px] xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-8 text-center xl:mb-16">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="relative hidden flex-1 xl:flex">
            <DevImg
              containerStyles="bg_about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full dark:border-none xl:max-w-[520px] xl:grid-cols-3 xl:border">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="mt-12 text-lg xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className="subtitle max-auto max-w-xl xl:mx-0">
                      {" "}
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons */}
                    <div className="mb-12 grid gap-4 xl:grid-cols-2">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="mx-auto flex items-center gap-x-4 xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languagues */}
                    <div>Language Skill</div>
                    <div className="border-b border-border"></div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">qualifications</TabsContent>
                <TabsContent value="skills">skill info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
