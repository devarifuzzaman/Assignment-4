import React from 'react';

const ContactForm = () => {
	return (
		<>


			<section className="contactform">
				<div className="container projects portfolio-pr">
					<div className="title ">
						<div className="row align-items-center">
							<div className="col-lg-12">
								<h2 className="sub-font mb-10"> Contact </h2>
							</div>
						</div>
					</div>
				</div>
				<div className="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233652.03622025767!2d88.55806463921284!3d23.78967013842915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f94a104fc1c02f%3A0xbac2303153cf2bb!2sMeherpur%20District%2C%20Bangladesh!5e0!3m2!1sen!2seg!4v1738587332423!5m2!1sen!2seg"
						width="100%" height="100%" style={{border: "0"}} allowFullScreen="" loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"></iframe>

					<div className="contact-form col-lg-7">
						<h5 className="fsz-30"> Contact Us </h5>
						<div className="row">
							<div className="col-lg-6">
								<div className="form-group mt-4">
									<input type="text" className="form-control" placeholder="Your first name"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group mt-4">
									<input type="text" className="form-control" placeholder="Your last name"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group mt-4">
									<input type="text" className="form-control" placeholder="Your email address*"/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group mt-4">
									<input type="text" className="form-control" placeholder="Your phone number*"/>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="form-group mt-4">
									<textarea rows="5" className="form-control" placeholder="Your message"></textarea>
								</div>
							</div>
							<div className="col-lg-12">
								<a href="#" className="butn bg-dark1 fsz-16 text-white py-3 mt-50 hover-bg-orange1">
									<span> Submit Now <img className="ms-2 icon-6 w-auto"
									                       src="./assets/img/arrow_wh.svg" alt=""/> </span> </a>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
};

export default ContactForm;