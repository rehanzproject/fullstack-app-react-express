import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Transaction = db.define(
    "transaction",
    {
      name_transaction: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      price: {
        type: DataTypes.INTEGER,
      },
      qty: {
        type: DataTypes.INTEGER,
      },
      name_product: {
        type: DataTypes.STRING, // This should match the data type of name_product in Products
        references: {
          model: "product",
          key: "name_product",
        },
      },
    },
    { freezeTableName: true }
  );

  export default Transaction