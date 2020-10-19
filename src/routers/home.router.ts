import { Router, Request, Response, NextFunction } from "express";
import { getHome } from "../controllers/home.controller";
const router: Router = Router();
router.get("/", getHome);
export default router;
