interface Skill {
	name: string;
	icon: string;
}

const skills: Skill[] = [
	{ name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
	{ name: ".NET", icon: "https://cdn.simpleicons.org/dotnet" },
	{ name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
	{ name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
	{ name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
	{ name: "SQL Server", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftsqlserver.svg" },
	{ name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
	{ name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
	{ name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
	{ name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export const SkillsSection = () => {
	return (
		<section id="skills" className="py-5 vh-100 d-flex align-items-center bg-white">
			<div className="container">
				<div className="text-center mb-5">
					<p className="mb-2 fw-medium text-secondary fs-6" style={{ letterSpacing: "0.2em" }}>
						MY TECH STACK
					</p>
					<h2 className="fw-bold text-uppercase fs-3" style={{ letterSpacing: "-0.02em", color: "#212529" }}>
						SKILLS & EXPERTISE
					</h2>
				</div>

				<div className="row g-4 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 justify-content-center">
					{skills.map((skill, index) => (
						<div key={index} className="col text-center">
							<div
								className="card border-0 shadow-sm rounded-4 p-3 h-100 d-flex flex-column align-items-center justify-content-center"
								style={{ transition: "transform 0.25s ease, box-shadow 0.25s ease", cursor: "default" }}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "translateY(-6px)";
									e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.12)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "translateY(0)";
									e.currentTarget.style.boxShadow = "";
								}}
							>
								<img
									src={skill.icon}
									alt={skill.name}
									className="mb-2"
									style={{
										width: 48,
										height: 48,
										objectFit: "contain",
										transition: "transform 0.25s ease",
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.transform = "scale(1.1)";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.transform = "scale(1)";
									}}
								/>
								<span className="fw-semibold small" style={{fontFamily: "Gill Sans, sans-serif"}}>{skill.name}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
