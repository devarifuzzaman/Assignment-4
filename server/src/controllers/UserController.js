import {ContactService, LoginServices, LogOutService} from "../services/UserServices.js";


export const Login= async (req, res)=>{
	let result= await LoginServices(req,res);
	res.status(200).json(result);
}


export const logOut = async (req, res) => {
	let result = await LogOutService(req, res);
	return res.json(result);
};

export const contactEmail= async (req,res)=>{
	let result = await ContactService(req,res);
	return res.json(result);
}

