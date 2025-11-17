// models/Cell.js
import mongoose from "mongoose";

const cellSchema = new mongoose.Schema({
  church: { type: mongoose.Schema.Types.ObjectId,
    ref: 'Church', required: true
 },
  name: { 
    type: String, required: true, trim: true
 },
  description: { 
    type: String, 
    required: true, trim: true
},
  meetingDay: { 
    type: String
 },         
  meetingTime: { 
    type: String
 },        
  meetingVenue: {
     type: String 
    },
  leader: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Member' 
},
  members: [{ 
    type: mongoose.Schema.Types.ObjectId,
     ref: 'Member'

   }],
  isActive: {
    type: Boolean,
     default: true

   },
  createdBy: {
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'User'
     }
}, {
  timestamps: true
});


export default mongoose.model('Cell', cellSchema);
