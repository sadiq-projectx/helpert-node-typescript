import { Request, Response } from "express-serve-static-core";
import asyncHandler from "../middleware/asyncHandler";
import {
  loginUserService,
  registerUserService,
} from "../services/users.service";

export const registerUserController = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const result = await registerUserService(email, password);
    res.status(result.status).json(result);
  }
);

export const loginUserController = asyncHandler(
  async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const result = await loginUserService(username, email, password);
    res.status(result.status).json(result);
  }
);
