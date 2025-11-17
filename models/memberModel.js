// models/Member.js
import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  church: { type: mongoose.Schema.Types.ObjectId, ref: 'Church', required: true },
  memberId: { type: String, required: true, unique: true, trim: true },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, trim: true },
  email: { type: String, lowercase: true, trim: true },
  phoneNumber: { type: String, trim: true },
  gender: { type: String, enum: ['male', 'female'] },
  dateOfBirth: Date,
  address: {
    streetAddress: String,
    city: String,
    region: String,
    country: { type: String, default: 'Ghana' }
  },
  maritalStatus: { type: String, enum: ['single', 'married', 'divorced', 'widowed', 'other'] },
  status: { type: String, enum: ['active', 'inactive', 'visitor', 'former'], default: 'active' },

  // Relationships to organizational models
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },         // department
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' }, // ministry
  cell: { type: mongoose.Schema.Types.ObjectId, ref: 'Cell' },         // small group

  // Ministry / leadership roles
  roles: [{ type: String }], // e.g., ['leader','usher','worship'],
  membershipType: String,
  joinedAt: Date,
  notes: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

// virtual fullName
memberSchema.virtual('fullName').get(function () {
  return [this.firstName, this.lastName].filter(Boolean).join(' ');
});

memberSchema.set('toJSON', { virtuals: true });
memberSchema.set('toObject', { virtuals: true });

export default mongoose.model('Member', memberSchema);
