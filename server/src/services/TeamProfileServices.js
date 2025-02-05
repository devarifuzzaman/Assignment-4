import mongoose from "mongoose";
import TeamProfileModel from "../models/TeamProfileModel.js";


const ObjectId = mongoose.Types.ObjectId;

export const CreateTeamProfileService = async (req, res) => {
	try{
		let reqBody = req.body;
		let data = await TeamProfileModel.create(reqBody);
		return { status: true, data: data, msg: "Team Profile created successfully." };
	}catch(e){
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
}


export const GetTeamProfileService = async (req, res) => {
	try {
		let data = await TeamProfileModel.find({});
		if (data.length !== 0) {
			return {status: true, data: data};
		} else {
			return {status: false, msg: "No Team Profile available"};
		}
	}catch(e){
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
}

export const UpdateTeamProfileService = async (req, res) => {
	try{
		let id = new ObjectId(req.params.id);
		let getProfile = await TeamProfileModel.findOne({_id:id});
		if (!getProfile) {
			return { status: false, msg: "Team Profile not found" };
		}
		let reqBody = req.body;
		let data = await TeamProfileModel.updateOne({_id:id}, {$set: reqBody});
		return { status: true, data: data,msg: "Team Profile updated successfully." };

	}catch(e){
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
}

export const DeleteTeamProfileService = async (req, res) => {
	try {
		let id = new ObjectId(req.params.id);
		let getProfile = await TeamProfileModel.findOne({_id:id});
		if (!getProfile) {
			return { status: false, msg: "Team Profile not found" };
		}

		let data = await TeamProfileModel.deleteOne({_id:id});
		return { status: true, data: data,msg: "Team Profile deleted successfully." };
	}catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
}