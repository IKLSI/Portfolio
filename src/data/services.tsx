import type { ReactNode } from "react";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";

export interface Service {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    number: "01",
    icon: <LayersOutlinedIcon sx={{ fontSize: 32, color: "primary.main" }} />,
    title: "Full-Stack Web Applications",
    description:
      "From database schema to interface, I own the full lifecycle using React and .NET to deliver complete web products.",
    tags: ["React", "TypeScript", ".NET"],
  },
  {
    number: "02",
    icon: <DesktopWindowsOutlinedIcon sx={{ fontSize: 32, color: "primary.main" }} />,
    title: "Desktop Software",
    description:
      "I build desktop applications that handle complex workflows reliably, tailored to real business constraints.",
    tags: [".NET", "WPF", "DevExpress"],
  },
  {
    number: "03",
    icon: <ApiOutlinedIcon sx={{ fontSize: 32, color: "primary.main" }} />,
    title: "APIs & System Design",
    description:
      "I design and build backend systems engineered for reliability and long-term maintainability.",
    tags: [".NET", "Swagger", "SQL Server"],
  },
];
