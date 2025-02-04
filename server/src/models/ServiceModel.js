import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
		title: {type: String, required: true},
		image: {type: String,required: true},
		des: {type: String, required: true},
		categoryID: {type: mongoose.Schema.Types.ObjectId, required: true},
},
	{
		timestamps: true,
		versionKey: false
	}
)

export default mongoose.model('services', DataSchema);