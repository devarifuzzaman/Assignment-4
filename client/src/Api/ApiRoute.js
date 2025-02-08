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
export const SingleBlog = async (id) => {
	try {
		let result = await axios.get(`${baseURL}/getblog/${id}`,{
			withCredentials: true,
		});
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

// Delete Category
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






// File upload

export const FileUpload = async (formData) => {
	try {
		let result = await axios.post(`${baseURL}/file-upload`, formData, {
			headers: { "Content-Type": "multipart/form-data" },
			withCredentials: true,
		});

		console.log("File Upload Response:", result.data); // Debugging

		// Ensure the response is valid and contains file information
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
		console.error("Upload Error:", error.response?.data || error.message);
		ErrorToast("File upload failed. Please try again.");
		return false;
	}
};

