import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/hero-section/HeroSection";
import { ScrollProgress } from "./components/animations/ScrollProgress";
import { Presentation } from "./components/hero-section/Presentation";
import { ProjectsSection } from "./components/projects-section/ProjectsSection";
import CareerTimeline from "./components/career-timeline/CareerTimeline";
import { SkillsSection } from "./components/skills-section/SkillsSection";
import { Footer } from "./components/layout/Footer";
import { AnimateSection } from "./components/animations/AnimateSection";

export const App = () => {
	return (
		<>
			<ScrollProgress />

			<Header />

			<AnimateSection>
				<HeroSection />
			</AnimateSection>

			<AnimateSection>
				<Presentation />
			</AnimateSection>

			<AnimateSection>
				<CareerTimeline />
			</AnimateSection>

			<AnimateSection>
				<SkillsSection />
			</AnimateSection>

			<AnimateSection>
				<ProjectsSection />
			</AnimateSection>

			<Footer />
		</>
	);
};


export default App;