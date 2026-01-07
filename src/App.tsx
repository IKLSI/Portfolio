import type { FC } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ScrollProgress } from "./components/ScrollProgress";
import { Presentation } from "./components/Presentation";
import { ProjectsSection } from "./components/ProjectsSection";
import CareerTimeline from "./components/CareerTimeline";
import { SkillsSection } from "./components/SkillsSection";
import { Footer } from "./components/Footer";

export const App: FC = () => {
	return (
		<>
			<ScrollProgress />
			<Header />
			<HeroSection />
			<Presentation />
			<CareerTimeline />
			<SkillsSection />
			<ProjectsSection />
			<Footer />
		</>
	);
};

export default App;