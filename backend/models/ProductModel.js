import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js";
import Transaction from "./TransactionModel.js";

const Products = db.define(
  "product",
  {
    name_product: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name_transaction: {
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
Products.hasMany(Transaction, { foreignKey: "name_product", sourceKey: "name_product" });
Transaction.belongsTo(Products, { foreignKey: "name_product", targetKey: "name_product" });

export default Products;
