export interface Project {
  title: string;
  description: string;
  image: string;
  githubLink?: string;
  liveLink?: string;
  technologies?: string[];
}

export const projects: Project[] = [
  {
    title: "PREMET",
    description:
      "Redesign of an internal audio message broadcasting application for train stations and airports, providing centralized and reliable announcement management.",
    image: "https://assets.skiesmag.com/wp-content/uploads/2024/03/yvr_airport_aug_4_2020.jpg",
    liveLink: "https://www.eai.fr/Produits",
    technologies: [".NET", "WPF"],
  },
  {
    title: "SCRAPPER",
    description:
      "Internal tool to track projects, manage library versions, and detect outdated or vulnerable dependencies to facilitate maintenance.",
    image: "https://wydden.com/wp-content/uploads/2017/08/outils-scraper-sans-code-scraping.jpg",
    liveLink: "https://www.ftel.fr",
    technologies: [".NET"],
  },
  {
    title: "L'ATELIER DE MANON",
    description:
      "E-commerce website to showcase and customize jewelry, featuring a full admin interface to manage content and orders.",
    image: "https://github.com/IKLSI/Atelier-Manon-Front/blob/main/public/manon_about_4.webp?raw=true",
    githubLink: "https://github.com/IKLSI/Atelier-Manon-Front",
    technologies: ["React", "CodeIgniter"],
  },
  {
    title: "TASK MATE",
    description:
      "Web application for task management with an intuitive interface, allowing users to add, track, and filter tasks to boost daily productivity.",
    image: "https://www.protegez-vous.ca/var/protegez_vous/storage/images/3/0/5/5/3475503-1-fre-CA/520dd560a061-gestion_de_taches.jpg",
    githubLink: "https://github.com/IKLSI/TaskMate",
    technologies: ["CodeIgniter"],
  },
  {
    title: "SHOWROOM",
    description:
      "Interactive showcase website for a car brand with a modern, responsive design focused on user experience.",
    image: "https://images.hdqwalls.com/wallpapers/bmw-m-sport-car-dh.jpg",
    githubLink: "https://github.com/IKLSI/BMW",
    liveLink: "https://iklsi.github.io/BMW/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "HTMLCSS AUTOCOMPLETE",
    description:
      "VSCode extension that speeds up HTML and CSS development with handy snippets and shortcuts, enabling rapid creation of components and layouts.",
    image: "https://img.phonandroid.com/2014/12/taper-plus-vite.jpg",
    githubLink: "https://github.com/IKLSI/HtmlCSS-Completion",
    liveLink: "https://marketplace.visualstudio.com/items?itemName=0KLS0.htmlcss-completion",
    technologies: ["TypeScript"],
  },
];
