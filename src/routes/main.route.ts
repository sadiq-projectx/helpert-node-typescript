import { Express } from "express";
import userRouter from "./users.route";

const createRoutes = (app: Express) => {
  app.use("/api/users", userRouter);
};

export default createRoutes;
