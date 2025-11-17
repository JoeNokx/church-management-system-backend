import express from "express";
const router = express.Router();
import {getAllOfferings, getSingleOffering, updateOffering, deleteOffering} from "../../controller/financeController/offeringController.js"
import { protect } from "../../middleware/authMiddleware.js";
import authorizeRoles from "../../middleware/roleMiddleware.js";


router.get("/get-offerings", protect, authorizeRoles("superadmin", "admin", "financialofficer"), getAllOfferings);
router.get("/get-offering/:id", protect, authorizeRoles("superadmin", "admin"), getSingleOffering); 
router.put("/update-offering/:id", protect, authorizeRoles("superadmin", "admin"), updateOffering);
router.delete("/delete-offering/:id", protect, authorizeRoles("superadmin", "admin"), deleteOffering);


export default router

