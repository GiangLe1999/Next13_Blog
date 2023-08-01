import { StaticImageData } from "next/image";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "@/public/assets";
import { FC } from "react";
import { Facebook, Github, Linkedin, Twitter } from "@/components/Assets/Icons";

interface IconType {
  className?: string;
}

interface Siteconfig {
  siteName: string;
  currentlyAt: string;
  address: string;
  postalCode: number;
  tel: string;
  email: string;
  socialsLinks: { name: string; link: string; icon: FC<IconType> }[];
}

const siteConfig: Siteconfig = {
  siteName: "RiverLee",
  address: "Ho Chi Minh, Viet Nam",
  postalCode: 700000,
  tel: "+84 962334807",
  currentlyAt: "Ho Chi Minh",
  email: "legiangbmt09@gmail.com",
  socialsLinks: [
    { name: "Github", link: "https://github.com/GiangLe1999", icon: Github },
    {
      name: "Facebook",
      link: "https://www.facebook.com/giang.lethanh.5015/",
      icon: Facebook,
    },
    {
      name: "Linkedin",
      link: "https://www.facebook.com/giang.lethanh.5015/",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      link: "https://www.facebook.com/giang.lethanh.5015/",
      icon: Twitter,
    },
  ],
};

export default siteConfig;

export interface Service {
  title: string;
  icon: StaticImageData;
}

const services: Service[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

interface Category {
  name: string;
  icon: StaticImageData;
  link: string;
}

const categories: Category[] = [
  {
    name: "CSS 3",
    icon: css,
    link: "css",
  },
  {
    name: "JavaScript",
    icon: javascript,
    link: "javascript",
  },
  {
    name: "React JS",
    icon: reactjs,
    link: "reactjs",
  },
  {
    name: "Next JS",
    icon: reactjs,
    link: "nextjs",
  },
  {
    name: "Node JS",
    icon: nodejs,
    link: "nodejs",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    link: "mongodb",
  },
  {
    name: "git",
    icon: git,
    link: "git",
  },
  {
    name: "CS50",
    icon: git,
    link: "cs50",
  },
  {
    name: "figma",
    icon: figma,
    link: "figma",
  },
];

export interface Experience {
  title: string;
  company_name: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export interface Project {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: StaticImageData;
  source_code_link: string;
}

const projects: Project[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, categories, experiences, projects };
