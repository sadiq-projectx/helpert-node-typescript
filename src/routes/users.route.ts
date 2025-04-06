import { Router } from "express";
import {
  loginUserController,
  registerUserController,
} from "../controllers/users.controller";
import { validateRequest } from "../middleware/routeValidation";
import { loginUserDTO, registerUserDTO } from "../dtos/users.dto";
const router = Router();

router
  .route("/register")
  .post(registerUserDTO, validateRequest, registerUserController);
router.route("/login").post(loginUserDTO, validateRequest, loginUserController);

export default router;
