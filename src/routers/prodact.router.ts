import { Router, Request, Response, NextFunction } from "express";
import { getDetilsProdact } from "../controllers/prodact.controllar";
const router: Router = Router();
router.get("/prodact/:id", getDetilsProdact);
export default router;
