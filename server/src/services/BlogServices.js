import mongoose from "mongoose";
import BlogModel from "../models/BlogModel.js";

const ObjectId = mongoose.Types.ObjectId;

export const createBlogService = async (req, res) => {
	try {
		let reqBody = req.body;
		let data = await BlogModel.create(reqBody);
		return { status: true, data: data, msg: "Blog created successfully." };
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
};

export const getBlogsService = async (req, res) => {
	try {
		let joinCategoryStage={$lookup:{from:'categories', localField:'categories', foreignField:"_id", as : 'category'}};
		let unwindCategory= {$unwind: '$category'};
		let projectionStage={$project:{'category._id':0,'categories':0}}
		let count = await BlogModel.countDocuments();
		let data = await BlogModel.aggregate([
			joinCategoryStage,
			unwindCategory,
			projectionStage
		])
		if (data.length !== null) {
			return {status: true, data: data,count: count};
		} else {
			return {status: false, msg: "No Blog available" ,count: count};
		}
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
};


export const getBlogByIdService = async (req, res) => {
	try {
		let id = new ObjectId(req.params.id);
		let matchStage={$match:{_id: id}};
		let joinCategoryStage={$lookup:{from:'categories', localField:'categories', foreignField:"_id", as : 'category'}};
		let unwindCategory= {$unwind: '$category'};
		let projectionStage={$project:{'category._id':0,'categories':0}};

		let data = await BlogModel.aggregate([
			matchStage,
			joinCategoryStage,
			unwindCategory,
			projectionStage
		]);
		if (data.length !== 0) {
			return {status: true, data: data};
		} else {
			return {status: false, error: data, msg: "No blog found"};
		}
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
};


export const updateBlogService = async (req, res) => {
	try {
		let id = new ObjectId(req.params.id);
		const blog = await BlogModel.findOne({_id:id});

		if (blog.length !== 0) {
			let reqBody = req.body;
			let data = await BlogModel.updateOne(
				{_id: id},
				{$set: reqBody},
			)
			return {status: true, data: data, msg: "Blog updated successfully."};
		} else {
			return {status: false, msg: "No blog found"};
		}
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
};


export const deleteBlogService = async (req, res) => {
	try {
		let id = new ObjectId(req.params.id);
		const blog = await BlogModel.findOne({_id:id});
		if (!blog) {
			return { status: false, msg: "No blog found" };
		}
		let data = await BlogModel.deleteOne({ _id: id });
		return { status: true, data: data, msg: "Blog deleted successfully." };
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
};

