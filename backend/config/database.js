import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config()

const db = new Sequelize(process.env.DB_HOST, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});
export default db;
