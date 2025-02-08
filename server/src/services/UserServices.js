import UserModel from "../models/UserModel.js";
import {TokenEncode} from "../utility/tokenUtility.js";
import {REQUEST_LIMIT_TIME} from "../config/config.js";


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