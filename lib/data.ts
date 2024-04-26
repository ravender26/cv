import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import hyperwolf from '../components/Assets/images/hyperwolf.png';
import payu from '../components/Assets/images/payu.png';
import royalAppo from '../components/Assets/images/royalapothecary.png';
import greenstone from '../components/Assets/images/greenstone.png';
import Thetropicannalife from '../components/Assets/images/thetropicannalife.png';
import pge from '../components/Assets/images/pge.png';

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
    title: "Graduated (B.tech)",
    location: "Chandigarh",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Front-End Developer",
    location: "Chandigarh",
    description:
      "I worked as a front-end developer for 2.5 years in 1 job and 2 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Chandigarh",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Payu.in",
    description:
      "PayU enables businesses to collect online & offline payments across 150+ payment modes such as Credit Cards, Debit Cards, Net Banking, EMIs, BNPL, QR, UPI,",
    tags: ["React", "Node.js", "Material UI", "Redux"],
    imageUrl: payu,
  },
  {
    title: "Hyperwolf.com",
    description:
      "Free delivery with every order. You heard that right. With an order minimum of only $50, you get free delivery and no other hidden fees",
    tags: ["React", "Next.js", "Node.js", "Material UI", "Redux-Thunk"],
    imageUrl: hyperwolf,
  },
  {
    title: "Greenstoneretail.com",
    description:
      "Not just any cannabis, the absolute highest quality lab-tested, pesticide-free medicinal and recreational products that we have to offer.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: greenstone,
  },
  {
    title: "Royalapothecary.life",
    description:
      "Royal Apothecary, the best weed dispensary in California City, has premium cannabis. We offer varieties of cannabis at the best price.",
    tags: ["React", "Next.js", "Node.js", "Material UI", "Redux-Thunk"],
    imageUrl: royalAppo,
  },
  {
    title: "Thetropicannalife.com",
    description:
      "Visit Tropicanna Dispensary for cannabis products and weed delivery services in Santa Ana, Tustin, Irvine, Orange, Costa Mesa, & Fountain Valley.",
    tags: ["React", "Next.js", "Node.js", "Material UI", "Redux-Thunk"],
    imageUrl: Thetropicannalife,
  },
  {
    title: "Pge Mobile App",
    description:
      "Pacific Gas and Electric Company (PG&E) provides natural gas and electric service to residential and business customers in northern and central California.",
    tags: ["React-Native", "MYSQL", "Redux-Saga"],
    imageUrl: pge,
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
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
