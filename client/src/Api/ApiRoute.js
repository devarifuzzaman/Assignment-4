import {DeleteAlert, ErrorToast, SuccessToast} from "../helper/Helper.js";
import axios from "axios";


export const baseURL = "https://assignment-4-server-sage.vercel.app/api";
// User api call
export const UserLogin = async (reqBody) => {
	let result = await axios.post(`${baseURL}/login`, reqBody,{
		withCredentials: true
	});

	if (result.data.status === true) {
		SuccessToast(result.data.msg);
		return true;
	} else {
		ErrorToast(result.data.msg);
		return false;
	}
};
export const UserLogout = async (reqBody) => {
	let result = await axios.get(`${baseURL}/logout`, {
		withCredentials: true,
	});
	if (result.data.status === true) {
		SuccessToast(result.data.msg);
		return true;
	}else {
		ErrorToast(result.data.msg);
		return false;
	}
}

export const Contact = async (formData) => {
	try {
		let result = await axios.post(`${baseURL}/contact`, formData, {
			withCredentials: true
		});

		if (result.data.success === true) { // Fixed key: `success` instead of `status`
			SuccessToast(result.data.message); // `msg` -> `message` (as per backend)
			return true;
		} else {
			ErrorToast(result.data.message);
			return false;
		}
	} catch (error) {
		console.error("Error in Contact API:", error);
		ErrorToast(error.response?.data?.error || "Failed to send message");
		return false;
	}
};

// Category API call

// Create Category
export const CreateCategory = async (reqBody) => {
	try {
		let result = await axios.post(`${baseURL}/createCategory`, reqBody,{
			withCredentials: true
		});
		if (result.data.status === true) {
			SuccessToast(result.data.msg);
			return result.data;
		} else {
			ErrorToast(result.data.msg);
			return false;
		}
	} catch (error) {
		ErrorToast("Something went wrong.");
		return false;
	}
};

// Read Category
export const ReadCategory = async () => {
	try {
		let result = await axios.get(`${baseURL}/getcategory`,{
			withCredentials: true,
		});
		return {
			status: result.data.status,
			data: result.data.data || [],
			count: result.data.count || 0,
		};
	} catch (error) {
		console.error("Error fetching categories:", error);
		return { status: false, data: [], count: 0 };
	}
};

// Update Category
export const UpdateCategory = async (id, updateData) => {
	try {
		let result = await axios.post(`${baseURL}/updatecategory/${id}`, updateData, {
			withCredentials: true,
		});
		if (result.data.status === true) {
			SuccessToast(result.data.msg);
			return result.data;
		} else {
			ErrorToast(result.data.msg);
			return false;
		}
	} catch (error) {
		ErrorToast("Update failed.");
		return false;
	}
};

// Delete Category
export const deleteCategory = async (id) => {
	let isConfirmed = await DeleteAlert();

	if (isConfirmed) {
		try {
			let result = await axios.delete(`${baseURL}/deletecategory/${id}`, {
				withCredentials: true,
			});
			if (result.data.status === true) {
				SuccessToast(result.data.msg);
				return true;
			} else {
				ErrorToast(result.data.msg);
				return false;
			}
		} catch (error) {
			ErrorToast("Delete failed.");
			return false;
		}
	}
};



// Blog API call

// Create blog
export const CreateBlog = async (reqBody) => {
	try {
		let result = await axios.post(`${baseURL}/createblog`, reqBody,{
			withCredentials: true
		});
		if (result.data.status === true) {
			SuccessToast(result.data.msg);
			return result.data;
		} else {
			ErrorToast(result.data.msg);
			return false;
		}
	} catch (error) {
		ErrorToast("Something went wrong.");
		return false;
	}
};

// Read All Blog
export const GetBlog = async () => {
	try {
		let result = await axios.get(`${baseURL}/getblog`,{
			withCredentials: true,
		});
		return {
			status: result.data.status,
			data: result.data.data || [],
			count: result.data.count || 0,
		};
	} catch (error) {
		console.error("Error fetching categories:", error);
		return { status: false, data: [], count: 0 };
	}
};

// Read  Blog By ID
export const GetSingleBlog = async (id) => {
	try {
		let result = await axios.get(`${baseURL}/getblogbyid/${id}`,{
			withCredentials: true,
		});
		console.log("api",result)
		return result.data;
	} catch (error) {
		console.error("Error fetching categories:", error);
		return { status: false, data: [] };
	}
};

// Update Blog
export const UpdateBlog = async (id, updateBlogData) => {
	try {
		let result = await axios.post(`${baseURL}/updateblog/${id}`, updateBlogData, {
			withCredentials: true,
		});
		if (result.data.status === true) {
			SuccessToast(result.data.msg);
			return result.data;
		} else {
			ErrorToast(result.data.msg);
			return false;
		}
	} catch (error) {
		ErrorToast("Update failed.");
		return false;
	}
};

