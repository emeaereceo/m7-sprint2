import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Tablero = sequelize.define("Tableros", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
