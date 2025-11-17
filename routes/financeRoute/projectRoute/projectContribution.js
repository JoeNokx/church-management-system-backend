import express from "express";
const router = express.Router();
import { getAllProjectContributions, getSingleProjectContribution, updateProjectContribution, deleteProjectContribution } from "../../../controller/financeController/projectController/projectContribution.js";
import { protect } from "../../../middleware/authMiddleware.js";
import authorizeRoles from "../../../middleware/roleMiddleware.js";


router.get("/get-project-contributions", protect, authorizeRoles("superadmin", "admin", "financialofficer"), getAllProjectContributions);
router.get("/get-project-contribution/:id", protect, authorizeRoles("superadmin", "admin"), getSingleProjectContribution); 
router.put("/update-project-contribution/:id", protect, authorizeRoles("superadmin", "admin"), updateProjectContribution);
router.delete("/delete-project-contribution/:id", protect, authorizeRoles("superadmin", "admin"), deleteProjectContribution);


export default router
