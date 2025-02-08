import React, { useEffect, useState, useRef } from "react";
import MasterLayout from "../../components/dashboard/layout/MasterLayout.jsx";
import {CreateBlog, UpdateBlog, deleteBlog, GetBlog, ReadCategory, FileUpload, baseURL} from "../../Api/ApiRoute.js";
import { IsEmpty } from "../../helper/Helper.js";

const Blog = () => {
	const [blogs, setBlogs] = useState([]);
	const [categories, setCategories] = useState([]);
	const [blogTitle, setBlogTitle] = useState("");
	const [blogDescription, setBlogDescription] = useState("");
	const [blogImage, setBlogImage] = useState(null);
	const [blogCategory, setBlogCategory] = useState("");
	const [editId, setEditId] = useState(null);
	const inputRef = useRef(null);
	const [currentPage, setCurrentPage] = useState(1);
	const blogsPerPage = 10;

	// Fetch blogs and categories
	const fetchBlogs = async () => {
		try {
			const result = await GetBlog();
			if (result) {
				const updatedBlogs = result.data.map(blog => {
					return {
						...blog,
						image: blog.image ? `${baseURL.replace("/api", "")}/upload-file/${blog.image}` : null
					};
				});


				setBlogs([]); // Reset state before updating
				setTimeout(() => setBlogs(updatedBlogs), 100);
			} else {
				console.error("Failed to fetch blogs:", result.msg);
			}
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};


	const fetchCategories = async () => {
		try {
			const result = await ReadCategory();
			if (result?.status) {
				setCategories(result.data);
			} else {
				console.error("Failed to fetch categories:", result.msg);
			}
		} catch (error) {
			console.error("Error fetching categories:", error);
		}
	};

	useEffect(() => {
		fetchBlogs();
		fetchCategories();
	}, []);

	// Handle image upload
	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			setBlogImage(file);
		}
		console.log("Selected file:", file);
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
				if (uploadResponse) {
					imageUrl = uploadResponse.url;
				} else {
					console.error("Image upload failed");
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
			image: imageUrl,
			categories: blogCategory,
		};

		try {
			if (editId) {
				// Update existing blog
				const updated = await UpdateBlog(editId, blogData);
				if (updated) {
					resetForm();
					await fetchBlogs();
				} else {
					console.error("Update failed:", updated?.msg);
				}
			} else {
				// Create new blog
				const created = await CreateBlog(blogData);
				if (created) {
					resetForm();
					await fetchBlogs();
				} else {
					console.error("Creation failed:", created?.msg);
				}
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

		console.log("Editing blog:", blog);
	};

	// Handle delete
	const handleDelete = async (id) => {
		try {
			const deleted = await deleteBlog(id);
			if (deleted) {
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
					<input type="file" className="form-control" onChange={handleImageUpload} />
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
								<img src={blog.image} alt="blogImg" className='w-[80px] h-[80px] object-cover'/>
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
				<ul className="pagination mx-auto justify-content-center pt-3 pb-5 ">
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