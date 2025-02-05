import mongoose from "mongoose";
import ServiceModel from "../models/ServiceModel.js";

const ObjectId = mongoose.Types.ObjectId;

export const createPortfolioService = async (req, res) => {
	try {
		let reqBody = req.body;
		let data = await ServiceModel.create(reqBody);
		return { status: true, data: data, msg: "Service created successfully." };
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
};

export const getPortfolioService = async (req, res) => {
	try {
		let joinCategoryStage={$lookup:{from:'categories', localField:'categories', foreignField:"_id", as : 'category'}};
		let unwindCategory= {$unwind: '$category'};
		let projectionStage={$project:{'category._id':0,'categories':0}}

		let data = await ServiceModel.aggregate([
			joinCategoryStage,
			unwindCategory,
			projectionStage
		])

		if (data.length===null) {
			return { status: false, msg: "No Service available" };
		}

		return { status: true, data: data};
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
};


export const getPortfolioByIdService = async (req, res) => {
	try {
		let id = new ObjectId(req.params.id);
		let matchStage={$match:{_id: id}};
		let joinCategoryStage={$lookup:{from:'categories', localField:'categories', foreignField:"_id", as : 'category'}};
		let unwindCategory= {$unwind: '$category'};
		let projectionStage={$project:{'category._id':0,'categories':0}}

		let data = await ServiceModel.aggregate([
			matchStage,
			joinCategoryStage,
			unwindCategory,
			projectionStage
		])

		if (!data) {
			return { status: false, error:data, msg: "No Service found" };
		}

		return { status: true, data:data};
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
};


export const updatePortfolioService = async (req, res) => {
	try {
		let id = new ObjectId(req.params.id);
		const Service = await ServiceModel.findOne({_id:id});
		if (!Service) {
			return { status: false, error: e.toString(), msg: "No Service found" };
		}
		let reqBody = req.body;
		let data = await ServiceModel.updateOne(
			{ _id: id },
			{ $set: reqBody },
		)
		return { status: true, data: data, msg: "Service updated successfully." };
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
};


export const deletePortfolioService = async (req, res) => {
	try {
		let id = new ObjectId(req.params.id);
		let data = await ServiceModel.deleteOne({ _id: id });
		return { status: true, data: data, msg: "Service deleted successfully." };
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
};

