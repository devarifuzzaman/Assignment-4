import nodemailer from "nodemailer";
import { EMAIL_HOST, EMAIL_USER, EMAIL_SECURITY, EMAIL_PORT, EMAIL_PASSWORD, EMAIL_AUTH } from "../config/config.js";

const sendEmail = async (EmailTo, EmailText, EmailSubject) => {
	try {
		console.log("Creating transporter...");
		let transporter = nodemailer.createTransport({
			host: EMAIL_HOST,
			port: Number(EMAIL_PORT), // Ensure port is a number
			secure: EMAIL_SECURITY === true || EMAIL_SECURITY === "true", // Explicit conversion to boolean
			auth: EMAIL_AUTH === true || EMAIL_AUTH === "true" ? { user: EMAIL_USER, pass: EMAIL_PASSWORD } : undefined,
			tls: {
				rejectUnauthorized: false, // Allow self-signed certificates
			},
		});

		console.log("Transporter created successfully.");

		let mailOptions = {
			from: `\"Portfolio Assignment\" <${EMAIL_USER}>`, // Use EMAIL_USER as sender
			to: EmailTo,
			subject: EmailSubject,
			text: EmailText,
		};

		console.log("Sending email to:", EmailTo);
		const emailResponse = await transporter.sendMail(mailOptions);
		console.log("Email sent successfully:", emailResponse.messageId);

		return { success: true, messageId: emailResponse.messageId };
	} catch (error) {
		console.error("Error sending email:", error);
		return { success: false, error: error.message || "Failed to send email" };
	}
};

export default sendEmail;