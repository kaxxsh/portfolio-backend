import authSchema from "../model/authSchema.js";
import { badRequest, SuccessRequest } from "../error/index.js";

const authSignup = async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new badRequest("Email and Password is required");
    }
    await authSchema.create(req.body);
    throw new SuccessRequest("User Created");
  } catch (error) {
    next(error);
  }
};
const authlogin = async (req, res, next) => {
  try {
    if (!req.body.email && !req.body.password) {
      throw new badRequest("Email and Password is required");
    }
    const User = await authSchema.findOne({ email: req.body.email });
    if (!User) {
      throw new badRequest("User not found");
    }
    throw new SuccessRequest("User found");
  } catch (error) {
    next(error);
  }
};

export { authSignup, authlogin };
