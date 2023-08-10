import express from "express";
import { verifyToken } from "../../middleware/VerifyToken.js";
import { Login, Logout, Register, getUsers } from "../../controllers/Users.js";
import { refreshToken } from "../../controllers/RefreshToken.js";

const UserRouter = express.Router();
UserRouter.get("/user", verifyToken, getUsers);
UserRouter.post("/user", Register);
UserRouter.post("/login", Login);
UserRouter.get("/token", refreshToken);
UserRouter.delete("/logout", Logout);
export default UserRouter