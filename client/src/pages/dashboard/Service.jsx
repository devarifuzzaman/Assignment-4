import React, { useEffect, useState, useRef } from "react";
import MasterLayout from "../../components/dashboard/layout/MasterLayout.jsx";
import {CreateService, UpdateService, deleteService, GetService, ReadCategory, FileUpload, baseURL} from "../../Api/ApiRoute.js";
import { IsEmpty } from "../../helper/Helper.js";

const Service = () => {
	const [Services, setServices] = useState([]);
	const [categories, setCategories] = useState([]);
	const [ServiceTitle, setServiceTitle] = useState("");
	const [ServiceLink, setServiceLink] = useState("");
	const [ServiceDescription, setServiceDescription] = useState("");
	const [ServiceImage, setServiceImage] = useState(null);
	const [ServiceCategory, setServiceCategory] = useState("");
	const [editId, setEditId] = useState(null);
	const inputRef = useRef(null);
	const fileInputRef = useRef(null);
	const [currentPage, setCurrentPage] = useState(1);
	const ServicesPerPage = 10;

	// Fetch Services and categories
	const fetchServices = async () => {
		try {
			const result = await GetService();
			if (result) {
				const updatedServices = result.data.map(Service => {
					return {
						...Service,
						image: Service.image ? `${baseURL.replace("/api","/upload-file")}/${Service.image}` : null
					};
				});

				setServices([]); // Reset state before updating
				setTimeout(() => setServices(updatedServices), 100);
			} else {
				console.error("Failed to fetch Services:", result.msg);
			}
		} catch (error) {
			console.error("Error fetching Services:", error);
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
		fetchServices();
		fetchCategories();
	}, []);

	// Handle image upload
	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			setServiceImage(file);
		}
		console.log("Selected file:", file);
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (IsEmpty(ServiceTitle) || IsEmpty(ServiceDescription) || IsEmpty(ServiceCategory)|| IsEmpty(ServiceLink)) {
			console.error("All fields must be filled!");
			return;
		}

		let imageUrl = ServiceImage; // Default to the existing image URL

		// Handle image upload if a new image is selected
		if (ServiceImage instanceof File) {
			const formData = new FormData();
			formData.append("files", ServiceImage);

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

		const ServiceData = {
			title: ServiceTitle,
			des: ServiceDescription,
			link: ServiceLink,
			image: imageUrl.split("/").pop(),
			categories: ServiceCategory,
		};

		try {
			if (editId) {
				// Update existing Service
				const updated = await UpdateService(editId, ServiceData);
				if (updated) {
					resetForm();
					await fetchServices();
				} else {
					console.error("Update failed:", updated?.msg);
				}
			} else {
				// Create new Service
				const created = await CreateService(ServiceData);
				if (created) {
					resetForm();
					await fetchServices();
				} else {
					console.error("Creation failed:", created?.msg);
				}
			}
		} catch (error) {
			console.error("Error processing request:", error);
		}
	};

	// Handle edit
	const handleEdit = (Service) => {
		setEditId(Service._id);
		setServiceTitle(Service.title);
		setServiceLink(Service.link);
		setServiceDescription(Service.des);
		setServiceImage(Service.image);
		setServiceCategory(Service.category._id);
		inputRef.current.focus();
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}

		console.log("Editing Service:", Service);
	};

	// Handle delete
	const handleDelete = async (id) => {
		try {
			const deleted = await deleteService(id);
			if (deleted) {
				await fetchServices();
			} else {
				console.error("Failed to delete:", deleted?.msg);
			}
		} catch (error) {
			console.error("Error deleting Service:", error);
		}
	};

	// Reset form after creation or update
	const resetForm = () => {
		setEditId(null);
		setServiceTitle("");
		setServiceLink("");
		setServiceDescription("");
		setServiceImage(null);
		setServiceCategory("");

	};
	// Pagination calculations
	const indexOfLastService = currentPage * ServicesPerPage;
	const indexOfFirstService = indexOfLastService - ServicesPerPage;
	const currentServices = Services.slice(indexOfFirstService, indexOfLastService);
	const totalPages = Math.ceil(Services.length / ServicesPerPage);

	return (
		<MasterLayout title="Service Management">
			<div className="form w-50 pt-5">
				<div className="mb-3">
					<label className="form-label">Title</label>
					<input type="text" className="form-control" value={ServiceTitle} ref={inputRef} onChange={(e) => setServiceTitle(e.target.value)} />
				</div>
				<div className="mb-3">
					<label className="form-label">Description</label>
					<textarea className="form-control" value={ServiceDescription} onChange={(e) => setServiceDescription(e.target.value)} />
				</div>
				<div className="mb-3">
					<label className="form-label">Link</label>
					<input className="form-control" value={ServiceLink} onChange={(e) => setServiceLink(e.target.value)} />
				</div>

				<div className="mb-3">
					<label className="form-label">Upload Image</label>
					<input type="file" ref={fileInputRef} className="form-control" onChange={handleImageUpload} />
				</div>
				<div className="mb-3">
					<label className="form-label">Category</label>
					<select className="form-control" value={ServiceCategory} onChange={(e) => setServiceCategory(e.target.value)}>
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
						<th>Link</th>
						<th>Image</th>
						<th>Category</th>
						<th>Actions</th>
					</tr>
					</thead>
					<tbody>
					{currentServices.map((Service, index) => (
						<tr key={Service._id}>
							<td>{index + 1 + indexOfFirstService}</td>
							<td>{Service.title}</td>
							<td>{Service.des}</td>
							<td>{Service.link}</td>
							<td>
								{Service.image ? (
									<img src={Service.image} alt="ServiceImg" className="w-[80px] h-[80px] object-cover"/>
								) : (
									<span>No Image</span>
								)}
							</td>

							<td>{Service.category?.categoryName}</td>
							<td className="d-flex">
								<button onClick={() => handleEdit(Service)} className="btn btn-sm btn-warning"><i className="fas fa-edit"></i></button>
								<button onClick={() => handleDelete(Service._id)} className="btn btn-sm btn-danger ms-2"><i className="fas fa-trash-alt"></i></button>
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

export default Service;