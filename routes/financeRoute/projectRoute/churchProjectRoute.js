import express from "express";
const router = express.Router();
import { getAllChurchProjects, getSingleChurchProject, updateChurchProject, deleteChurchProject } from "../../../controller/financeController/projectController/churchProjectController.js";
import { protect } from "../../../middleware/authMiddleware.js";
import authorizeRoles from "../../../middleware/roleMiddleware.js";


router.get("/get-church-projects", protect, authorizeRoles("superadmin", "admin", "financialofficer"), getAllChurchProjects);
router.get("/get-church-project/:id", protect, authorizeRoles("superadmin", "admin"), getSingleChurchProject); 
router.put("/update-church-project/:id", protect, authorizeRoles("superadmin", "admin"), updateChurchProject);
router.delete("/delete-church-project/:id", protect, authorizeRoles("superadmin", "admin"), deleteChurchProject);


export default router
