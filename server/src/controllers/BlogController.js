import {
	createBlogService,
	deleteBlogService,
	getBlogByIdService,
	getBlogsService,
	updateBlogService
} from "../services/BlogServices.js";


export const createBlog = async (req, res) => {
	let result = await createBlogService(req);
	return res.status(200).json(result);
}


export const getBlog = async (req, res) => {
	let result = await getBlogsService(req);
	return res.status(200).json(result);
}

export const getBlogById  = async (req, res) => {
	let result = await getBlogByIdService(req);
	return res.status(200).json(result);
}

export const updateBlog = async (req, res) => {
	let result = await updateBlogService(req);
	return res.status(200).json(result);
}

export const deleteBlog = async (req, res) => {
	let result = await deleteBlogService(req);
	return res.status(200).json(result);
}

