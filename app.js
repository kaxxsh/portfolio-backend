import Express from "express";
import dbConnection from "./db/dbConnection.js";
import {} from "dotenv/config.js";
import errorHandler from "./Middleware/error-handler.js";
import cors from "cors";
import authrouter from "./router/authrouter.js";
import cookieParser from "cookie-parser";
import UserDetailRouter from "./router/UserDetailrouter.js";
import authVerify from "./Middleware/auth-verify.js";

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authrouter);
app.use("/api/v1/user", authVerify, UserDetailRouter);
app.use(errorHandler);

const connection = () => {
  try {
    dbConnection(process.env.MONGO_URL);
    app.listen(3001, (req, res) => {
      console.log("Server is running at port 3001");
    });
  } catch (error) {
    console.log("Error in connecting to DB", error);
  }
};

connection();
