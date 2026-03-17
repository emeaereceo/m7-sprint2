import { Lista, Tablero, Tarjeta, Usuario } from "../models/index.js";

export const createUser = async (name, email, password, role) => {
  await Usuario.create({
    name,
    email,
    password,
    role,
  });
};

export const createBoard = async (name, userId) => {
  await Tablero.create({
    name,
    userId,
  });
};

export const createList = async (name, boardId) => {
  await Lista.create({
    name,
    boardId,
  });
};

export const createCard = async (
  title,
  description,
  priority,
  tag,
  status,

  autor,
  listId,
) => {
  await Tarjeta.create({
    title,
    description,
    priority,
    tag,
    status,

    autor,
    listId,
  });
};
