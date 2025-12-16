import Router from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { role } from "../middlewares/role.middleware.js";
import { addReview } from "../controller/review.controller.js";

const router = Router();

router.post("/", auth, role("client"), addReview);

export default router;