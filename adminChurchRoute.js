import express from "express";
const router = express.Router();
import {getAllChurches, getSingleChurch, updateChurch, deleteChurch} from "../controller/adminChurchController.js"
import { protect } from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";


router.get("/get-churches", protect, authorizeRoles("superadmin", "admin"), getAllChurches);
router.get("/get-church/:id", protect, authorizeRoles("superadmin", "admin"), getSingleChurch); 
router.put("/update-church/:id", protect, authorizeRoles("superadmin", "admin"), updateChurch);
router.delete("/delete-church/:id", protect, authorizeRoles("superadmin", "admin"), deleteChurch);

export default router;
