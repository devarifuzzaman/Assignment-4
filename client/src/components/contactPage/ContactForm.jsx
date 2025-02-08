import React, { useState } from "react";
import { Contact } from "../../Api/ApiRoute.js";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	});

	const [submitting, setSubmitting] = useState(false);
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		setMessage("");

		try {
			const response = await Contact(formData); // Send form data to API
			if (response?.success) {
				setMessage("Email sent successfully!");
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					message: "",
				});
			} else {
				setMessage("Failed to send email. Please try again.");
			}
		} catch (error) {
			console.error("Error:", error);
			setMessage("An error occurred. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<section className="contactform">
			<div className="container projects portfolio-pr">
				<div className="title">
					<div className="row align-items-center">
						<div className="col-lg-12">
							<h2 className="sub-font mb-10">Contact</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233652.03622025767!2d88.55806463921284!3d23.78967013842915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f94a104fc1c02f%3A0xbac2303153cf2bb!2sMeherpur%20District%2C%20Bangladesh!5e0!3m2!1sen!2seg!4v1738587332423!5m2!1sen!2seg"
					width="100%"
					height="100%"
					style={{ border: "0" }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>

				<div className="contact-form col-lg-7">
					<h5 className="fsz-30">Contact Us</h5>
					<form onSubmit={handleSubmit}>
						<div className="row">
							<div className="col-lg-6">
								<div className="form-group mt-4">
									<input
										type="text"
										className="form-control"
										placeholder="Your first name"
										name="firstName"
										value={formData.firstName}
										onChange={handleChange}
										required
									/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group mt-4">
									<input
										type="text"
										className="form-control"
										placeholder="Your last name"
										name="lastName"
										value={formData.lastName}
										onChange={handleChange}
										required
									/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group mt-4">
									<input
										type="email"
										className="form-control"
										placeholder="Your email address*"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form-group mt-4">
									<input
										type="tel"
										className="form-control"
										placeholder="Your phone number*"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										required
									/>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="form-group mt-4">
									<textarea
										rows="5"
										className="form-control"
										placeholder="Your message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
									></textarea>
								</div>
							</div>
							<div className="col-lg-12">
								<button
									type="submit"
									className="butn bg-dark1 fsz-16 text-white py-3 mt-50 hover-bg-orange1"
									disabled={submitting}
								>
									<span>
										{submitting ? "Submitting..." : "Submit Now"}
										<img
											className="ms-2 icon-6 w-auto"
											src="./assets/img/arrow_wh.svg"
											alt=""
										/>
									</span>
								</button>
							</div>
							{message && (
								<div className="col-lg-12 mt-3">
									<p className="fsz-14">{message}</p>
								</div>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
