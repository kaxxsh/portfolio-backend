import express from "express";

import {
  getallUserDetail,
  getUserDetail,
  addUserDetail,
  updateUserDetail,
} from "../Controllers/userDetailControllers.js";

const UserDetailRouter = express.Router();

UserDetailRouter.route("/").get(getallUserDetail).post(addUserDetail);

UserDetailRouter.route("/:id").get(getUserDetail).patch(updateUserDetail);

export default UserDetailRouter;
