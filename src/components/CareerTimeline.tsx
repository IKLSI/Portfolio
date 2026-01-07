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
		description: "Designing and developing internal tools to automate and optimize business processes. Adding new features to existing .NET applications in an Agile environment.",
	},
	{
		period: "2025 - 2028",
		title: "Engineering Degree",
		subtitle: "ESIGELEC",
		description: "Generalist engineering program with a focus on Digital Services Engineering, emphasizing application development, project management, and data security.",
	},
	{
		period: "2024 - 2025",
		title: "Web & Desktop Application Developer",
		subtitle: "EAI",
		description: "Optimized and enhanced existing .NET and DevExpress software solutions to meet specific client needs. Implemented efficient processes for data handling and management, improving overall project performance and reliability.",
	},
	{
		period: "2022 - 2025",
		title: "Bachelor’s Degree in Computer Science",
		subtitle: "BUT Informatique",
		description: "Gained strong skills in programming, databases, algorithms, and systems, with practical experience in software development, preparing to design reliable and high-performance applications.",
	},
];

export const CareerTimeline = () => {
	return (
		<section id="career" className="py-5" style={{ marginTop: "6rem" }}>
			<div className="container">
				<div className="text-center" style={{ marginBottom: "5rem" }}>
					<p className="mb-2 fw-medium text-secondary fs-6" style={{ letterSpacing: "0.2em" }}>
						MY PROFESSIONAL
					</p>
					<h2 className="fw-bold text-uppercase fs-3" style={{ letterSpacing: "-0.02em", color: "#212529" }}>
						TIMELINE
					</h2>
				</div>

				<div className="mx-auto" style={{ maxWidth: 900 }}>
					{career.map((item, index) => (
						<div key={index} className="row mb-5 align-items-center">
							<div className="col-12 col-md-3 text-md-end mb-2 mb-md-0 d-flex flex-column align-items-md-end">
								<span className="d-block fw-semibold text-dark" style={{ fontSize: "1rem" }}>
									{item.period}
								</span>
								<div className="mt-2" style={{ height: 3, width: "50%", backgroundColor: "#0d6efd", borderRadius: 3, transition: "all 0.3s ease" }} />
							</div>

							<div className="col-12 col-md-9 ps-md-4">
								<h4 className="fw-bold mb-1 text-uppercase" style={{ fontSize: "1.2rem", color: "#212529", opacity: 0.8 }}>
									{item.title}
								</h4>
								<div className="mb-2 text-secondary fw-medium" style={{ fontSize: "1rem", fontFamily: "Gill Sans, sans-serif" }}>
									{item.subtitle}
								</div>
								<p className="mb-0" style={{ fontSize: "1rem", lineHeight: 1.8, color: "#343a40", maxWidth: 700, fontFamily: "Gill Sans, sans-serif" }}>
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CareerTimeline;