import express from "express";
const router = express.Router();
import {getAllGroups, getSingleGroup, createGroup, updateGroup, deleteGroup} from "../../controller/ministryController/groupController.js"
import { protect } from "../../middleware/authMiddleware.js";
import authorizeRoles from "../../middleware/roleMiddleware.js";


router.get("/get-groups", protect, authorizeRoles("superadmin", "admin", "financialofficer"), getAllGroups);
router.get("/get-group/:id", protect, authorizeRoles("superadmin", "admin"), getSingleGroup); 
router.post("/create-group", protect, authorizeRoles("superadmin", "admin"), createGroup);
router.put("/update-group/:id", protect, authorizeRoles("superadmin", "admin"), updateGroup);
router.delete("/delete-group/:id", protect, authorizeRoles("superadmin", "admin"), deleteGroup);


export default router
