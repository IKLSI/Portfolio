import type { ReactNode } from "react";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    icon: <WebOutlinedIcon sx={{ fontSize: 32, color: "primary.main" }} />,
    title: "Full-Stack Product Development",
    description:
      "From schema to screen, I handle every layer of the stack to deliver complete, production-ready web products.",
    tags: ["React", "TypeScript", ".NET"],
  },
  {
    icon: <LaptopOutlinedIcon sx={{ fontSize: 32, color: "primary.main" }} />,
    title: "Desktop Application Development",
    description:
      "I build desktop applications that handle complex workflows reliably, tailored to real business constraints.",
    tags: [".NET", "WPF"],
  },
  {
    icon: (
      <FindInPageOutlinedIcon sx={{ fontSize: 32, color: "primary.main" }} />
    ),
    title: "Code Review &\nRefactoring",
    description:
      "I turn messy, hard-to-maintain code into clean, structured systems that teams can actually work with.",
    tags: ["Refactoring", "Clean Code"],
  },
];
