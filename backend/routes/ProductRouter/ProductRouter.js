import express from "express";
import {
  addPicture,
  addProducts,
  getProducts,
} from "../../controllers/Products.js";

const ProductRouter = express.Router();
ProductRouter.get("/product", getProducts);
ProductRouter.post("/product", addProducts);
ProductRouter.post("/pict", addPicture);

export default ProductRouter;
