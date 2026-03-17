import { connectDB, sequelize } from "./config/db.js";
import {
  createBoard,
  createCard,
  createList,
  createUser,
} from "./services/index.js";

async function seed() {
  await connectDB();
  await sequelize.sync({ force: true });

  console.log("Modelos creados");

  // Users
  await createUser("Usuario1", "usuario1@correo.com", "123456", "admin");
  await createUser("Usuario2", "usuario2@correo.com", "123456", "user");

  // Tableros
  await createBoard("Tablero 1", 2);
  await createBoard("Tablero 2", 1);
  await createBoard("Tablero 3", 2);

  // Listas
  await createList("ToDo", 1);
  await createList("Doing", 1);
  await createList("Done", 1);
  await createList("Pendientes", 2);

  // Tareas
  await createCard(
    "Tarea 1",
    "Esta es una tarea de prueba",
    "Task",
    "Javascript",
    "Backlog",

    "yo",
    1,
  );

  await createCard(
    "Tarea 2",
    "Esta es una tarea de prueba2",
    "Task",
    "Javascript",
    "Backlog",
    "yo",
    2,
  );

  console.log("Datos de prueba insertados");
  process.exit();
}

seed();
