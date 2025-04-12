import React, { useEffect, useState, useRef } from "react";
import MasterLayout from "../../components/dashboard/layout/MasterLayout.jsx";
import { CreateBlog, UpdateBlog, deleteBlog, GetBlog, ReadCategory, FileUpload, imgUrl } from "../../Api/ApiRoute.js";
import { IsEmpty } from "../../helper/Helper.js";

const Blog = () => {
	const [blogs, setBlogs] = useState([]);
	const [categories, setCategories] = useState([]);
	const [blogTitle, setBlogTitle] = useState("");
	const [blogDescription, setBlogDescription] = useState("");
	const [blogImage, setBlogImage] = useState(null);
	const [blogCategory, setBlogCategory] = useState("");
	const [editId, setEditId] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const blogsPerPage = 10;

	const inputRef = useRef(null);
	const fileInputRef = useRef(null);

	// Fetch blogs and categories
	useEffect(() => {
		fetchBlogs();
		fetchCategories();
	}, []);

	const fetchBlogs = async () => {
		try {
			const result = await GetBlog();
			console.log("Blogs fetched:", result); // Debugging: Log the result
			if (result?.status) {
				setBlogs(result.data);
			} else {
				console.error("Failed to fetch blogs:", result?.msg);
			}
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

	const fetchCategories = async () => {
		try {
			const result = await ReadCategory();
			console.log("Categories fetched:", result); // Debugging: Log the result
			if (result?.status) {
				setCategories(result.data);
			} else {
				console.error("Failed to fetch categories:", result?.msg);
			}
		} catch (error) {
			console.error("Error fetching categories:", error);
		}
	};

	// Handle image upload
	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			setBlogImage(file);
			console.log("Image selected:", file); // Debugging: Log the selected file
		}
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (IsEmpty(blogTitle) || IsEmpty(blogDescription) || IsEmpty(blogCategory)) {
			console.error("All fields must be filled!");
			return;
		}

		let imageUrl = blogImage; // Default to the existing image URL

		// Handle image upload if a new image is selected
		if (blogImage instanceof File) {
			const formData = new FormData();
			formData.append("files", blogImage);

			try {
				const uploadResponse = await FileUpload(formData);
				console.log("Image upload response:", uploadResponse); // Debugging: Log the upload response
				if (uploadResponse?.status) {
					imageUrl = uploadResponse.url;
				} else {
					console.error("Image upload failed:", uploadResponse?.msg);
					return;
				}
			} catch (error) {
				console.error("Error uploading image:", error);
				return;
			}
		}

		const blogData = {
			title: blogTitle,
			des: blogDescription,
			image: imageUrl.split("/").pop(), // Extract the filename from the URL
			categories: blogCategory,
		};

		try {
			let response;
			if (editId) {
				// Update existing blog
				response = await UpdateBlog(editId, blogData);
				console.log("Update response:", response); // Debugging: Log the update response
			} else {
				// Create new blog
				response = await CreateBlog(blogData);
				console.log("Create response:", response); // Debugging: Log the create response
			}

			if (response?.status) {
				resetForm();
				await fetchBlogs();
			} else {
				console.error("Operation failed:", response?.msg);
			}
		} catch (error) {
			console.error("Error processing request:", error);
		}
	};

	// Handle edit
	const handleEdit = (blog) => {
		setEditId(blog._id);
		setBlogTitle(blog.title);
		setBlogDescription(blog.des);
		setBlogImage(blog.image);
		setBlogCategory(blog.category._id);
		inputRef.current.focus();
		console.log("Editing blog:", blog); // Debugging: Log the blog being edited
	};

	// Handle delete
	const handleDelete = async (id) => {
		try {
			const deleted = await deleteBlog(id);
			console.log("Delete response:", deleted); // Debugging: Log the delete response
			if (deleted?.status) {
				await fetchBlogs();
			} else {
				console.error("Failed to delete:", deleted?.msg);
			}
		} catch (error) {
			console.error("Error deleting blog:", error);
		}
	};

	// Reset form after creation or update
	const resetForm = () => {
		setEditId(null);
		setBlogTitle("");
		setBlogDescription("");
		setBlogImage(null);
		setBlogCategory("");
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
		console.log("Form reset"); // Debugging: Log form reset
	};

	// Pagination calculations
	const indexOfLastBlog = currentPage * blogsPerPage;
	const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
	const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
	const totalPages = Math.ceil(blogs.length / blogsPerPage);

	return (
		<MasterLayout title="Blog Management">
			<div className="form w-50 pt-5">
				<div className="mb-3">
					<label className="form-label">Title</label>
					<input type="text" className="form-control" value={blogTitle} ref={inputRef} onChange={(e) => setBlogTitle(e.target.value)} />
				</div>
				<div className="mb-3">
					<label className="form-label">Description</label>
					<textarea className="form-control" value={blogDescription} onChange={(e) => setBlogDescription(e.target.value)} />
				</div>
				<div className="mb-3">
					<label className="form-label">Upload Image</label>
					<input type="file" ref={fileInputRef} className="form-control" onChange={handleImageUpload} />
				</div>
				<div className="mb-3">
					<label className="form-label">Category</label>
					<select className="form-control" value={blogCategory} onChange={(e) => setBlogCategory(e.target.value)}>
						<option value="">Select a category</option>
						{categories.map((cat) => (
							<option key={cat._id} value={cat._id}>{cat.categoryName}</option>
						))}
					</select>
				</div>
				<button type="submit" className="btn btn-primary" onClick={handleSubmit}>{editId ? "Update" : "Create"}</button>
			</div>

			<div className="tableSec pt-5 w-100">
				<table className="table table-bordered">
					<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Description</th>
						<th>Image</th>
						<th>Category</th>
						<th>Actions</th>
					</tr>
					</thead>
					<tbody>
					{currentBlogs.map((blog, index) => (
						<tr key={blog._id}>
							<td>{index + 1 + indexOfFirstBlog}</td>
							<td>{blog.title}</td>
							<td>{blog.des}</td>
							<td>
								{blog.image ? (
									<img src={`${imgUrl}${blog.image}`} alt="blogImg" className="object-cover" width={80} height={60} />
								) : (
									<span>No Image</span>
								)}
							</td>
							<td>{blog.category?.categoryName}</td>
							<td className="d-flex">
								<button onClick={() => handleEdit(blog)} className="btn btn-sm btn-warning"><i className="fas fa-edit"></i></button>
								<button onClick={() => handleDelete(blog._id)} className="btn btn-sm btn-danger ms-2"><i className="fas fa-trash-alt"></i></button>
							</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>

			{/* Pagination controls */}
			<nav aria-label="Page navigation">
				<ul className="pagination mx-auto justify-content-center pt-3 pb-5">
					<li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
						<button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
						</button>
					</li>
					{Array.from({ length: totalPages }, (_, i) => (
						<li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
							<button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
						</li>
					))}
					<li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
						<button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
						</button>
					</li>
				</ul>
			</nav>
		</MasterLayout>
	);
};

export default Blog;