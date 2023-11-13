import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Nigeria",
    description:
      "I worked at m8 Global Group as a web developer between June 2017 and May 2018 .",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2018",
  },
  {
    title: "Full Stack Developer",
    location: "Lagos, Nigeria",
    description:
      "I worked as a full stack developer at Apex Chord Innovation between July 2018 - December 2019.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Full-Stack Developer & Web Development Tutor",
    location: "Ibadan, Nigeria",
    description:
      "I started working at SkriptaPod ICT Hub Limited as a full stack web developer and tutor. Since 2020 I have taught and mentored over 100 web developers in both frontend and backend technologies",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Nest JS",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "AWS",
  "GCP",
  "Docker",
  "Kubernetes",
] as const;
