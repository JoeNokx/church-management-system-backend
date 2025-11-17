import express from "express";
const router = express.Router();
import {getAllEvents, getSingleEvent, registerEventAttendee, getEventAttendees, updateEventAttendee, removeEventAttendee, createEvent, updateEvent, deleteEvent} from "../../controller/eventController/index.js"
import { protect } from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";


router.get("/events", protect, authorizeRoles("superadmin", "churchadmin", "financialofficer"), getAllEvents);
router.get("/events/:id", protect, authorizeRoles("superadmin", "churchadmin"), getSingleEvent); 
router.post("/events", protect, authorizeRoles("superadmin", "churchadmin"), createEvent);
router.put("/events/:id", protect, authorizeRoles("superadmin", "churchadmin"), updateEvent);
router.delete("/events/:id", protect, authorizeRoles("superadmin", "churchadmin"), deleteEvent);


router.post("/events/:id/attendees", protect, authorizeRoles("superadmin", "churchadmin"), registerEventAttendee);
router.get("/events/:id/attendees", protect, authorizeRoles("superadmin", "churchadmin"), getEventAttendees);
router.put("/events/:id/attendees/:attendeeId", protect, authorizeRoles("superadmin", "churchadmin"), updateEventAttendee);
router.delete("/events/:id/attendees/:attendeeId", protect, authorizeRoles("superadmin", "churchadmin"), removeEventAttendee);


export default router