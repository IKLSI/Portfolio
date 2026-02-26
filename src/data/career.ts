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
      "Designing and developing internal tools to automate and optimize business processes. Adding new features to existing .NET applications in an Agile environment.",
    type: "work",
  },
  {
    period: "2025 — 2028",
    title: "Engineering Degree",
    subtitle: "ESIGELEC",
    description:
      "Generalist engineering program with a focus on Digital Services Engineering, emphasizing application development, project management, and data security.",
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
    subtitle: "BUT Informatique",
    description:
      "Gained strong skills in programming, databases, algorithms, and systems with practical experience in software development.",
    type: "education",
  },
];
