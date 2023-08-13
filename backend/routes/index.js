import express from "express";
import ProductRouter from "./ProductRouter.js";
import UserRouter from "./UserRouter.js";
const router = express.Router();
router.use("/product", ProductRouter)
router.use("/user", UserRouter)
export default router;
