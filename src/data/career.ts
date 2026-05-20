export interface CareerItem {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  type: "work" | "education";
}

export const career: CareerItem[] = [
  {
    period: "2025 — Present",
    title: "React & .NET Developer",
    subtitle: "FTEL",
    description:
      "Maintaining and evolving production .NET applications, shipping features, optimising existing modules, reducing technical debt, and developing internal automation tools in an Agile environment.",
    type: "work",
  },
  {
    period: "2025 — 2028",
    title: "Engineering Degree",
    subtitle: "ESIGELEC",
    description:
      "Generalist engineering program blending mathematics, electronics, software development, networking and management across a broad technical foundation.",
    type: "education",
  },
  {
    period: "2024 — 2025",
    title: "Web & Desktop Developer",
    subtitle: "EAI",
    description:
      "Optimized and enhanced .NET and DevExpress software solutions to meet specific client needs. Implemented efficient processes for data handling, improving overall project performance and reliability.",
    type: "work",
  },
  {
    period: "2022 — 2025",
    title: "Bachelor's in Computer Science",
    subtitle: "IUT Le Havre",
    description:
      "Gained strong skills in programming, databases, algorithms, and systems with practical experience in software development.",
    type: "education",
  },
];
