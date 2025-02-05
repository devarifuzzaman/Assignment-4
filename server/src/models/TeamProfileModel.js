import mongoose from 'mongoose';

const DataSchema= new mongoose.Schema({
		name: {type: String, required: true,},
		designation: {type: String, required: true,},
		image: {type: String, required: true,},
		facebook: {type: String, required: true,},
		twitter: {type: String, required: true,},
		github: {type: String, required: true,},
		linkedin: {type: String, required: true,},
	},
	{
		timestamps: true,
		versionKey: false
	}
)

export default mongoose.model('teamProfiles', DataSchema);