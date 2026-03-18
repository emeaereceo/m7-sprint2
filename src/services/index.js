import { Lista, Tablero, Tarjeta, Usuario } from "../models/index.js";

export const createUser = async ({ name, email, password, role }) => {
  try {
    if (!name || !email) {
      throw new Error("Nombre y email son obligatorios");
    }

    const user = await Usuario.create({
      name,
      email,
      password,
      role,
    });

    return user;
  } catch (error) {
    throw new Error(`Error al crear usuario: ${error.message}`);
  }
};

export const createBoard = async ({ name, userId }) => {
  try {
    const user = await Usuario.findByPk(userId);

    if (!user) {
      throw new Error("El usuario no existe");
    }

    const board = await Tablero.create({
      name,
      userId,
    });

    return board;
  } catch (error) {
    throw new Error(`Error al crear tablero: ${error.message}`);
  }
};

export const createList = async ({ name, boardId }) => {
  try {
    const board = await Tablero.findByPk(boardId);

    if (!board) {
      throw new Error("El tablero no existe");
    }

    const list = await Lista.create({
      name,
      boardId,
    });

    return list;
  } catch (error) {
    throw new Error(`Error al crear lista: ${error.message}`);
  }
};

export const createCard = async ({
  title,
  description,
  priority,
  tag,
  status,
  autor,
  listId,
}) => {
  try {
    const list = await Lista.findByPk(listId);

    if (!list) {
      throw new Error("La lista no existe");
    }

    const card = await Tarjeta.create({
      title,
      description,
      priority,
      tag,
      status,
      autor,
      listId,
    });

    return card;
  } catch (error) {
    throw new Error(`Error al crear tarjeta: ${error.message}`);
  }
};
