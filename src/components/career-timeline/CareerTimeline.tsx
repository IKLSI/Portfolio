import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface CareerItem {
  period: string;
  title: string;
  subtitle: string;
  description: string;
}

const career: CareerItem[] = [
  {
    period: "2025 — Today",
    title: "React & .NET Developer",
    subtitle: "FTEL",
    description:
      "Designing and developing internal tools to automate and optimize business processes. Adding new features to existing .NET applications in an Agile environment.",
  },
  {
    period: "2025 - 2028",
    title: "Engineering Degree",
    subtitle: "ESIGELEC",
    description:
      "Generalist engineering program with a focus on Digital Services Engineering, emphasizing application development, project management, and data security.",
  },
  {
    period: "2024 - 2025",
    title: "Web & Desktop Application Developer",
    subtitle: "EAI",
    description:
      "Optimized and enhanced existing .NET and DevExpress software solutions to meet specific client needs. Implemented efficient processes for data handling and management, improving overall project performance and reliability.",
  },
  {
    period: "2022 - 2025",
    title: "Bachelor's Degree in Computer Science",
    subtitle: "BUT Informatique",
    description:
      "Gained strong skills in programming, databases, algorithms, and systems, with practical experience in software development, preparing to design reliable and high-performance applications.",
  },
];

export const CareerTimeline = () => {
  return (
    <Box component="section" id="career" sx={{ py: 5, mt: "6rem" }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: "5rem" }}>
          <Typography
            sx={{
              mb: 1,
              fontWeight: 500,
              color: "primary.main",
              fontSize: "0.875rem",
              letterSpacing: "0.2em",
            }}
          >
            MY PROFESSIONAL
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
            TIMELINE
          </Typography>
        </Box>

        <Box sx={{ mx: "auto", maxWidth: 900 }}>
          {career.map((item, index) => (
            <Grid
              key={index}
              container
              sx={{ mb: 5, alignItems: "flex-start" }}
            >
              <Grid
                size={{ xs: 12, md: 3 }}
                sx={{
                  textAlign: { xs: "left", md: "right" },
                  mb: { xs: 1, md: 0 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "flex-start", md: "flex-end" },
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    display: "block",
                    fontWeight: 600,
                    color: "text.primary",
                    fontSize: "1rem",
                  }}
                >
                  {item.period}
                </Typography>
                <Box
                  sx={{
                    mt: 1,
                    height: 3,
                    width: "50%",
                    bgcolor: "secondary.main",
                    borderRadius: 1,
                    transition: "all 0.3s ease",
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 9 }} sx={{ pl: { md: 4 } }}>
                <Typography
                  component="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 0.5,
                    textTransform: "uppercase",
                    fontSize: "1.2rem",
                    color: "text.primary",
                    opacity: 0.8,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    mb: 1,
                    color: "text.secondary",
                    fontWeight: 500,
                    fontSize: "1rem",
                    fontFamily: "Gill Sans, sans-serif",
                  }}
                >
                  {item.subtitle}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    mb: 0,
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    color: "text.secondary",
                    maxWidth: 700,
                    fontFamily: "Gill Sans, sans-serif",
                  }}
                >
                  {item.description}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CareerTimeline;
