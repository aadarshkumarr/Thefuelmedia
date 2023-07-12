import "./App.css";
import About from "./components/About";
import NavbarDesktop from "./components/NavbarDesktop";
import Ourwork from "./components/Ourwork";
import Services from "./components/Services";
import Socials from "./components/socials";
import { serviceData } from "./data/service.data";
import { faqData } from "./data/faqs.data";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { useState } from "react";
import mainVideo from "./assets/Main.mp4";
import mainImage from "./assets/main.png";
import Team from "./components/Team";
import ReactGA from "react-ga";
import Testimonial from "./components/Testimonial/Testimonial";
import Partner from "./components/Partner";

function App() {
	const TRACKING_ID = "UA-241660133-3";
	ReactGA.initialize(TRACKING_ID);

	const [FaqData, setFaqData] = useState(faqData);
	const [ServiceData, setServiceData] = useState(serviceData);

	const toggleFaqData = (index) => {
		setFaqData(
			faqData.map((faq, i) => {
				if (faq.isOpen === true) {
					faq.isOpen = false;
				} else {
					if (i === index) {
						faq.isOpen = true;
					} else {
						faq.isOpen = false;
					}
				}
				return faq;
			})
		);
	};

	const toggleServiceData = (index) => {
		setServiceData(
			serviceData.map((service, i) => {
				if (service.isOpen === true) {
					service.isOpen = false;
				} else {
					if (i === index) {
						service.isOpen = true;
					} else {
						service.isOpen = false;
					}
				}
				return service;
			})
		);
	};

	return (
		<>
			<div className="Main">
				<Socials />
				<NavbarDesktop />
				<div className="HomeSection" id="home">
					<img className="mainImage" src={mainImage} alt="iamge" />
					<video
						controls={false}
						className="Vid"
						autoPlay={true}
						loop
						muted
						playsInline
						src={mainVideo}
						width="100%"></video>
				</div>
			</div>
			<About />
			<Services
				sub={"Services we offer to our clients"}
				heading={"Services"}
				data={ServiceData}
				toggleData={toggleServiceData}
			/>
			<Team />
			<Ourwork />

			<Partner />
			<Testimonial />
			<Services
				sub={"How can we help you?"}
				heading={"FAQs"}
				data={FaqData}
				toggleData={toggleFaqData}
			/>
			<ContactUs />
			<Footer />
		</>
	);
}

export default App;
