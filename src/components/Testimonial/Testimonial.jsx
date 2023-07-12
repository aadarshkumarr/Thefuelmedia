import React, { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import "./Testimonial.css";

import img1 from "../../assets/partner_logo/Damante_Perfumes_Logo-removebg-preview (1).png";
import img2 from "../../assets/partner_logo/Etsy Profile Image.png";
import img3 from "../../assets/partner_logo/Logo_designs__1_-removebg-preview.png";
import img4 from "../../assets/partner_logo/logo_hcdc-removebg-preview (1).png";
import img5 from "../../assets/partner_logo/Olip Lighting Logo2.png";
import img6 from "../../assets/Life methods.png";
import img7 from "../../assets/partner_logo/s2-01 (1).png";
import img8 from "../../assets/partner_logo/WW_logo-removebg-preview-removebg-preview (1).png";
import Line from "../Line";

const Testimonial = () => {
	const swiperRef = useRef(null);
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const handleDragStart = (e) => e.preventDefault();

	useEffect(() => {
		swiperRef.current = new Swiper(".mySwiper", {
			effect: "coverflow",
			grabCursor: true,
			centeredSlides: true,
			dots: true,
			slidesPerView: "auto",
			spaceBetween: 60,
			initialSlide: 1,
			coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 600,
				modifier: 1,
				slideShadows: false,
			},
			pagination: {
				el: ".swiper-pagination",
			},
		});

		// Update swiper on component unmount
		return () => {
			swiperRef.current.destroy();
		};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		// Remove event listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current.params.slidesPerView = isSmallScreen ? 1 : "auto";
			swiperRef.current.params.spaceBetween = isSmallScreen ? 20 : 60;
			swiperRef.current.update();
		}
	}, [isSmallScreen]);

	const handleCardClick = (index) => {
		swiperRef.current.slideTo(index, 300);
	};
	const handleLastCardClick = () => {
		swiperRef.current.slideTo(0, 300);
	};
	const handleFirstCardClick = () => {
		swiperRef.current.slideTo(swiperRef.current.slides.length - 1, 300);
	};
	return (
		<>
			<div id="testimonial">
				<div className="heading">
					<div className="text-center ">
						<h3 className="miniTitle">What people say about us</h3>
					</div>
					<h4 className=" sectionTitle text-center">Testimonials</h4>
					<Line />
				</div>
				<section className="swiper mySwiper">
					<div className="swiper-wrapper">
						<div
							handleDragStart={handleDragStart}
							className="card swiper-slide"
							onClick={() => handleFirstCardClick()}>
							<div className="card__content">
								<p className="card__text">
									I had a great experience working with this company. They were
									attentive, communicative, and helped me achieve the results. I
									am so glad I chose to work with this company. I would highly
									recommend this company to anyone looking for reliable and
									effective services, and I look forward to working with them
									again in the future.
								</p>
								<div className="card__image">
									<img src={img7} alt="card image" />
									<p className="card_name">S2 Wheels</p>
									<p className="card_description">
										Responsive, knowledgeable and efficient in solving problems.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
						<div
							handleDragStart={handleDragStart}
							className="card swiper-slide"
							onClick={() => handleCardClick(1)}>
							<div className="card__content">
								<p className="card__text">
									The Fuel Media is one of the most dedicated team with their
									approach towards client feedback inclusion in their digital
									approach. They are highly qualified professionals with strong
									business management ability. We strongly believe that this
									team has extreme potential to make it big in the industry. We
									cannot recommend and commend them enough!
								</p>
								<div className="card__image">
									<img src={img1} alt="card image" />
									<p className="card_name">Damante Perfumes</p>
									<p className="card_description">
										Exceptional service, always goes above and beyond.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
						<div
							handleDragStart={handleDragStart}
							className="card swiper-slide"
							onClick={() => handleCardClick(2)}>
							<div className="card__content">
								<p className="card__text">
									The Fuel Media has truly delivered when it comes to results.
									Thanks to their expertise and hard work which has enabled
									Cancrie reach new audiences, drive more engagement, and
									ultimately see a positive impact on brand's visibility. We've
									seen a positive impact on our visibility thanks to The Fuel
									Media's efforts.
								</p>
								<div className="card__image">
									<img src={img2} alt="card image" />
									<p className="card_name">Cancrie</p>
									<p className="card_description">
										Outstanding team, knowledgeable and friendly.
									</p>
									<p className="start">⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>

						<div
							handleDragStart={handleDragStart}
							className="card swiper-slide"
							onClick={() => handleCardClick(3)}>
							<div className="card__content">
								<p className="card__text">
									We have never come across a more proactive team of young
									professionals who are dedicated towards delivering the best
									work to their clients. We would strongly recommend The Fuel
									Media to anyone looking for a reliable and effective partner
									for their designing needs.
								</p>
								<div className="card__image">
									<img src={img3} alt="card image" />
									<p className="card_name">White Sands</p>
									<p className="card_description">
										Professional, responsive and high-quality results.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
						<div
							handleDragStart={handleDragStart}
							className="card swiper-slide"
							onClick={() => handleCardClick(4)}>
							<div className="card__content">
								<p className="card__text">
									We have been searching for an enthusiastic team to fulfill our
									requirements to create a best-in-class E-commerce for our
									brand. We are extremely grateful for their commitment to our
									business and the timely delivery of our website solution.
									We're thrilled with the results of our collaboration with The
									Fuel Media.
								</p>
								<div className="card__image">
									<img src={img4} alt="card image" />
									<p className="card_name">Human Cell Diagnostic Center</p>
									<p className="card_description">
										Reliable, affordable and excellent customer service.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
						<div
							handleDragStart={handleDragStart}
							className="card swiper-slide"
							onClick={() => handleCardClick(5)}>
							<div className="card__content">
								<p className="card__text">
									Being one of the leading manufacturers and retailers in our
									industry, The Fuel Media made us realize the importance of
									digital marketing which delivered extraordinary results in
									terms of our revenue projection. I am extremely happy with
									their hard work and their extravagant skills.
								</p>
								<div className="card__image">
									<img src={img5} alt="card image" />
									<p className="card_name">Olip Lighting</p>
									<p className="card_description">
										Top-notch products, unmatched customer service.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
						<div
							handleDragStart={handleDragStart}
							className="card swiper-slide"
							onClick={() => handleCardClick(6)}>
							<div className="card__content">
								<p className="card__text">
									I would like to highlight that the team are not only great at
									their work but are also extremely friendly and hospitable.
									Life methods is grateful to incubate the venture with The Fuel
									Media and has experienced great brand visibility across the
									country. I feel obliged to commend the team for their business
									development and technical skills.
								</p>
								<div className="card__image">
									<img src={img6} alt="card image" />
									<p className="card_name">Life Methods</p>
									<p className="card_description">
										Attentive, communicative and achieved desired results.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
						<div
							handleDragStart={handleDragStart}
							className="card swiper-slide"
							onClick={() => handleCardClick(7)}>
							<div className="card__content">
								<p className="card__text">
									I have been a loyal customer of The Fuel Media since their
									establishment, and with utmost honesty I can say that they
									have never let our expectations down. Their services and
									solutions are top-notch, and their customer service is
									unmatched. Their team is always proactive in suggesting
									innovative ideas and strategies to take our business to the
									next level.
								</p>
								<div className="card__image">
									<img src={img8} alt="card image" />
									<p className="card_name">Wallpaper World</p>
									<p className="card_description">
										Tailored solution, exceeded expectations with expertise.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
						<div
							className="card swiper-slide"
							onClick={() => handleCardClick(8)} // Add click handler for last testimonial card
						>
							<div className="card__content">
								<p className="card__text">
									I had a great experience working with this company. They were
									attentive, communicative, and helped me achieve the results. I
									am so glad I chose to work with this company. I would highly
									recommend this company to anyone looking for reliable and
									effective services, and I look forward to working with them
									again in the future.
								</p>
								<div className="card__image">
									<img src={img7} alt="card image" />
									<p className="card_name">S2 Wheels</p>
									<p className="card_description">
										Responsive, knowledgeable and efficient in solving problems.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
						<div
							handleDragStart={handleDragStart}
							className="card swiper-slide"
							onClick={() => handleLastCardClick(0)}>
							<div className="card__content">
								<p className="card__text">
									The Fuel Media is one of the most dedicated team with their
									approach towards client feedback inclusion in their digital
									approach. They are highly qualified professionals with strong
									business management ability. We strongly believe that this
									team has extreme potential to make it big in the industry. We
									cannot recommend and commend them enough!
								</p>
								<div className="card__image">
									<img src={img1} alt="card image" />
									<p className="card_name">Damante Perfumes</p>
									<p className="card_description">
										Exceptional service, always goes above and beyond.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="swiper-pagination"></div>
			</div>
		</>
	);
};

export default Testimonial;
