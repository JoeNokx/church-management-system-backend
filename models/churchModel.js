import mongoose from "mongoose";

const churchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  foundedDate: Date,
  address: {
    streetAddress: String,
    city: String,
    region: String,
    country: { type: String, default: 'Ghana' }
  },
  contact: {
    phoneNumber: String,
    email: String
  },
 
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

export default mongoose.model('Church', churchSchema);