// Delete blog
export const deleteBlog = async (id) => {
	let isConfirmed = await DeleteAlert();

	if (isConfirmed) {
		try {
			let result = await axios.delete(`${baseURL}/deleteblog/${id}`, {
				withCredentials: true,
			});
			if (result.data.status === true) {
				SuccessToast(result.data.msg);
				return true;
			} else {
				ErrorToast(result.data.msg);
				return false;
			}
		} catch (error) {
			ErrorToast("Delete failed.");
			return false;
		}
	}
};


// Service API call

// Create Service
export const CreateService = async (reqBody) => {
	try {
		let result = await axios.post(`${baseURL}/createservice`, reqBody,{
			withCredentials: true
		});
		if (result.data.status === true) {
			SuccessToast(result.data.msg);
			return result.data;
		} else {
			ErrorToast(result.data.msg);
			return false;
		}
	} catch (error) {
		ErrorToast("Something went wrong.");
		return false;
	}
};

// Read All Service
export const GetService = async () => {
	try {
		let result = await axios.get(`${baseURL}/getservice`,{
			withCredentials: true,
		});
		return {
			status: result.data.status,
			data: result.data.data || [],
			count: result.data.count || 0,
		};
	} catch (error) {
		console.error("Error fetching categories:", error);
		return { status: false, data: [], count: 0 };
	}
};

// Read  Service By ID
export const GetSingleService = async (id) => {
	try {
		let result = await axios.get(`${baseURL}/getservicebyid/${id}`,{
			withCredentials: true,
		});
		console.log("api",result)
		return result.data;
	} catch (error) {
		console.error("Error fetching categories:", error);
		return { status: false, data: [] };
	}
};

// Update Service
export const UpdateService = async (id, updateServiceData) => {
	try {
		let result = await axios.post(`${baseURL}/updateService/${id}`, updateServiceData, {
			withCredentials: true,
		});
		if (result.data.status === true) {
			SuccessToast(result.data.msg);
			return result.data;
		} else {
			ErrorToast(result.data.msg);
			return false;
		}
	} catch (error) {
		ErrorToast("Update failed.");
		return false;
	}
};

// Delete Service
export const deleteService = async (id) => {
	let isConfirmed = await DeleteAlert();

	if (isConfirmed) {
		try {
			let result = await axios.delete(`${baseURL}/deleteService/${id}`, {
				withCredentials: true,
			});
			if (result.data.status === true) {
				SuccessToast(result.data.msg);
				return true;
			} else {
				ErrorToast(result.data.msg);
				return false;
			}
		} catch (error) {
			ErrorToast("Delete failed.");
			return false;
		}
	}
};





// Profile API call

// Create Profile
export const CreateProfile = async (reqBody) => {
	try {
		let result = await axios.post(`${baseURL}/createprofile`, reqBody,{
			withCredentials: true
		});
		if (result.data.status === true) {
			SuccessToast(result.data.msg);
			return result.data;
		} else {
			ErrorToast(result.data.msg);
			return false;
		}
	} catch (error) {
		ErrorToast("Something went wrong.");
		return false;
	}
};

// Read All Profile
export const GetProfile = async () => {
	try {
		let result = await axios.get(`${baseURL}/getprofile`,{
			withCredentials: true,
		});
		return {
			status: result.data.status,
			data: result.data.data || [],
			count: result.data.count || 0,
		};
	} catch (error) {
		console.error("Error fetching categories:", error);
		return { status: false, data: [], count: 0 };
	}
};

// Update Profile
export const UpdateProfile = async (id, updateProfileData) => {
	try {
		let result = await axios.post(`${baseURL}/updateprofile/${id}`, updateProfileData, {
			withCredentials: true,
		});
		if (result.data.status === true) {
			SuccessToast(result.data.msg);
			return result.data;
		} else {
			ErrorToast(result.data.msg);
			return false;
		}
	} catch (error) {
		ErrorToast("Update failed.");
		return false;
	}
};

// Delete Profile
export const deleteProfile = async (id) => {
	let isConfirmed = await DeleteAlert();

	if (isConfirmed) {
		try {
			let result = await axios.delete(`${baseURL}/deleteprofile/${id}`, {
				withCredentials: true,
			});
			if (result.data.status === true) {
				SuccessToast(result.data.msg);
				return true;
			} else {
				ErrorToast(result.data.msg);
				return false;
			}
		} catch (error) {
			ErrorToast("Delete failed.");
			return false;
		}
	}
};







// File upload

export const FileUpload = async (formData) => {
	try {
		let result = await axios.post(`${baseURL}/file-upload`, formData, {
			headers: { "Content-Type": "multipart/form-data" },
			withCredentials: true,
		});

		if (result.data?.status && Array.isArray(result.data.file) && result.data.file.length > 0) {
			return {
				status: true,
				url: `${baseURL.replace("/api", "")}/upload-file/${result.data.file[0].filename}`
			};
		} else {
			ErrorToast(result.data?.msg || "File upload failed on server.");
			return false;
		}
	} catch (error) {
		ErrorToast("File upload failed. Please try again.");
		return false;
	}
};

export class SingleBlog {
}