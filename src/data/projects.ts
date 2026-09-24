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
      "Security platform that continuously monitors code repositories, catching vulnerable and outdated dependencies before they reach production.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    liveLink: "https://sentinelbase.vercel.app",
    technologies: ["React", ".NET", "PostgreSQL"],
  },
  {
    title: "TERMETIS",
    description:
      "Complete web platform for an African dance association, combining a public showcase site, a private members' area for sharing videos and a full admin panel.",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&auto=format&fit=crop",
    liveLink: "https://termetis.vercel.app",
    technologies: ["React", ".NET", "PostgreSQL"],
  },
  {
    title: "L'ATELIER DE MANON",
    description:
      "E-commerce website to showcase and customize jewelry, featuring a full admin interface to manage content and orders.",
    image:
      "https://github.com/IKLSI/Atelier-Manon-Front/blob/main/public/manon_about_4.webp?raw=true",
    githubLink: "https://github.com/IKLSI/Atelier-Manon-Front",
    technologies: ["React", "CodeIgniter"],
  },
  {
    title: "ROUTE SOLVER",
    description:
      "Delivery route optimizer using mathematical modeling and heuristic algorithms to minimize distance under vehicle capacity constraints.",
    image:
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&auto=format&fit=crop",
    githubLink: "https://github.com/IKLSI/RouteSolver",
    liveLink: "https://s601.vercel.app",
    technologies: ["React", "CPLEX", "Vis.js"],
  },
  {
    title: "TASK MATE",
    description:
      "Task management web app with real-time filtering and priority sorting to keep daily workflows organized.",
    image:
      "https://www.protegez-vous.ca/var/protegez_vous/storage/images/3/0/5/5/3475503-1-fre-CA/520dd560a061-gestion_de_taches.jpg",
    githubLink: "https://github.com/IKLSI/TaskMate",
    technologies: ["CodeIgniter"],
  },
  {
    title: "HTMLCSS AUTOCOMPLETE",
    description:
      "VSCode extension that speeds up HTML and CSS development with handy snippets and shortcuts, enabling rapid creation of components and layouts.",
    image: "https://img.phonandroid.com/2014/12/taper-plus-vite.jpg",
    githubLink: "https://github.com/IKLSI/HtmlCSS-Completion",
    liveLink:
      "https://marketplace.visualstudio.com/items?itemName=0KLS0.htmlcss-completion",
    technologies: ["TypeScript"],
  },
];
