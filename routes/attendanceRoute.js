import express from "express";
const router = express.Router();
import {getAllAttendances, getSingleAttendance, createAttendance, updateAttendance} from "../controller/attendanceController.js"
import authorizeRoles from "../middleware/roleMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";


router.get("/get-attendances", protect, authorizeRoles("superadmin", "admin", "financialofficer"), getAllAttendances);
router.get("/get-attendance/:id", protect, authorizeRoles("superadmin", "admin"), getSingleAttendance); 
router.post("/create-attendance", protect, authorizeRoles("superadmin", "admin"), createAttendance);
router.put("/update-attendance/:id", protect, authorizeRoles("superadmin", "admin"), updateAttendance);


export default router