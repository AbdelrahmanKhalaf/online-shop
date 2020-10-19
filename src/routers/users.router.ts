import { Router } from "express";
import { getFristUser } from "../controllers/users.controller";
const router: Router = Router();
router.get("/user", getFristUser);
export default router;
