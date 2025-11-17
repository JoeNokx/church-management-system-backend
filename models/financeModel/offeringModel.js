import mongoose from 'mongoose';

const OfferingSchema = new mongoose.Schema({
  church: { type: mongoose.Schema.Types.ObjectId, ref: 'Church', required: true },

  serviceType: {
    type: String,
    enum: [
      'Sunday Service',
      'Midweek Service',
      'Children Service',
      'Prayer Meeting',
      'Other'
    ],
    required: true
  },

  amount: { type: Number, required: true },
  date: { type: Date, required: true },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export default mongoose.model('Offering', OfferingSchema);