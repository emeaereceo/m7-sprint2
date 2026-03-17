import { connectDB } from "./config/db.js";

import { Lista, Tablero, Tarjeta } from "./models/index.js";

async function testCRUD() {
  await connectDB();

  console.log("======== Creacion de tarjeta ========");

  const lista = await Lista.findOne();

  const nuevaTarjeta = await Tarjeta.create({
    title: "Nueva tarea desde CRUD",
    description: "Esta es una nueva tarea",
    priority: "Feature",
    status: "Backlog",
    listId: lista.id,
  });

  console.log("Tarea creada", nuevaTarjeta.title);

  console.log("======== Leer tablero ========");

  const tablero = await Tablero.findByPk(1, {
    include: {
      model: Lista,
      include: Tarjeta,
    },
  });

  console.log("Tablero con listas y tarjetas:");
  console.log(JSON.stringify(tablero.toJSON(), null, 2));

  console.log("======== Actualizar Tarjeta ========");

  nuevaTarjeta.title = "Titulo nuevo";
  await nuevaTarjeta.save();

  console.log("Tarjeta actualizada");

  console.log("======== Borrar Tarjeta ========");

  await nuevaTarjeta.destroy();

  console.log("Tarjeta eliminada");

  process.exit();
}

testCRUD();
