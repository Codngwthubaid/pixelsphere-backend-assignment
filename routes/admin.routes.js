import Router from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { role } from "../middlewares/role.middleware.js";
import {
    stats,
    createCategory,
    deleteCategory,
    getCategories,
    updateCategory,
    verifyPartner,
    approveReview,
    deleteReview
} from "../controller/admin.controller.js";

const router = Router();

router.use(auth, role("admin"));

router.get("/stats", stats);
router.put("/verify/:id", verifyPartner);
router.post("/", createCategory);
router.get("/", getCategories);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
router.put("/review/:id", approveReview);
router.delete("/review/:id", deleteReview);

export default router;