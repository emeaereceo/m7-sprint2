configDotenv();
import { configDotenv } from "dotenv";
import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

export const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: "postgres",
});

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Conexion DB exitosa");
  } catch (error) {
    console.error("Error al conectar DB", error);
  }
}

// connectDB();
