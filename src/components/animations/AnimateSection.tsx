import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimateSectionProps {
	children: ReactNode;
	y?: number;
	scale?: number;
	duration?: number;
}

export const AnimateSection = ({
	children,
	y = 50,
	scale = 0.95,
	duration = 1.2,
}: AnimateSectionProps) => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!sectionRef.current) {
			return;
		}

		gsap.fromTo(
			sectionRef.current,
			{ opacity: 0, y, scale },
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			}
		);
	}, [y, scale, duration]);

	return <div ref={sectionRef}>{children}</div>;
};