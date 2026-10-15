import ReactIcon from "../assets/icons/react.svg";
import DotnetIcon from "../assets/icons/dotnet.svg";
import NodejsIcon from "../assets/icons/nodejs.svg";
import TypescriptIcon from "../assets/icons/typescript.svg";
import JavaIcon from "../assets/icons/java.svg";
import PythonIcon from "../assets/icons/python.svg";
import PostgresqlIcon from "../assets/icons/postgresql.svg";
import SqlserverIcon from "../assets/icons/sqlserver.svg";
import DockerIcon from "../assets/icons/docker.svg";
import GitIcon from "../assets/icons/git.svg";

export interface Skill {
  name: string;
  icon: string;
}

export const skills: Skill[] = [
  {
    name: "React",
    icon: ReactIcon,
  },
  { name: ".NET", icon: DotnetIcon },
  {
    name: "Node.js",
    icon: NodejsIcon,
  },
  {
    name: "TypeScript",
    icon: TypescriptIcon,
  },
  {
    name: "Java",
    icon: JavaIcon,
  },
  {
    name: "Python",
    icon: PythonIcon,
  },
  {
    name: "PostgreSQL",
    icon: PostgresqlIcon,
  },
  {
    name: "SQL Server",
    icon: SqlserverIcon,
  },
  {
    name: "Docker",
    icon: DockerIcon,
  },
  {
    name: "Git",
    icon: GitIcon,
  },
];
