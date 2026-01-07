import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Footer = () => {
	return (
		<footer className="py-5 text-center" style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#f8f9fa", color: "#555", boxShadow: "0 -2px 10px rgba(0,0,0,0.05)" }}>
			<div className="container">
				<div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
					<div style={{ maxWidth: 300 }}>
						<h3 className="mb-3 pb-1 border-bottom border-2 border-primary fw-bold" style={{ fontSize: "16px" }}>
							Réseaux sociaux
						</h3>
						<ul className="list-unstyled d-flex justify-content-center gap-3 mt-2">
						{[
							{ href: "https://github.com/IKLSI", alt: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
							{ href: "https://www.linkedin.com/in/kyliann-levesque-87711a277/", alt: "LinkedIn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
							{ href: "https://medium.com/@kyliannlvs2", alt: "Medium", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/2048px-Medium_logo_Monogram.svg.png" }
						].map(({ href, alt, src }) => {
							const [hover, setHover] = useState(false);
							return (
							<li key={alt}>
								<a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Lien ${alt}`} className="d-inline-block" style={{ color: "inherit" }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
								<img src={src} alt={alt} style={{ width: 28, height: 28, borderRadius: 4, transform: hover ? "scale(1.2)" : "scale(1)", transition: "transform 0.4s ease-in-out, filter 0.4s ease-in-out"}} />
								</a>
							</li>
							);
						})}
						</ul>
					</div>

					<div style={{ maxWidth: 300 }}>
						<h3 className="mb-3 pb-1 border-bottom border-2 border-primary fw-bold" style={{ fontSize: "16px" }}>Localisation</h3>
						<p className="d-flex align-items-center justify-content-center mt-2" style={{ fontSize: "16px", color: "#121212" }}>
						<FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> France
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};