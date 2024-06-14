import { FaPinterestP } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { CiAt } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { PiPlugsConnectedFill } from "react-icons/pi";

import { VscAccount } from "react-icons/vsc";
import { RiLayout2Fill } from "react-icons/ri";
import { FaLink } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { BsFillShareFill } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { FaStore } from "react-icons/fa";

export const icons = [
  { Icon: FaFacebookF, name: "Facebook" },
  { Icon: FaInstagram, name: "Instagram" },
  { Icon: FaLinkedinIn, name: "LinkedIn" },
  { Icon: FaDiscord, name: "Discord" },
  { Icon: FaXTwitter, name: "X" },
  { Icon: CiAt, name: "Theards" },
  { Icon: FaRedditAlien, name: "Reddit" },
  { Icon: FaGithub, name: "Github" },
  { Icon: FaPinterestP, name: "Pinterest" },
];

export const NavItems = [
  { name: "Links", href: "/dashboard/links", icon: FaLink },
  { name: "Profile", href: "/dashboard/profile", icon: FaUser },
  { name: "Layout", href: "/dashboard/layout", icon: RiLayout2Fill },
  { name: "Store", href: "/dashboard/store", icon: FaStore },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: SiGoogleanalytics,
  },
];

export const ProcessSection = [
  {
    icon: VscAccount,
    title: "Build Your Hub",
    description: "Sign up for a free account in seconds.",
  },
  {
    icon: FaPaintBrush,
    title: "Make Your Own Touch",
    description:
      "Craft a beautiful landing page to showcase your passions and projects.",
  },
  {
    icon: PiPlugsConnectedFill,
    title: "Connect Your World",
    description:
      "Add links to your website, social media profiles, and anything else you want to share",
  },
  {
    icon: BsFillShareFill,
    title: "Spread the Word:",
    description:
      "Get your unique link and add it to your bio on Instagram and other platforms Now your audience can easily explore all your online corners in one place!",
  },
];
