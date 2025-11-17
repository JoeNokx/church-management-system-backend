import express from "express";
const router = express.Router();
import {createMyChurch,getMyChurchProfile, updateMyChurchProfile} from "../controller/churchController.js"
import { protect } from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";   


router.get("/get-church/:id", protect, authorizeRoles("superadmin", "admin"), getMyChurchProfile); 
router.post("/create-church", protect, authorizeRoles("superadmin", "admin"), createMyChurch);
router.put("/update-church/:id", protect, authorizeRoles("superadmin", "admin"), updateMyChurchProfile);


export default router