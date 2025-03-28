import { Router } from "express";
import { loginUserController } from "../controllers/users.controller";
const router = Router();

router.route("/").get(loginUserController);

export default router;
