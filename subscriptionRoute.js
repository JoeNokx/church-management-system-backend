import express from "express";
const router = express.Router();
import {getAllSubscriptions, getSingleSubscription, createSubscription, updateSubscription, deleteSubscription} from "../controller/subscriptionController.js"
import { protect } from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";


router.get("/get-subscriptions", protect, authorizeRoles("superadmin", "supportadmin"), getAllSubscriptions);
router.get("/get-subscription/:id", protect, authorizeRoles("superadmin", "supportadmin", "churchadmin", "associateadmin", "financialofficer"), getSingleSubscription);
router.post("/create-subscription", protect, authorizeRoles("superadmin", "supportadmin", "churchadmin", "associateadmin", "financialofficer"), createSubscription);
router.put("/update-subscription/:id", protect, authorizeRoles("superadmin", "supportadmin", "churchadmin", "associateadmin", "financialofficer"), updateSubscription);
router.delete("/delete-subscription/:id", protect, authorizeRoles("superadmin", "supportadmin", "churchadmin", "associateadmin", "financialofficer"), deleteSubscription);


export default router;