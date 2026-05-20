// icons
import { SiGithub, SiLeetcode, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

// data
import { SocialMediaProfiles } from "./SocialMediaProfiles";

export const IconsLinks = [
    {
        weblink: SocialMediaProfiles.github,
        iconlogo: <SiGithub />,
    },
    {
        weblink: SocialMediaProfiles.linkedin,
        iconlogo: <FaLinkedin />,
    },
    {
        weblink: SocialMediaProfiles.leetcode,
        iconlogo: <SiLeetcode />,
    },
    {
        weblink: SocialMediaProfiles.x,
        iconlogo: <SiX />,
    },
];