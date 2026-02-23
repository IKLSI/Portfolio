import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  { name: ".NET", icon: "https://cdn.simpleicons.org/dotnet" },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "SQL Server",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftsqlserver.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export const SkillsSection = () => {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: 5,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default",
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            sx={{
              mb: 1,
              fontWeight: 500,
              color: "primary.main",
              fontSize: "0.875rem",
              letterSpacing: "0.2em",
            }}
          >
            MY TECH STACK
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "1.5rem",
              letterSpacing: "-0.02em",
              color: "text.primary",
            }}
          >
            SKILLS &amp; EXPERTISE
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: 4,
            justifyItems: "center",
          }}
        >
          {skills.map((skill, index) => (
            <Paper
              key={index}
              elevation={1}
              sx={{
                width: "100%",
                borderRadius: 4,
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "default",
                boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Box
                component="img"
                src={skill.icon}
                alt={skill.name}
                sx={{
                  width: 48,
                  height: 48,
                  objectFit: "contain",
                  mb: 1,
                  transition: "transform 0.25s ease",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              />
              <Typography
                component="span"
                sx={{
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  fontFamily: "Gill Sans, sans-serif",
                }}
              >
                {skill.name}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
