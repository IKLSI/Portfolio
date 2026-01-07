interface ProjectCardProps {
	title: string;
	description: string;
	image: string;
	technologies?: string[];
	githubLink?: string;
	liveLink?: string;
}

export default function ProjectCard({
	title,
	description,
	image,
	technologies = [],
	githubLink,
	liveLink,
}: ProjectCardProps) {
	return (
		<div className="col-12 col-md-6 col-lg-4 mb-5">
			<div
				className="position-relative rounded-4 shadow-lg overflow-hidden"
				style={{ cursor: "pointer", transformStyle: "preserve-3d", transition: "transform 0.4s ease, box-shadow 0.4s ease" }}
				onMouseEnter={e => {
					e.currentTarget.style.transform = "scale(1.05) rotateY(1.5deg)";
					e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.45)";
					const overlay = e.currentTarget.querySelector<HTMLDivElement>(".overlay");
					if (overlay) {
						overlay.style.opacity = "1";
					}
				}}
				onMouseLeave={e => {
					e.currentTarget.style.transform = "scale(1) rotateY(0deg)";
					e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
					const overlay = e.currentTarget.querySelector<HTMLDivElement>(".overlay");
					if (overlay) {
						overlay.style.opacity = "0";
					}
				}}
			>
				<img src={image} alt={title} className="w-100" style={{ height: "250px", objectFit: "cover", objectPosition: "center" }} />
				<div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column p-0" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", color: "#fff", opacity: 0, transition: "opacity 0.35s ease" }}>
					<div className="position-relative flex-grow-1 d-flex flex-column">
						<div className="position-absolute top-0 end-0 d-flex flex-wrap gap-1 mt-2 me-3">
							{technologies.map((tech, idx) => (
								<span key={idx} className="badge text-white py-1 px-2" style={{ fontSize: "0.7rem", fontWeight: 600, background: "linear-gradient(135deg, #6a00a3, #0050a3)", borderRadius: "0.8rem", boxShadow: "0 2px 5px rgba(0,0,0,0.3)" }}>
									{tech}
								</span>
							))}
						</div>

						<div className="p-3 text-start">
							<h5 className="fw-bold mb-0 fs-6">{title}</h5>
						</div>

						<div className="flex-grow-1 d-flex align-items-center px-3">
							<p className="mb-0" style={{ fontSize: "0.95rem", lineHeight: 1.4, textShadow: "0 1px 3px rgba(0,0,0,0.5)", fontFamily: "Gill Sans, sans-serif" }}>
								{description}
							</p>
						</div>
					</div>

					<div className="w-100 bg-opacity-90 d-flex justify-content-end align-items-center p-2">
						<div className="d-flex gap-2">
							{githubLink && (
								<a href={githubLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-light rounded-circle p-2 shadow-sm">
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github" style={{ width: 24, height: 24 }} />
								</a>
							)}
							{liveLink && (
								<a href={liveLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-light rounded-circle p-2 shadow-sm">
									<img src="https://cdn-icons-png.flaticon.com/512/841/841364.png" alt="Live" style={{ width: 24, height: 24 }} />
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}