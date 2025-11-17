import mongoose from 'mongoose';

const specialFundSchema = new mongoose.Schema({
  church: { type: mongoose.Schema.Types.ObjectId, ref: 'Church', required: true },

  category: {
    type: String,
    enum: [
      'Prophetic Seed',
      'Pastor Appreciation',
      'Thanksgiving Offering',
      'Missionary Support',
      'Fruit Seed',
      'Building Fund',
      'Welfare Support'
    ],
    required: true
  },

  giverName: { type: String }, // optional
  
  amount: { type: Number, required: true },
  description: { type: String },

  date: { type: Date, required: true },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export default mongoose.model('SpecialFund', specialFundSchema);