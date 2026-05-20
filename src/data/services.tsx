import type { ReactNode } from "react";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    icon: <WebOutlinedIcon sx={{ fontSize: 32, color: "primary.main" }} />,
    title: "Full-Stack Web Applications",
    description:
      "From database schema to interface, I own the full lifecycle using React and .NET to deliver complete web products.",
    tags: ["React", "TypeScript", ".NET"],
  },
  {
    icon: <LaptopOutlinedIcon sx={{ fontSize: 32, color: "primary.main" }} />,
    title: "Desktop Software",
    description:
      "I build desktop applications that handle complex workflows reliably, tailored to real business constraints.",
    tags: [".NET", "WPF", "DevExpress"],
  },
  {
    icon: <AccountTreeOutlinedIcon sx={{ fontSize: 32, color: "primary.main" }} />,
    title: "APIs & System Design",
    description:
      "I design and build backend systems engineered for reliability and long-term maintainability.",
    tags: [".NET", "Scalar", "SQL Server"],
  },
];
