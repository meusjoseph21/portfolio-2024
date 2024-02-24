import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaPython } from "react-icons/fa";

export const experiencesData = [
    {
      title: "Graduated bootcamp",
      location: "Denver, CO",
      description:
        "I graduated after 3 months of studying. I immediately found a job as a Web Developer.",
      icon: React.createElement(LuGraduationCap),
      date: "2020",
    },
    {
      title: "Web Developer - Brand Iron",
      location: "Denver, CO",
      description:
        "I worked as the sole web developer for the marketing agency Brand Iron. This taught me a lot about working with clients and managing my time. I worked with HTML, CSS, JavaScript, and PHP.",
      icon: React.createElement(CgWorkAlt),
      date: "2020 - 2021",
    },
    {
      title: "Front End Engineer - Coterie Insurance",
      location: "Cincinnati, OH",
      description:
        "After working solo for a year, I wanted to work with a team. I joined a startup called Coterie Insurance where I worked with a scrum team of 8 other engineers in a larger 65+ engineer team workforce. I worked with React, Typescript, React Testing Library, and more. Unfortunately I was hit by the layoff bug in 2022",
      icon: React.createElement(FaReact),
      date: "2022 - 2022",
    },
    {
        title: "Back End Engineer - Chek Financial",
        location: "Miami, FL",
        description:
          "Immediately after being laid off, I found a job at a startup called Chek Financial where I currently work. I was engineer number two and I have seen the team grow to 7 engineers and 15 employees company wide. I work mainly with Python, Django, and PostgreSQL but I have also had a hand in the Flutter front end and our CI/CD pipeline.",
        icon: React.createElement(FaPython),
        date: "2022 - Present",
      },
    
  ] as const;
  

  export const skillsData = [
    "HTML",
    "CSS",
    "PostgreSQL",
    "Python",
    "Django",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Jest",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "Framer Motion",
  ] as const;