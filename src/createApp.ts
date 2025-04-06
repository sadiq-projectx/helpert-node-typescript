import express from "express";
import cors from "cors";
import { connectDb } from "./database/connection";
import createRoutes from "./routes/main.route";
import notFoundHandler from "./middleware/notFoundHandler";
import errorHandler from "./middleware/errorHandler";

export const createApp = () => {
  // Initializing Express App
  const app = express();

  // Database Connection
  connectDb();

  // Middleware
  app
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors());

  // Routes
  createRoutes(app);

  // Error Handler
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};
