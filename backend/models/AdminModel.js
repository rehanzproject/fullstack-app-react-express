import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js";

const Admin = db.define(
  "Admin",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING
    },
    refreshToken: {
      type: DataTypes.STRING,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  { freezeTableName: true }
);
export default Admin;
