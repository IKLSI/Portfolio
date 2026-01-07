export const Header = () => {
	return (
		<header className="w-100 border-bottom border-dark position-sticky top-0 bg-white z-3">
			<nav className="container-fluid d-flex align-items-center justify-content-between py-3 px-4 menu">
				<div className="header-logo fs-3 fw-bold">KLS</div>

				<ul className="d-flex gap-5 m-0 p-0 fw-light list-unstyled">
					<li>
						<a href="#home" className="text-dark text-decoration-none menu-link">HOME</a>
					</li>
					<li>
						<a href="#about" className="text-dark text-decoration-none menu-link">ABOUT</a>
					</li>
					<li>
						<a href="#projects" className="text-dark text-decoration-none menu-link">PROJECTS</a>
					</li>
				</ul>

				<div className="animated-border"></div>
			</nav>
		</header>
	);
};