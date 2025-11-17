import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  church: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Church',
    required: true
  },
  serviceType: {
    type: String,
    required: true,
    enum: [
      '1st Service',
      '2nd Service',
      '3rd Service',
      'Children Service',
      'Midweek Service',
      'Prayer Meeting'
    ]
  },
  serviceDate: {
    type: Date,
    required: true
  },
  serviceTime: {
    type: String,
    required: true
  },
  totalAttendance: {
    type: Number,
    required: true
  },
  mainSpeaker: {
    type: String
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member'
    }
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, 
{timestamps: true}
);

export default mongoose.model('Attendance', attendanceSchema);
