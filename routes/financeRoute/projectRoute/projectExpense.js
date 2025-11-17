import express from "express";
const router = express.Router();
import { getAllProjectExpense, getSingleProjectExpense, updateProjectExpense, deleteProjectExpense } from "../../../controller/financeController/projectController/projectExpense.js";
import { protect } from "../../../middleware/authMiddleware.js";
import authorizeRoles from "../../../middleware/roleMiddleware.js";


router.get("/get-project-expenses", protect, authorizeRoles("superadmin", "admin", "financialofficer"), getAllProjectExpense);
router.get("/get-project-expense/:id", protect, authorizeRoles("superadmin", "admin"), getSingleProjectExpense); 
router.put("/update-project-expense/:id", protect, authorizeRoles("superadmin", "admin"), updateProjectExpense);
router.delete("/delete-project-expense/:id", protect, authorizeRoles("superadmin", "admin"), deleteProjectExpense);


export default router
