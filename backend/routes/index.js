import express from "express";
import ProductRouter from "./ProductRouter.js";
import UserRouter from "./UserRouter.js";
const router = express.Router();
router.use((req, res , next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
router.use("/product", ProductRouter)
router.use("/user", UserRouter)
export default router;
