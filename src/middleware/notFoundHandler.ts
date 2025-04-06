import { Request, Response, NextFunction } from "express-serve-static-core";

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    status: 404,
    message: `Route ${req.originalUrl} not found`,
  });
};

export default notFoundHandler;
