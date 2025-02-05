import mongoose from "mongoose";
import CategoryModel from "../models/CategoryModel.js";

const ObjectId = mongoose.Types.ObjectId;

export const createCategoryService = async (req, res) => {
	try {
		let reqBody = req.body;
		let data = await CategoryModel.create(reqBody);
		return { status: true, data: data, msg: "Category created successfully." };
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
};

export const getCategoryService = async (req, res) => {
	try {
		let data = await CategoryModel.find({});
		if (data.length===null) {
			return { status: false, msg: "No Category available" };
		}
		return { status: true, data: data };
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
};


export const updateCategoryService = async (req, res) => {
	try {
		let id = new ObjectId(req.params.id);
		const category = await CategoryModel.findOne({ _id: id });
		if (!category) {
			return { status: false, msg: "Category not available." };
		}
		let reqBody = req.body;
		let data = await CategoryModel.updateOne(
			{_id:id},
			{$set: reqBody}
		);
		return { status: true, data:data, msg: "Category updated successfully." };
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
};


export const deleteCategoryService = async (req, res) => {
	try {
		let id = new ObjectId(req.params.id);
		const category = await CategoryModel.findOne({ _id: id });
		if (!category) {
			return { status: false, msg: "Category not available." };
		}
		let data = await CategoryModel.deleteOne({ _id: id });
		return { status: true, data: data, msg: "Category deleted successFully." };
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Something went wrong." };
	}
};
