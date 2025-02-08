export const fileUpload = (req, res) => {
	try {
		if (!req.files || req.files.length === 0) {
			return res.status(400).json({ status: false, msg: "No files uploaded" });
		}
		return res.status(200).json({
			status: true,
			file: req.files,
			msg: "Files uploaded successfully",
		});
	} catch (e) {
		return res.status(500).json({ status: false, msg: "Server error", error: e.message });
	}
};
