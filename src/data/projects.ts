import SentinelImage from "../assets/img/projects/sentinel.webp";
import TermetisImage from "../assets/img/projects/termetis.webp";
import AtelierManonImage from "../assets/img/projects/manon.webp";
import RouteSolverImage from "../assets/img/projects/route.webp";
import TaskMateImage from "../assets/img/projects/taskmate.webp";
import HtmlCssAutocompleteImage from "../assets/img/projects/htmlcss.webp";

export interface Project {
  title: string;
  description: string;
  image: string;
  githubLink?: string;
  liveLink?: string;
  liveLinkLabel?: string;
  technologies?: string[];
}

export const projects: Project[] = [
  {
    title: "SENTINEL",
    description:
      "Security platform that continuously monitors code repositories, catching vulnerable and outdated dependencies before they reach production and alerting teams with fixes.",
    image: SentinelImage,
    liveLink: "https://sentinelbase.vercel.app",
    technologies: ["React", ".NET", "PostgreSQL"],
  },
  {
    title: "TERMETIS",
    description:
      "Complete web platform for an African dance association, combining a public showcase site, a private members' area for sharing videos and a full admin panel.",
    image: TermetisImage,
    liveLink: "https://termetis.vercel.app",
    technologies: ["React", ".NET", "PostgreSQL"],
  },
  {
    title: "L'ATELIER DE MANON",
    description:
      "E-commerce website to showcase and customize jewelry, featuring a full admin interface to manage content and orders.",
    image: AtelierManonImage,
    githubLink: "https://github.com/IKLSI/Atelier-Manon-Front",
    technologies: ["React", "CodeIgniter"],
  },
  {
    title: "ROUTE SOLVER",
    description:
      "Delivery route optimizer using mathematical modeling and heuristic algorithms to minimize distance under vehicle capacity constraints.",
    image: RouteSolverImage,
    githubLink: "https://github.com/IKLSI/RouteSolver",
    liveLink: "https://s601.vercel.app",
    technologies: ["React", "CPLEX", "Vis.js"],
  },
  {
    title: "TASK MATE",
    description:
      "Task management web app with real-time filtering and priority sorting to keep daily workflows organized.",
    image: TaskMateImage,
    githubLink: "https://github.com/IKLSI/TaskMate",
    technologies: ["CodeIgniter"],
  },
  {
    title: "HTMLCSS AUTOCOMPLETE",
    description:
      "VSCode extension that speeds up HTML and CSS development with handy snippets and shortcuts, enabling rapid creation of components and layouts.",
    image: HtmlCssAutocompleteImage,
    githubLink: "https://github.com/IKLSI/HtmlCSS-Completion",
    liveLink:
      "https://marketplace.visualstudio.com/items?itemName=0KLS0.htmlcss-completion",
    technologies: ["TypeScript"],
  },
];
