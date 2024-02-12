import React from "react";
import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiJava, DiReact, DiSass } from "react-icons/di";
import { SiPostman, SiFigma, SiSolidity, SiPhp, SiGit, SiGithub, SiJest, SiTailwindcss, SiTypescript, SiBootstrap, SiNetlify, SiMongodb, SiSanity, SiWordpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const front = [
  { id: "react", icon: <DiReact /> },
  { id: "sass", icon: <DiSass /> },
  { id: "tailwind", icon: <SiTailwindcss /> },
  { id: "bootstrap", icon: <SiBootstrap /> },
  { id: "html", icon: <DiHtml5 /> },
  { id: "css", icon: <DiCss3 /> },
];

export const tools = [
  { id: "jest", icon: <SiJest /> },
  { id: "github", icon: <SiGithub /> },
  { id: "git", icon: <SiGit /> },
  { id: "postman", icon: <SiPostman /> },
  { id: "figma", icon: <SiFigma /> },
];

export const back_db_cloud = [
  { id: "node", icon: <DiNodejsSmall /> },
  { id: "mysql", icon: <DiMysql /> },
  { id: "netlify", icon: <SiNetlify /> },
  { id: "mongo", icon: <SiMongodb /> },
  { id: "wordpress", icon: <SiWordpress /> },
  { id: "sanity", icon: <SiSanity /> },
];

export const language = [
  { id: "js", icon: <DiJsBadge /> },
  { id: "typescript", icon: <SiTypescript /> },
  { id: "java", icon: <DiJava  /> },
  { id: "php", icon: <SiPhp /> },
  { id: "solidity", icon: <SiSolidity /> },
];
