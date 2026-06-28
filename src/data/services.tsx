export interface Service {
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    title: "Full-Stack Product\nDevelopment",
    description:
      "From schema to screen, I handle every layer of the stack to deliver complete, production-ready web products.",
    tags: ["React", "TypeScript", ".NET"],
  },
  {
    title: "Desktop Application\nDevelopment",
    description:
      "I build desktop applications that handle complex workflows reliably, tailored to real business constraints.",
    tags: [".NET", "WPF"],
  },
  {
    title: "Code Review &\nRefactoring",
    description:
      "I turn messy, hard-to-maintain code into clean, structured systems that teams can actually work with.",
    tags: ["Maintainability", "Clean Code"],
  },
];
