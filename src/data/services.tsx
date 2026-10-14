export interface Service {
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    title: "Full-Stack\nDevelopment",
    description:
      "I build web apps end to end, from the database to the interface, and see them all the way through to production.",
    tags: ["React", "TypeScript", ".NET"],
  },
  {
    title: "Desktop\nSoftware",
    description:
      "I build Windows software that fits the way your team actually works, and keeps running smoothly day after day.",
    tags: ["WPF", ".NET"],
  },
  {
    title: "Code Review &\nRefactoring",
    description:
      "I turn messy, hard-to-maintain code into clean, well-structured systems that teams can easily read, extend and trust.",
    tags: ["Maintainability", "Clean Code"],
  },
];
