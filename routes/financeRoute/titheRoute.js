import express from "express";
const router = express.Router();
import { getAllTithe, getSingleTithe, updateTithe, deleteTithe } from "../../controller/financeController/titheController.js";
import { protect } from "../../middleware/authMiddleware.js";
import authorizeRoles from "../../middleware/roleMiddleware.js";



router.get("/get-tithe", protect, authorizeRoles("superadmin", "admin", "financialofficer"), getAllTithe);
router.get("/get-tithe/:id", protect, authorizeRoles("superadmin", "admin"), getSingleTithe); 
router.put("/update-tithe/:id", protect, authorizeRoles("superadmin", "admin"), updateTithe);
router.delete("/delete-tithe/:id", protect, authorizeRoles("superadmin", "admin"), deleteTithe);


export default router
