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
import Users from "./models/UserModel.js";
const specs = swaggerJsdoc(options);

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
  // await Products.sync()
  // await Transaction.sync()
  // await Users.sync()
} catch (error) {
  console.error(error);
}
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://diverse-restaurant.vercel.app/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true)
  next();
});
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "https://diverse-restaurant.vercel.app/"],
  })
);
app.use(fileUpload());
app.use(cookieParser());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(router);
app.listen(5000, () => console.log(`server running at port 5000`));
