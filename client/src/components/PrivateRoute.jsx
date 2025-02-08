import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = () => {
	const isLogin = Cookies.get("token"); // Check if user is logged in

	return isLogin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
