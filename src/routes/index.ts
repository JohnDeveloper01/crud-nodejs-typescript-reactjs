import { Application } from "express";
import userApiRouter from "./apiUserRoute";

function route(app: Application): void {
  // localhost:3000/user
  app.use("/api/v1/user/", userApiRouter);
}

export default route;
