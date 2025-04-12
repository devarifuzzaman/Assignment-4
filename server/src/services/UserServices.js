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






export const ContactService = async (req, res) => {
	try {
		const { firstName, lastName, email, phone, message } = req.body;

		// Validate Input
		if (!firstName || !lastName || !email || !phone || !message) {
			return res.status(400).json({ status: false, message: "All fields are required." });
		}

		// Send Email
		const emailResponse = await sendEmail({ firstName, lastName, email, phone, message });

		// ✅ Ensure emailResponse is JSON-safe
		return res.status(emailResponse.success ? 200 : 500).json({
			status: emailResponse.success,
			message: emailResponse.message,
			data: {
				messageId: emailResponse.messageId,
				accepted: emailResponse.accepted,
				rejected: emailResponse.rejected,
				response: emailResponse.response,
			},
		});
	} catch (error) {
		console.error("Error in ContactService:", error);
		return res.status(500).json({
			status: false,
			message: "Something went wrong.",
			error: error.message || "Unknown error",
		});
	}
};