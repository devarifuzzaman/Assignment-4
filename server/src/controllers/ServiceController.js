import {createPortfolioService, deletePortfolioService, getPortfolioByIdService, getPortfolioService, updatePortfolioService } from "../services/portfolioServices.js";


export const createService = async (req, res) => {
	let result = await createPortfolioService(req);
	return res.status(200).json(result);
}


export const getService = async (req, res) => {
	let result = await getPortfolioService(req);
	return res.status(200).json(result);
}

export const getServiceById  = async (req, res) => {
	let result = await getPortfolioByIdService(req);
	return res.status(200).json(result);
}

export const updateService = async (req, res) => {
	let result = await updatePortfolioService(req);
	return res.status(200).json(result);
}

export const deleteService = async (req, res) => {
	let result = await deletePortfolioService(req);
	return res.status(200).json(result);
}

