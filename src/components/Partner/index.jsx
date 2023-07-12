import React from "react";
import { Link } from "react-router-dom";
// import './assets';
import L1 from "../../assets/partner_logo/Damante Perfumes Logo.png";
import L2 from "../../assets/partner_logo/s2-01__1_-removebg-preview.png";
import L3 from "../../assets/partner_logo/Logo designs (1).png";
import L4 from "../../assets/partner_logo/logo hcdc.png";
import L5 from "../../assets/partner_logo/Olip Lighting Logo.png";
import L6 from "../../assets/partner_logo/Etsy_Profile_Image-removebg-preview.png";
import L7 from "../../assets/partner_logo/WW_logo-removebg-preview.png";
import L8 from "../../assets/Life_methods-removebg-preview.png";

import "./index.css";
import Line from "../Line";
export default function index() {
	return (
		<div className="main_container" id="client">
			<p>Awesome people we work with</p>
			<h1>Our Clientele</h1>
			<Line />
			<div className="logo_container">
				<div className="image">
					<a href="https://damanteperfumes.com/" target={"_blank"}>
						<img src={L1} alt="logo" />
					</a>
				</div>

				<div className="image">
					<a>
						<img src={L2} alt="logo" />
					</a>
				</div>

				<div className="image">
					<a
						href="https://www.figma.com/file/nYOQtDQJiKdP3mWGtVfUOm/Business-Card-mockup-(The-Fuel-Media)?node-id=0-1&t=HDdcCxn0VM8cmfmh-0"
						target={"_blank"}>
						<img src={L3} alt="logo" />
					</a>
				</div>

				<div className="image">
					<a>
						<img src={L4} alt="logo" />
					</a>
				</div>

				<div className="image">
					<a>
						<img src={L5} alt="logo" />
					</a>
				</div>

				<div className="image">
					<a href="https://www.cancrie.co/" target={"_blank"}>
						<img src={L6} alt="logo" />
					</a>
				</div>
				<div className="image">
					<a href="https://www.wallpaperworld.co.in/" target={"_blank"}>
						<img src={L7} alt="logo" />
					</a>
				</div>
				<div className="image">
					<a href="https://www.lifemethods.in/" target={"_blank"}>
						<img src={L8} alt="logo" />
					</a>
				</div>
			</div>
			<div className="logo_container_landscape">
				<div className="logo_container_upper">
					<div className="image">
						<a href="https://damanteperfumes.com/" target={"_blank"}>
							<img src={L1} alt="logo" />
						</a>
					</div>

					<div className="image">
						<a>
							<img src={L2} alt="logo" />
						</a>
					</div>

					<div className="image_lower">
						<a
							href="https://www.figma.com/file/nYOQtDQJiKdP3mWGtVfUOm/Business-Card-mockup-(The-Fuel-Media)?node-id=0-1&t=HDdcCxn0VM8cmfmh-0"
							target={"_blank"}>
							<img src={L3} alt="logo" />
						</a>
					</div>

					<div className="image_lower">
						<a>
							<img src={L4} alt="logo" />
						</a>
					</div>
				</div>

				<div className="logo_container_lower">
					<div className="image_lower">
						<a>
							<img src={L5} alt="logo" />
						</a>
					</div>

					<div className="image">
						<a href="https://www.cancrie.co/" target={"_blank"}>
							<img src={L6} alt="logo" />
						</a>
					</div>
					<div className="image">
						<a href="https://www.wallpaperworld.co.in/" target={"_blank"}>
							<img src={L7} alt="logo" />
						</a>
					</div>
					<div className="image">
						<a href="https://www.lifemethods.in/" target={"_blank"}>
							<img src={L8} alt="logo" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
