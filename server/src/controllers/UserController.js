import {ContactService, LoginServices, LogOutService} from "../services/UserServices.js";


export const Login= async (req, res)=>{
	let result= await LoginServices(req,res);
	return res.json(result);
}


export const logOut = async (req, res) => {
	let result = await LogOutService(req, res);
	return res.json(result);
};

export const contactEmail = async (req, res) => {
	try {
		const result = await ContactService(req);
		return res.status(result.status ? 200 : 500).send(JSON.stringify(result));
	} catch (error) {
		console.error("Error in contactEmail:", error);
		return res.status(500).send(JSON.stringify({
			status: false,
			message: "Something went wrong.",
			error: error.message,
		}));
	}
};