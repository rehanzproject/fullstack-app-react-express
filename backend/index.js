import express from "express";
import db from "./config/database.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./routes/optionSwagger.js";
import Products from "./models/ProductModel.js";
import Transaction from "./models/TransactionModel.js";
const specs = swaggerJsdoc(options);

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
  // await Products.sync()
  // await Transaction.sync()
} catch (error) {
  console.error(error);
}
app.use(fileUpload());
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:5173",
      "https://fullstack-app-react-express.vercel.app/",
    ],
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(router);
app.listen(5000, () => console.log(`server running at port 5000`));
