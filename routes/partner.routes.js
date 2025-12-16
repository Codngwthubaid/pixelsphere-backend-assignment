import Router from "express";
import { auth } from "../middlewares/auth.middleware.js"
import { role } from "../middlewares/role.middleware.js";
import { addPortfolio, createProfile, getLeads } from "../controller/partner.controller.js";
import { deletePortfolio, getPortfolio, updatePortfolio } from "../controller/portfolio.controller.js";

const router = Router();

router.use(auth, role("partner"));
router.post("/profile", createProfile);
router.get("/leads", getLeads);
router.post("/portfolio", addPortfolio);
router.get("/portfolio", getPortfolio);
router.put("/portfolio/:id", updatePortfolio);
router.delete("/portfolio/:id", deletePortfolio);


export default router;