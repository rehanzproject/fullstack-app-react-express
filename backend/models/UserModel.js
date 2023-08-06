import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js";

const Users = db.define(
  "users",
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
    refreshToken: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);
export default Users;
