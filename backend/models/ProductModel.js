import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js";

const Products = db.define(
  "product",
  {
    id: {
      type: DataTypes.UUID, // Use the UUID data type
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    picture: {
      type: DataTypes.BLOB,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    desc: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

export default Products;
