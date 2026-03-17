import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Lista = sequelize.define("Listas", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
