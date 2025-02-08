import React, { useEffect, useState, useRef } from "react";
import MasterLayout from "../../components/dashboard/layout/MasterLayout.jsx";
import {CreateProfile, UpdateProfile, deleteProfile, GetProfile, FileUpload, baseURL} from "../../Api/ApiRoute.js";
import { IsEmpty } from "../../helper/Helper.js";

const Team = () => {
	const [Profiles, setProfiles] = useState([]);
	const [ProfileTitle, setProfileTitle] = useState("");
	const [facebook, setfacebook] = useState("");
	const [twitter, setTwitter] = useState("");
	const [github, setGithub] = useState("");
	const [linkedin, setlinkedin] = useState("");
	const [ProfileDescription, setProfileDescription] = useState("");
	const [ProfileImage, setProfileImage] = useState(null);
	const [editId, setEditId] = useState(null);
	const inputRef = useRef(null);
	const fileInputRef = useRef(null);
	const [currentPage, setCurrentPage] = useState(1);
	const ProfilesPerPage = 10;

	// Fetch Profiles and categories
	const fetchProfiles = async () => {
		try {
			const result = await GetProfile();
			if (result) {
				const updatedProfiles = result.data.map(Profile => {
					return {
						...Profile,
						image: Profile.image ? `${baseURL.replace("/api","/upload-file")}/${Profile.image}` : null
					};
				});

				setProfiles([]); // Reset state before updating
				setTimeout(() => setProfiles(updatedProfiles), 100);
			} else {
				console.error("Failed to fetch Profiles:", result.msg);
			}
		} catch (error) {
			console.error("Error fetching Profiles:", error);
		}
	};

	useEffect(() => {
		fetchProfiles();
	}, []);

	// Handle image upload
	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			setProfileImage(file);
		}
		console.log("Selected file:", file);
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (IsEmpty(ProfileTitle) || IsEmpty(ProfileDescription) || IsEmpty(facebook)) {
			console.error("All fields must be filled!");
			return;
		}

		let imageUrl = ProfileImage; // Default to the existing image URL

		// Handle image upload if a new image is selected
		if (ProfileImage instanceof File) {
			const formData = new FormData();
			formData.append("files", ProfileImage);

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

		const ProfileData = {
			name: ProfileTitle,
			designation: ProfileDescription,
			facebook: facebook,
			twitter: twitter,
			github: github,
			linkedin: linkedin,
			image: imageUrl.split("/").pop(),
		};

		try {
			if (editId) {
				// Update existing Profile
				const updated = await UpdateProfile(editId, ProfileData);
				if (updated) {
					resetForm();
					await fetchProfiles();
				} else {
					console.error("Update failed:", updated?.msg);
				}
			} else {
				// Create new Profile
				const created = await CreateProfile(ProfileData);
				if (created) {
					resetForm();
					await fetchProfiles();
				} else {
					console.error("Creation failed:", created?.msg);
				}
			}
		} catch (error) {
			console.error("Error processing request:", error);
		}
	};

	// Handle edit
	const handleEdit = (Profile) => {
		setEditId(Profile._id);
		setProfileTitle(Profile.name);
		setProfileDescription(Profile.designation);
		setfacebook(Profile.facebook);
		setTwitter(Profile.twitter);
		setGithub(Profile.github);
		setlinkedin(Profile.linkedin);
		setProfileImage(Profile.image);
		inputRef.current.focus();

		console.log("Editing Profile:", Profile);
	};

	// Handle delete
	const handleDelete = async (id) => {
		try {
			const deleted = await deleteProfile(id);
			if (deleted) {
				await fetchProfiles();
			} else {
				console.error("Failed to delete:", deleted?.msg);
			}
		} catch (error) {
			console.error("Error deleting Profile:", error);
		}
	};

	// Reset form after creation or update
	const resetForm = () => {
		setEditId(null);
		setProfileTitle("");
		setfacebook("");
		setTwitter("");
		setGithub("");
		setlinkedin("");
		setProfileDescription("");
		setProfileImage(null);
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};
	// Pagination calculations
	const indexOfLastProfile = currentPage * ProfilesPerPage;
	const indexOfFirstProfile = indexOfLastProfile - ProfilesPerPage;
	const currentProfiles = Profiles.slice(indexOfFirstProfile, indexOfLastProfile);
	const totalPages = Math.ceil(Profiles.length / ProfilesPerPage);

	return (
		<MasterLayout title="Profile Management">
			<div className="form w-50 pt-5">
				<div className="mb-3">
					<label className="form-label">Title</label>
					<input type="text" className="form-control" value={ProfileTitle} ref={inputRef} onChange={(e) => setProfileTitle(e.target.value)} />
				</div>
				<div className="mb-3">
					<label className="form-label">Description</label>
					<textarea className="form-control" value={ProfileDescription} onChange={(e) => setProfileDescription(e.target.value)} />
				</div>
				<div className="mb-3">
					<label className="form-label">Facebook</label>
					<input className="form-control" value={facebook} onChange={(e) => setfacebook(e.target.value)} />
				</div>
				<div className="mb-3">
					<label className="form-label">Twitter</label>
					<input className="form-control" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
				</div>
				<div className="mb-3">
					<label className="form-label">Github</label>
					<input className="form-control" value={github} onChange={(e) => setGithub(e.target.value)} />
				</div>
				<div className="mb-3">
					<label className="form-label">LinkedIn</label>
					<input className="form-control" value={linkedin} onChange={(e) => setlinkedin(e.target.value)} />
				</div>

				<div className="mb-3">
					<label className="form-label">Upload Image</label>
					<input type="file" ref={fileInputRef} className="form-control" onChange={handleImageUpload} />
				</div>

				<button type="submit" className="btn btn-primary" onClick={handleSubmit}>{editId ? "Update" : "Create"}</button>
			</div>

			<div className="table-responsive  pt-5 w-80 ">
				<table className="table table-bordered">
					<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Description</th>
						<th>facebook</th>
						<th>twitter</th>
						<th>Github</th>
						<th>LinkedIn</th>
						<th>Image</th>
						<th>Actions</th>
					</tr>
					</thead>
					<tbody>
					{currentProfiles.map((Profile, index) => (
						<tr key={Profile._id}>
							<td>{index + 1 + indexOfFirstProfile}</td>
							<td>{Profile.name}</td>
							<td>{Profile.designation}</td>
							<td>{Profile.facebook}</td>
							<td>{Profile.twitter}</td>
							<td>{Profile.github}</td>
							<td>{Profile.linkedin}</td>
							<td>
								{Profile.image ? (
									<img src={Profile.image} alt="ProfileImg" className="w-[80px] h-[80px] object-cover"/>
								) : (
									<span>No Image</span>
								)}
							</td>

							<td className="d-flex">
								<button onClick={() => handleEdit(Profile)} className="btn btn-sm btn-warning"><i className="fas fa-edit"></i></button>
								<button onClick={() => handleDelete(Profile._id)} className="btn btn-sm btn-danger ms-2"><i className="fas fa-trash-alt"></i></button>
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

export default Team;