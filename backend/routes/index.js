import express from "express";
import ProductRouter from "./ProductRouter/ProductRouter.js";
import UserRouter from "./UserRouter/UserRouter.js";
const router = express.Router();
router.use(ProductRouter)
router.use(UserRouter)
export default router;
