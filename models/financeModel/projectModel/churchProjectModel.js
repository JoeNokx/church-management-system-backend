import mongoose from 'mongoose';

const churchProjectSchema = new mongoose.Schema({
  church: { type: mongoose.Schema.Types.ObjectId, ref: 'Church', required: true },

  name: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  description: { type: String },

  totalRaised: { type: Number, default: 0 },
  totalSpent: { type: Number, default: 0 },

  status: { 
    type: String, 
    enum: ['Active', 'Completed', 'Paused'], 
    default: 'Active' 
  },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export default mongoose.model('ChurchProject', churchProjectSchema);