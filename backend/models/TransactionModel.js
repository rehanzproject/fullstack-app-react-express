import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Transaction = db.define(
  "transaction",
  {
    id_product: {
      type: DataTypes.UUID, // This should match the data type of id_product in Products
      references: {
        model: "product",
        key: "id_product",
      },
    },
    name_transaction: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    qty: {
      type: DataTypes.INTEGER,
    },
  },
  { freezeTableName: true }
);

export default Transaction;
