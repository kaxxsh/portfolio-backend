import mongoose from "mongoose";
import validator from "validator";

const User = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validator: {
        validate: (value) => validator.isEmail(value),
        message: "Email is not valid",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  {timestamps: true}
);

const authSchema = mongoose.model("authUser", User);

export default authSchema;
