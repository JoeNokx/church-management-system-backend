import express from "express";
const router = express.Router();
import {getAllIncomes, getSingleIncome, updateIncome, deleteIncome} from "../../../controller/financeController/incomeExpenseController/incomeController.js"
import { protect } from "../../../middleware/authMiddleware.js";
import authorizeRoles from "../../../middleware/roleMiddleware.js";


router.get("/get-income", protect, authorizeRoles("superadmin", "admin", "financialofficer"), getAllIncomes);
router.get("/get-income/:id", protect, authorizeRoles("superadmin", "admin"), getSingleIncome); 
router.put("/update-income/:id", protect, authorizeRoles("superadmin", "admin"), updateIncome);
router.delete("/delete-income/:id", protect, authorizeRoles("superadmin", "admin"), deleteIncome);


export default router
