import prisma from "../db/prisma.js";
import HttpError from "../utils/HttpError.js";
import { HTTP_STATUS_CODES } from "../constants/httpStatusCodes.js";

const taskService = {
  getTasksByUserId: async (userId) => {
    try {
      return await prisma.task.findMany({ where: { userId: Number(userId) } });
    } catch (error) {
      console.error("Error retrieving tasks by user ID:", error);
      throw error;
    }
  },

  createTask: async ({ title, priority, category, dueDate, userId }) => {
    try {
      return await prisma.task.create({
        data: {
          title,
          priority,
          category,
          dueDate,
          userId,
        },
      });
    } catch (error) {
      console.error("Error creating task:", error);
      throw new HttpError(
        "Failed to create task.",
        HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
      );
    }
  },

  getTaskById: async (id) => {
    return await prisma.task.findUnique({ where: { id: Number(id) } });
  },

  updateTask: async (id, data) => {
    return await prisma.task.update({ where: { id: Number(id) }, data });
  },

  deleteTask: async (id) => {
    return await prisma.task.delete({ where: { id: Number(id) } });
  },
};

export default taskService;
