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
    text: "21 Years Old",
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
        institution: "Global Academy of Technology",
        degree: "Bachelor of Engineering",
        years: "2021 - 2025",
      },
      {
        institution: "Naryana PU College",
        degree: "Pre University",
        years: "2019 - 2021",
      },
      {
        institution: "Shanti Dhama International Public School",
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
              containerStyles="bg_about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative overflow-hidden"
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
                    <h3 className="h3 mb-4">Bringing ideas to life</h3>
                    <p className="subtitle max-auto max-w-xl xl:mx-0">
                      {" "}
                      A curious person, who wants to know how things work
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
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Kannada, Hindi</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualificaitons */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey{" "}
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid gap-y-2 md:grid-cols-2">
                      {/*  Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capital font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, time } = item;
                              return (
                                <div className="group flex gap-x-8" key={index}>
                                  <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                    <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                  </div>
                                  <div>
                                    <div className="leading-none-mb-2 text-xl font-semibold">
                                      {company}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {time}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capital font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { institution, degree, years } = item;
                              return (
                                <div className="group flex gap-x-8" key={index}>
                                  <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                    <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                  </div>
                                  <div>
                                    <div className="leading-none-mb-2 text-xl font-semibold">
                                      {institution}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {degree}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/*  skills  */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I use Everyday</h3>
                    {/* skills  */}
                    <div className="mb-16">
                      <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                      <div className="mb-4 border-b border-border"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillsData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="mx-auto w-2/4 text-center xl:mx-0 xl:text-left"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="mb-2 text-xl font-semibold xl:text-left">
                        Tools
                      </h4>
                      {/* tool list */}
                      <div className="flex justify-center gap-x-8 xl:justify-start">
                        {getData(skillsData, "tools").data.map(
                          (item, index) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt=""
                                  priority
                                />
                              </div>
                            );
                          },
                        )}
                      </div>
                      <div className="mb-4 border-b border-border"> </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
