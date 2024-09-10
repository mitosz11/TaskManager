import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllTasks = async () => {
  return await prisma.task.findMany();
};

const getTaskById = async (id) => {
  return await prisma.task.findUnique({ where: { id: Number(id) } });
};

const createTask = async (data) => {
  return await prisma.task.create({ data });
};

const updateTask = async (id, data) => {
  return await prisma.task.update({ where: { id: Number(id) }, data });
};

const deleteTask = async (id) => {
  return await prisma.task.delete({ where: { id: Number(id) } });
};

export default {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
