import express from "express"
const router = express.Router()
import {getAllMembers, getSingleMember, createMember, updateMember, deleteMember} from "../controller/memberController.js"
import { protect } from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";


router.get("/get-members", protect, authorizeRoles("superadmin", "admin", "financialofficer"), getAllMembers);
router.get("/get-member/:id", protect, authorizeRoles("superadmin", "admin"), getSingleMember); 
router.post("/create-member", protect, authorizeRoles("superadmin", "admin"), createMember);
router.put("/update-member/:id", protect, authorizeRoles("superadmin", "admin"), updateMember);
router.delete("/delete-member/:id", protect, authorizeRoles("superadmin", "admin"), deleteMember);


export default router 


