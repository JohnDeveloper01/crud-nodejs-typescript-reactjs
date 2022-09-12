import express, { Application } from "express";
import {
  createNewUser,
  deleteUser,
  findAUser,
  getAllUser,
  updateUser,
} from "../controller/apiUserController";

const userApiRouter = express.Router(); //return a path route
userApiRouter.delete("/delete/:id", deleteUser);
userApiRouter.put("/update-user/:id", updateUser);
userApiRouter.post("/create-user", createNewUser);
userApiRouter.get("/:id", findAUser);
userApiRouter.get("/", getAllUser);
userApiRouter.get("*", function (req, res) {
  return res.status(404).send("you can enter true a path");
});

export default userApiRouter;
