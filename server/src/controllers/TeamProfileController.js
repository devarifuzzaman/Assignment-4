import {
	CreateTeamProfileService, DeleteTeamProfileService,
	GetTeamProfileService,
	UpdateTeamProfileService
} from "../services/TeamProfileServices.js";


export const createTeamProfile = async (req, res) => {
	let result = await CreateTeamProfileService(req);
	return res.status(200).json(result);
}

export const getTeamProfile = async (req, res) => {
	let result = await GetTeamProfileService(req);
	return res.status(200).json(result);
}

export const updateTeamProfile = async (req, res) => {
	let result = await UpdateTeamProfileService(req);
	return res.status(200).json(result);
}

export const deleteTeamProfile = async (req, res) => {
	let result = await DeleteTeamProfileService(req);
	return res.status(200).json(result);
}