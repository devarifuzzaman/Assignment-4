import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {UserLogin} from "../Api/ApiRoute.js";
import {ErrorToast, IsEmpty} from "../helper/Helper.js";

const Login = () => {

	const [data, setData] = useState({ email: "", password: ""});
	const navigate = useNavigate();

	const validateEmail = (email) => {
		const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return regex.test(email);
	};

	const submitData = async () => {
		if (IsEmpty(data.email)) {
			ErrorToast("Email is required.");
		} else if (!validateEmail(data.email)) {
			ErrorToast("Please enter a valid email address.");
		} else if (IsEmpty(data.password)) {
			ErrorToast("Password is required.");
		} else {
			let result = await UserLogin(data);
			if (result) {
				// Navigate to the login page
				navigate("/dashboard");
			}
		}
	};

	return (
		<>
				<div className="container w-100 mx-auto vh-100 d-flex align-items-center justify-content-center ">
					<div className="form w-25 ">
					<div className="mb-3">
						<label htmlFor="Email" className="form-label">Email address</label>
						<input type="email" className="form-control" id="Email" onChange={(e) => setData({ ...data, email: e.target.value })} />
					</div>
					<div className="mb-3">
						<label htmlFor="Password" className="form-label">Password</label>
						<input type="password" className="form-control" id="Password"  onChange={(e) => setData({ ...data, password: e.target.value })}/>
					</div>
					<button onClick={submitData} className="btn bg-orange1 text-white d-block mx-auto hover-bg-green1 hover-white w-50">Login</button>
				</div>
				</div>

		</>
	);
};

export default Login;