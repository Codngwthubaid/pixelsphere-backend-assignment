import Router from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { role } from "../middlewares/role.middleware.js";
import { createInquiry } from "../controller/inquiry.controller.js";

const router = Router();

router.post("/", auth, role("client"), createInquiry);

export default router;
