import express from "express";
const router = express.Router();
import AuthMiddleware from "../middleware/AuthMiddleware.js";
import * as UserController from "../controllers/UserController.js";
import * as CategoryController from "../controllers/CategoryController.js";
import * as BlogController from "../controllers/BlogController.js";
import * as ServiceController from "../controllers/ServiceController.js";
import * as TeamProfileController from "../controllers/TeamProfileController.js";
import * as FileUploadController from "../controllers/FileUploadController.js";
import upload from "../middleware/FileUpload.js";


// Users
router.post('/Login',UserController.Login);
router.get('/Logout',AuthMiddleware,UserController.logOut);

// category Route
router.post('/createCategory',AuthMiddleware,CategoryController.createCategory);
router.get('/getCategory',AuthMiddleware, CategoryController.getCategory);
router.post('/updateCategory/:id',AuthMiddleware,CategoryController.updateCategory);
router.delete('/deleteCategory/:id',AuthMiddleware,CategoryController.deleteCategory);

// Blog route
router.post('/createBlog',AuthMiddleware,BlogController.createBlog)
router.get('/getBlog',AuthMiddleware,BlogController.getBlog);
router.get('/getBlogById/:id',AuthMiddleware,BlogController.getBlogById);
router.post('/updateBlog/:id',AuthMiddleware,BlogController.updateBlog);
router.delete('/deleteBlog/:id',AuthMiddleware,BlogController.deleteBlog);

// Service route
router.post('/createService',AuthMiddleware,ServiceController.createService)
router.get('/getService',AuthMiddleware,ServiceController.getService);
router.get('/getServiceById/:id',AuthMiddleware,ServiceController.getServiceById);
router.post('/updateService/:id',AuthMiddleware,ServiceController.updateService);
router.delete('/deleteService/:id',AuthMiddleware,ServiceController.deleteService);

// Team Profile route
router.post('/createProfile',AuthMiddleware,TeamProfileController.createTeamProfile)
router.get('/getProfile',AuthMiddleware,TeamProfileController.getTeamProfile);
router.post('/updateProfile/:id',AuthMiddleware,TeamProfileController.updateTeamProfile);
router.delete('/deleteProfile/:id',AuthMiddleware,TeamProfileController.deleteTeamProfile);







// file routes
router.post("/file-upload", AuthMiddleware, upload.array("files", 20), FileUploadController.fileUpload);

export default router;