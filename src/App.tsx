import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/hero/HeroSection";
import { ScrollProgress } from "./components/animations/ScrollProgress";
import { WhatIDoSection } from "./components/services/WhatIDoSection";
import { ProjectsSection } from "./components/projects/ProjectsSection";
import { SkillsSection } from "./components/skills/SkillsSection";
import CareerTimeline from "./components/career/CareerTimeline";
import { Footer } from "./components/layout/Footer";
import { AnimateSection } from "./components/animations/AnimateSection";
import { WelcomeToast } from "./components/WelcomeToast";

export const App = () => {
  return (
    <>
      <WelcomeToast />
      <ScrollProgress />

      <Header />

      <HeroSection />

      <AnimateSection>
        <WhatIDoSection />
      </AnimateSection>

      <AnimateSection>
        <ProjectsSection />
      </AnimateSection>

      <AnimateSection>
        <SkillsSection />
      </AnimateSection>

      <AnimateSection>
        <CareerTimeline />
      </AnimateSection>

      <Footer />
    </>
  );
};

export default App;
