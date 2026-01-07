import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ScrollProgress = () => {
	const barRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left" });
		gsap.to(barRef.current, { scaleX: 1, ease: "none", scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: true }});
	}, []);

	return (
		<div className="position-fixed bottom-0 start-0 w-100 z-3 bg-transparent mb-1">
			<div ref={barRef} style={{ height: "6px", backgroundColor: "#8f44fd", width: "100%" }}></div>
		</div>
	);
};