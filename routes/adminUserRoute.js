import express from "express";
const router = express.Router();
import {getAllUsers, getSingleUser, updateUser, deleteUser} from "../controller/adminUserController.js"
import { protect } from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";


router.get("/users", protect, authorizeRoles("superadmin", "admin"), getAllUsers);
router.get("/user/:id", protect, authorizeRoles("superadmin", "admin"), getSingleUser);
router.put("/update/:id", protect, authorizeRoles("superadmin", "admin"), updateUser);
router.delete("/delete/:id", protect, authorizeRoles("superadmin", "admin"), deleteUser);


export default router;
