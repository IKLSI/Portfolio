export interface CareerItem {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  type: "work" | "education";
  image: string;
}

export const career: CareerItem[] = [
  {
    period: "2025 — Present",
    title: "React & .NET Developer",
    subtitle: "FTEL",
    description:
      "Maintaining and evolving production .NET applications, shipping features, optimising existing modules, reducing technical debt, and developing internal automation tools in an Agile environment.",
    type: "work",
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQEv8doKUc6AgQ/company-logo_200_200/company-logo_200_200/0/1654611582356/ftel_logo?e=2147483647&v=beta&t=HtA3T1Yo4Y21CjlKFhEiiOg2a1odLhBFkvQ8hnACud4",
  },
  {
    period: "2025 — 2028",
    title: "Engineering Degree",
    subtitle: "ESIGELEC",
    description:
      "Generalist engineering program blending mathematics, electronics, software development, networking and management across a broad technical foundation.",
    type: "education",
    image:
      "https://www.esigelec.fr/sites/default/files/styles/930_640/public/2023-06/ESIGELEC%20Rouen.jpg?itok=mLed5bjg",
  },
  {
    period: "2024 — 2025",
    title: "Web & Desktop Developer",
    subtitle: "EAI",
    description:
      "Optimized and enhanced .NET and DevExpress software solutions to meet specific client needs. Implemented efficient processes for data handling, improving overall project performance and reliability.",
    type: "work",
    image: "https://media.licdn.com/dms/image/v2/C560BAQHn-ZuKiWDeDA/company-logo_200_200/company-logo_200_200/0/1659687134695/etudes_et_applications_informatiques_logo?e=2147483647&v=beta&t=efgaMUtpyh3OEujVnhvU0z36Q5oFtcMwEaQ7uikh1VY",
  },
  {
    period: "2022 — 2025",
    title: "Bachelor's in Computer Science",
    subtitle: "IUT Le Havre",
    description:
      "Gained strong skills in programming, databases, algorithms, and systems with practical experience in software development.",
    type: "education",
    image:
      "https://www-iut.univ-lehavre.fr/wp-content/uploads/2019/07/sommaire-gauche-1024x683.jpg",
  },
];
