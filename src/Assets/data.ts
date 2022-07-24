import poem from "./images/30poems-min.webp";
import datascience from "./images/corsoDataScience-min.webp";
import curisone from "./images/curiosone-min.webp";
import feed from "./images/feedTheAlgorithm-min.webp";
import melancholia from "./images/melancholia-min.webp";
import oasis from "./images/oasis-min.webp";

export interface ProjectType {
  name: string;
  description: string;
  image: string;
  type: "development" | "other";
  tech: string[];
  url: string;
  supportUrl: string;
}

export const portfolioRepository =
  "https://github.com/leobo96/leobo96.github.io";

export const projectData: ProjectType[] = [
  // {
  //   name: "This portfolio",
  //   description: "",
  //   image: "",
  //   type: "development",
  //   tech: ["react.ts", "typescript", "chakra UI"],
  //   url: "#",
  //   supportUrl: "https://github.com/leobo96/leobo96.github.io",
  // },
  {
    name: "30Poems",
    description:
      "A multi-page web-app extracting and visualizing data from poetryDB API",
    image: poem,
    type: "development",
    tech: ["react.js", "reactstrap", "react-router-dom", "ajax"],
    url: "https://leobo96.github.io/30poems-app/",
    supportUrl: "https://github.com/leobo96/30poems-app",
  },
  {
    name: "Data science & Machine Learning mini-course",
    description:
      "An interactive mini web-app to spread knowledge on data science and machine learning",
    image: datascience,
    type: "development",
    tech: ["javascript", "ES6+", "DOM manipulation"],
    url: "https://leobo96.github.io/Farsi-un-idea-data-science-machine-learning/",
    supportUrl:
      "https://github.com/leobo96/Farsi-un-idea-data-science-machine-learning",
  },
  {
    name: "UX Research and Prototyping Curiosone",
    description:
      "A UX research and FIGMA prototyping of Curiosone, the bibliotecary system of University Milano-Bicocca.",
    image: curisone,
    type: "other",
    tech: ["UX Research", "Usability", "Figma"],
    url: "https://www.canva.com/design/DAExfEBKpL8/Cpt-dLgBgrghfVdbS5Xewg/view?utm_content=DAExfEBKpL8&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu",
    supportUrl:
      "https://docs.google.com/document/d/1SSycUDzUVzDcsSF0XerVfJlX0_SBxYlHTPl8aLgvDzA/edit?usp=sharing",
  },
  {
    name: "FeedTheAlgorithm",
    description:
      "A blog on data science and artificial intelligence done in team for a university project",
    image: feed,
    type: "other",
    tech: ["Wordpress", "Web design", "SEO Basics"],
    url: "https://feedthealgorithm.altervista.org/",
    supportUrl:
      "https://www.slideshare.net/ElenaCastellani6/feedthealgorithm-presentazione",
  },
  {
    name: "Melancholia tribute",
    description:
      "A first exercise to familiarize with basic front-end technologies and design system building",
    image: melancholia,
    type: "development",
    tech: ["HTML/CSS", "UX/UI desing", "Figma"],
    url: "https://leobo96.github.io/melancholia-tribute-page/",
    supportUrl: "https://github.com/leobo96/melancholia-tribute-page",
  },
  {
    name: "Oasis",
    description:
      "A group project trying to build a website for a fictional city with a focus on Visual design",
    image: oasis,
    type: "development",
    tech: ["bootstrap 5", "responsive web design", "Visual design"],
    url: "https://leobo96.github.io/Oasis_website/",
    supportUrl: "https://github.com/leobo96/Oasis_website/tree/Oasis3",
  },
];
