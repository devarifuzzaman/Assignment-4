import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
		categoryName: {type: String,unique:true, required: true},
},
	{
		timestamps: true,
		versionKey: false
	}
)

export default mongoose.model('categories', DataSchema);