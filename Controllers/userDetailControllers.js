import UserDetails from "../model/UserDetailSchema.js";
import { badRequest } from "../error/index.js";
import { StatusCodes } from "http-status-codes";

const getallUserDetail = async (req, res, next) => {
  try {
    const userDetail = await UserDetails.find();
    res.status(StatusCodes.OK).json(userDetail);
  } catch (error) {
    next(error);
  }
};

const getUserDetail = async (req, res, next) => {
  try {
    const userDetail = await UserDetails.find({ _id: req.params.id });
    if (!userDetail) {
      throw new badRequest("User not found");
    }
    res.status(200).json(userDetail);
  } catch (error) {
    next(error);
  }
};

const addUserDetail = async (req, res, next) => {
  try {
    req.body.user = req.user.payload;
    const userDetail = await UserDetails.create(req.body);
    res.status(StatusCodes.OK).json(userDetail);
  } catch (error) {
    next(error);
  }
};

const updateUserDetail = async (req, res, next) => {
  try {
    const userDetail = await UserDetails.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!userDetail) {
      throw new badRequest("User not found");
    }
    res.status(StatusCodes.OK).json({ message: "User updated successfully" });
  } catch (error) {
    next(error);
  }
};

export { getallUserDetail, getUserDetail, addUserDetail, updateUserDetail };
