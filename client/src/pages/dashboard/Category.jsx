import React, { useEffect, useState, useRef } from "react";
import MasterLayout from "../../components/dashboard/layout/MasterLayout.jsx";
import { ReadCategory, CreateCategory, UpdateCategory, deleteCategory } from "../../Api/ApiRoute.js";

const Category = () => {
	const [category, setCategory] = useState([]);
	const [categoryName, setCategoryName] = useState(""); // Input state
	const [editId, setEditId] = useState(null); // Track category being edited
	const inputRef = useRef(null); // Ref for input focus

	// Fetch categories on component mount
	const fetchCategories = async () => {
		try {
			const result = await ReadCategory();
			if (result.status && result.data) {
				setCategory(result.data);
			} else {
				console.error("Failed to fetch categories:", result.msg);
			}
		} catch (error) {
			console.error("Error fetching categories:", error);
		}
	};

	useEffect(() => {
		fetchCategories().then();
	}, []);

	// Handle category form submission (Create or Update)
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!categoryName.trim()) return; // Prevent empty submission

		if (editId) {
			// Update existing category
			const updated = await UpdateCategory(editId, { categoryName });
			if (updated) {
				setEditId(null);
				setCategoryName("");
				await fetchCategories();
			}
		} else {
			// Create new category
			const created = await CreateCategory( { categoryName });
			if (created) {
				setCategoryName("");
				await fetchCategories();
			}
		}
	};

	// Populate form for editing
	const handleEdit = (id, name) => {
		setEditId(id);
		setCategoryName(name);
		inputRef.current.focus();
	};

	// Handle category deletion
	const handleDelete = async (id) => {
		const deleted = await deleteCategory(id);
		if (deleted) {
			await fetchCategories();
		}
	};

	return (
		<MasterLayout title="Category">

			{/* Form Section */}
			<div className="form w-50 pt-5">
					<div className="mb-3">
						<label htmlFor="label" className="form-label">
							Category Name
						</label>
						<input
							type="text"
							className="form-control"
							id="label"
							value={categoryName}
							ref={inputRef}
							onChange={(e) => setCategoryName(e.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-primary" onClick={handleSubmit}>
						{editId ? "Update" : "Create"}
					</button>
					{editId && (
						<button
							type="button"
							className="btn btn-secondary ms-2"
							onClick={() => {
								setEditId(null);
								setCategoryName("");
							}}
						>
							Cancel
						</button>
					)}
			</div>

			{/* Table Section */}
			<div className="tableSec pt-5 w-75">
				<table className="table table-bordered">
					<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Category Name</th>
						<th scope="col">Action</th>
					</tr>
					</thead>
					<tbody>
					{category.length > 0 ? (
						category.map((item, index) => (
							<tr key={item?._id}>
								<th>{index + 1}</th>
								<td>{item.categoryName}</td>
								<td>
										<span
											onClick={() => handleEdit(item._id, item.categoryName)}
											className="font-medium text-primary hover:underline"
										><i className="fas fa-edit"></i></span>{" "}
									|{" "}
									<span onClick={() => handleDelete(item._id)} className="font-medium text-danger hover:underline ms-2"
									><i className="fas fa-trash-alt"></i></span>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="3" className="text-center">No Categories Available</td>
						</tr>
					)}
					</tbody>
				</table>
			</div>
		</MasterLayout>
	);
};

export default Category;
