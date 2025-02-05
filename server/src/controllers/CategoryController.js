import {
	createCategoryService,
	deleteCategoryService,
	getCategoryService,
	updateCategoryService
} from "../services/CategoryServices.js";


export const createCategory = async (req, res) => {
	let result = await createCategoryService(req);
	return res.status(200).json(result);
};

export const getCategory = async (req, res) => {
	let result = await getCategoryService(req);
	return res.status(200).json(result);
}

export const updateCategory = async (req, res) => {
	let result = await updateCategoryService(req);
	return res.status(200).json(result);
}

export const deleteCategory = async (req, res) => {
	let result = await deleteCategoryService(req);
	return res.status(200).json(result);
}
