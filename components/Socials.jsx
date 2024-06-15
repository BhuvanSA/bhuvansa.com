"use client";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://github.com/bhuvansa/",
    name: <RiGithubFill />,
  },
  {
    path: "https://x.com/bhuvan_s_a",
    name: <RiTwitterXFill />,
  },
  {
    path: "https://www.linkedin.com/in/bhuvansa/",
    name: <RiLinkedinFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <a
            href={icon.path}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
