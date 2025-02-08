import multer from "multer";
import path from "path";

const fileStorageEngine = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads/");
	},
	filename: (req, file, cb) => {
		const ext = path.extname(file.originalname);
		cb(null, "api-img" + Date.now() + ext);
	},
});

let upload = multer({ storage: fileStorageEngine });

export default upload;
