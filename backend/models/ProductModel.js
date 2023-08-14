import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js";
import Transaction from "./TransactionModel.js";

const Products = db.define(
  "product",
  {
    id_product: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name_product: { type: DataTypes.STRING },
    price: {
      type: DataTypes.INTEGER,
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
Products.hasMany(Transaction, {
  foreignKey: "id_product",
  sourceKey: "id_product",
});
Transaction.belongsTo(Products, {
  foreignKey: "id_product",
  targetKey: "id_product",
});

export default Products;
