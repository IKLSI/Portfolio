import ProfilImage from "../assets/img/Presentation.jpeg";

export const Presentation = () => {
	return (
		<section id="about" className="container mb-5 d-flex flex-column justify-content-center" style={{ minHeight: "80vh" }}>
			<div className="row justify-content-center align-items-center w-100 gx-5 mx-auto col-xl-10">
				<div className="col-md-6 col-lg-5 px-3">
					<h1 className="display-4 fw-bold mb-4" style={{ letterSpacing: "-0.02em" }}>
						About Me <span>👋🏼</span>
					</h1>

					<div className="text-secondary" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
						<p className="mb-2">
							Software Engineer & <strong className="text-dark">Full-Stack Developer</strong> at&nbsp;
							<a href="https://www.ftel.fr/" target="_blank" rel="noopener noreferrer" className="fw-bold text-dark text-decoration-underline" style={{ textUnderlineOffset: 4 }}>
								FTEL
							</a>
							.
						</p>

						<p className="mb-0">
							I develop <strong className="text-dark">clean, scalable, and production-ready applications</strong> that seamlessly integrate <strong className="text-dark">robust back-end architectures</strong> with <strong className="text-dark">intuitive, user-centered front-end experiences</strong>.  
						</p>
					</div>

					<div className="d-flex gap-2 mt-4">
						<a href="https://github.com/IKLSI" target="_blank" rel="noreferrer">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github" style={{ width: 36, height: 36, opacity: 0.8 }} />
						</a>

						<a href="https://www.linkedin.com/in/kyliann-levesque-87711a277/" target="_blank" rel="noreferrer">
							<img src="https://cdn-icons-png.flaticon.com/512/1384/1384046.png" alt="LinkedIn" style={{ width: 36, height: 36, opacity: 0.8 }} />
						</a>
					</div>
				</div>

				<div className="col-md-6 col-lg-5 text-center mt-4 mt-md-0">
					<div className="d-inline-block p-3">
						<img src={ProfilImage} alt="Personal Photo" className="img-fluid shadow-lg" style={{ maxWidth: "70%", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", boxShadow: "0 10px 30px rgba(0,0,0,0.25)"}} />
					</div>
				</div>
			</div>
		</section>
	);
};
