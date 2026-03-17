import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { Lista } from "./Lista.js";

export const Tablero = sequelize.define("Tableros", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Tablero.hasMany(Lista, {
  foreignKey: "boardId",
});
Lista.belongsTo(Tablero, {
  foreignKey: "boardId",
});
