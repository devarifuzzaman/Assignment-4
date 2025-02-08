import nodemailer from "nodemailer";
import {EMAIL_PASSWORD, EMAIL_USER} from "../config/config.js";

const sendEmail = async ({ firstName, lastName, email, phone, message }) => {
	try {
		const transporter = nodemailer.createTransport({
			host: "sandbox.smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: EMAIL_USER,
				pass: EMAIL_PASSWORD,
			},
		});

		const mailOptions = {
			from: EMAIL_USER,
			to: "arifujjaman42@gmail.com",
			subject: "New Contact Form Submission",
			text: `
                Name: ${firstName} ${lastName}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `,
		};

		await transporter.sendMail(mailOptions);
		return { success: true, message: "Email sent successfully!" };
	} catch (error) {
		console.error("Error sending email:", error);
		return { success: false, message: "Failed to send email." };
	}
};

export default sendEmail;
