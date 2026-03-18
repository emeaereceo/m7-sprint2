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
  const user1 = await createUser({
    name: "Usuario1",
    email: "usuario1@correo.com",
    password: "123456",
    role: "admin",
  });

  const user2 = await createUser({
    name: "Usuario2",
    email: "usuario2@correo.com",
    password: "123456",
    role: "user",
  });

  // Tableros
  const board1 = await createBoard({
    name: "Tablero 1",
    userId: user2.id,
  });

  const board2 = await createBoard({
    name: "Tablero 2",
    userId: user1.id,
  });

  const board3 = await createBoard({
    name: "Tablero 3",
    userId: user2.id,
  });
  // LISTAS
  const todoList = await createList({ name: "ToDo", boardId: board1.id });
  const doingList = await createList({ name: "Doing", boardId: board1.id });
  const doneList = await createList({ name: "Done", boardId: board1.id });

  const pendientesList = await createList({
    name: "Pendientes",
    boardId: board2.id,
  });

  // TARJETAS (usando IDs reales 🔥)
  await createCard({
    title: "Tarea 1",
    description: "Esta es una tarea de prueba",
    priority: "Task",
    tag: "Javascript",
    status: "Backlog",
    autor: "yo",
    listId: todoList.id,
  });

  await createCard({
    title: "Tarea 2",
    description: "Esta es una tarea de prueba2",
    priority: "Task",
    tag: "Javascript",
    status: "Doing",
    autor: "yo",
    listId: doingList.id,
  });

  await createCard({
    title: "Deploy final",
    description: "Subir proyecto a producción",
    priority: "Feature",
    tag: "DevOps",
    status: "Done",
    autor: "yo",
    listId: doneList.id,
  });

  await createCard({
    title: "Revisar bugs",
    description: "Errores reportados por QA",
    priority: "Bug",
    tag: "Backend",
    status: "Backlog",
    autor: "QA",
    listId: pendientesList.id,
  });

  console.log("Datos de prueba insertados");
  process.exit();
}

seed();
