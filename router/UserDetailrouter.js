import express from "express";
import verifyUser from "../Middleware/Verify-User.js";
import {
  getallUserDetail,
  getUserDetail,
  addUserDetail,
  updateUserDetail,
} from "../Controllers/userDetailControllers.js";

const UserDetailRouter = express.Router();

UserDetailRouter.route("/").get(getallUserDetail).post(addUserDetail);

UserDetailRouter.route("/:id")
  .get(verifyUser, getUserDetail)
  .patch(verifyUser, updateUserDetail);

export default UserDetailRouter;
