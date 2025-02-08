import UserModel from "../models/UserModel.js";
import {TokenEncode} from "../utility/tokenUtility.js";
import {REQUEST_LIMIT_TIME} from "../config/config.js";
import sendEmail from "../utility/emailUtility.js";


export const LoginServices = async (req,res)=>{
	try {
		let reqBody = req.body;
		let exitingUser = await UserModel.findOne({ email: reqBody.email });
		if (!exitingUser) {
			return { status: false, msg: "User not found." };
		}
		let data = await UserModel.aggregate([
			{ $match: reqBody },
			{ $project: { _id: 1, email: 1 } },
		]);

		if (data.length === 1) {
			let token = TokenEncode(data[0]["email"]);
			// Set cookie
			let options = {
				maxAge:REQUEST_LIMIT_TIME ,
				httpOnly: false, // Prevents client-side access to the cookie
				sameSite: "none", // Required for cross-site cookies
				secure: true,
				path:"/"
				// secure: process.env.NODE_ENV === "production", // true in production
			};
			await res.cookie("token", token, options);
			return {status: true, token: token, data: data[0], msg: "Login success."};
		} else {
			return { status: false, data: data, msg: "Login Unsuccessful." };
		}
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
};

//Logout service
export const LogOutService= async (req,res)=>{
	try {
		res.clearCookie("token");
		return { status: true, msg: "LogOut successful!" };
	}catch(e){
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}

}


//contact form

export const contactService = async (req, res) => {
	try {
		const { name, email, phone, message } = req.body;
		if (!name || !email || !phone || !message) {
			return res.status(400).json({ error: "All fields are required" });
		}

		console.log("Preparing email content...");
		const emailSubject = `New Contact Form Submission from ${name}`;
		const emailText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

		console.log("Attempting to send email...");
		const emailResponse = await sendEmail(email, emailText, emailSubject);

		console.log("Email response:", emailResponse);

		res.status(200).json({
			success: emailResponse.success,
			message: emailResponse.success ? "Email sent successfully" : "Email failed to send",
			responseId: emailResponse.messageId || "N/A",
			error: emailResponse.error ? emailResponse.error.toString() : null // Fix circular structure issue
		});
	} catch (error) {
		console.error("Error sending email:", error);
		res.status(500).json({ error: "Internal Server Error", details: error.message || "Unknown error" });
	}
};
