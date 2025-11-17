import express from "express"; 
const router = express.Router(); 
import {getAllSpecialFunds, getSingleSpecialFund, updateSpecialFund, deleteSpecialFund} from "../../controller/financeController/specialFundController.js"
import { protect } from "../../middleware/authMiddleware.js";
import authorizeRoles from "../../middleware/roleMiddleware.js";


router.get("/get-special-funds", protect, authorizeRoles("superadmin", "admin", "financialofficer"), getAllSpecialFunds);
router.get("/get-special-fund/:id", protect, authorizeRoles("superadmin", "admin"), getSingleSpecialFund); 
router.put("/update-special-fund/:id", protect, authorizeRoles("superadmin", "admin"), updateSpecialFund);
router.delete("/delete-special-fund/:id", protect, authorizeRoles("superadmin", "admin"), deleteSpecialFund);


export default router
