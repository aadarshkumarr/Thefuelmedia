import "./index.css";
import logo from "../../assets/logo.png";

export default () => {
	return (
		// <div className='Navbar-Desktop'>
		//     <div className='Navbar-Desktop__logo-container'>
		//         <img className='Navbar-Desktop__logo' src={logo} alt="the fuel media logo" />
		//     </div>
		//     <div className='Navbar-Desktop__menu'>
		//         <a className='Navbar-Desktop__menu-item'>Home</a>
		//         <a className='Navbar-Desktop__menu-item'>About</a>
		//         <a className='Navbar-Desktop__menu-item'>Services</a>
		//         <a className='Navbar-Desktop__menu-item'>Our Work</a>
		//         <a className='Navbar-Desktop__menu-item'>Team</a>
		//     </div>
		//     <div className='Navbar-Desktop__contact-container'>
		//         <button className='Navbar-Desktop__contact-button'>Contact Us</button>
		//     </div>
		// </div>

		<nav class="navbar navbar-expand-lg navbar-dark bg-dark Navbar-Desktop">
			<div className="Navbar-Desktop__logo-container">
				<img
					className="Navbar-Desktop__logo"
					src={logo}
					alt="the fuel media logo"
				/>
			</div>
			<button
				class="navbar-toggler"
				type="button"
				id="hamburger_menu_button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav mr-auto Navbar__menu text-center">
					<li className="Navbar_Desktop__MI">
						<div
							className="Navbar-Desktop__menu-item"
							onClick={() => {
								document
									.getElementById("home")
									.scrollIntoView({ behavior: "smooth" });
								document.getElementById("hamburger_menu_button").click();
							}}>
							Home
						</div>
					</li>
					<li className="Navbar_Desktop__MI">
						<div
							className="Navbar-Desktop__menu-item"
							onClick={() => {
								document
									.getElementById("about")
									.scrollIntoView({ behavior: "smooth" });
								document.getElementById("hamburger_menu_button").click();
							}}>
							About
						</div>
					</li>
					<li className="Navbar_Desktop__MI">
						<div
							className="Navbar-Desktop__menu-item"
							onClick={() => {
								document
									.getElementById("services")
									.scrollIntoView({ behavior: "smooth" });
								document.getElementById("hamburger_menu_button").click();
							}}>
							Services
						</div>
					</li>

					<li className="Navbar_Desktop__MI">
						<div
							className="Navbar-Desktop__menu-item"
							onClick={() => {
								document
									.getElementById("team")
									.scrollIntoView({ behavior: "smooth" });
								document.getElementById("hamburger_menu_button").click();
							}}>
							Team
						</div>
					</li>

					<li className="Navbar_Desktop__MI">
						<div
							className="Navbar-Desktop__menu-item"
							onClick={() => {
								document
									.getElementById("ourwork")
									.scrollIntoView({ behavior: "smooth" });
								document.getElementById("hamburger_menu_button").click();
							}}>
							Our Work
						</div>
					</li>
					<li className="Navbar_Desktop__MI">
						<div
							className="Navbar-Desktop__menu-item"
							onClick={() => {
								document
									.getElementById("client")
									.scrollIntoView({ behavior: "smooth" });
								document.getElementById("hamburger_menu_button").click();
							}}>
							Our Clientele
						</div>
					</li>
					<li className="Navbar_Desktop__MI">
						<div
							className="Navbar-Desktop__menu-item"
							onClick={() => {
								document
									.getElementById("testimonial")
									.scrollIntoView({ behavior: "smooth" });
								document.getElementById("hamburger_menu_button").click();
							}}>
							Testimonials
						</div>
					</li>
				</ul>
				<div
					style={{
						backgroundColor: "#161616",
						padding: "1%",
						display: "flex",
						justifyContent: "center",
					}}>
					<button
						className="Navbar-Desktop__contact-button"
						onClick={() => {
							document
								.getElementById("contact")
								.scrollIntoView({ behavior: "smooth" });
							document.getElementById("hamburger_menu_button").click();
						}}>
						Contact Us
					</button>
				</div>
			</div>
		</nav>
	);
};
