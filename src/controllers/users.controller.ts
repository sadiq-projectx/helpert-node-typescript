import { Request, Response } from "express-serve-static-core";
import asyncHandler from "../middleware/asyncHandler";

export const loginUserController = asyncHandler(
  async (req: Request, res: Response) => {
    res.json({});
  }
);
