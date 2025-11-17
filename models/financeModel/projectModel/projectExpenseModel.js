import mongoose from 'mongoose';


const projectExpenseSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'ChurchProject', required: true },
  church: { type: mongoose.Schema.Types.ObjectId, ref: 'Church', required: true },

  category: {
    type: String,
    enum: [
      'Utility', 'Staff Salary', 'Building Maintenance', 'Ministry Program',
      'Equipment', 'Transportation', 'Other'
    ],
    required: true
  },

  amount: { type: Number, required: true },
  description: { type: String },

  approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  paymentMethod: {
    type: String,
    enum: ['Cash', 'Mobile Money', 'Bank Transfer', 'Cheque'],
    default: 'Cash'
  },

  date: { type: Date, required: true },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export default mongoose.model('ProjectExpense', projectExpenseSchema);