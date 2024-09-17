import taskService from "../services/taskService.js";
import { HTTP_STATUS_CODES } from "../constants/httpStatusCodes.js";
import { TASK_PRIORITY } from "../constants/taskPriority.js";
import { TASK_CATEGORY } from "../constants/taskCategory.js";

const getAllTasks = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res
        .status(HTTP_STATUS_CODES.UNAUTHORIZED)
        .json({ error: "User not authenticated." });
    }
    const tasks = await taskService.getTasksByUserId(req.user.id);
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to fetch tasks." });
  }
};

const getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await taskService.getTaskById(id);
    if (!task)
      return res
        .status(HTTP_STATUS_CODES.NOT_FOUND)
        .json({ error: "Task not found." });

    res.json(task);
  } catch (error) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to fetch task" });
  }
};

const createTask = async (req, res) => {
  const {
    title,
    priority = TASK_PRIORITY.LOW,
    category = TASK_CATEGORY.OTHER,
  } = req.body;

  try {
    if (!req.user || !req.user.id) {
      return res
        .status(HTTP_STATUS_CODES.UNAUTHORIZED)
        .json({ error: "User not authenticated." });
    }
    const task = await taskService.createTask({
      title,
      priority,
      category,
      userId: req.user.id,
    });
    res.status(HTTP_STATUS_CODES.CREATED).json(task);
  } catch (error) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to create task." });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, priority, category, completed } = req.body;

  try {
    const updatedTask = await taskService.updateTask(id, {
      title,
      priority,
      category,
      completed,
    });

    res.json(updatedTask);
  } catch (error) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to update task." });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await taskService.deleteTask(id);

    res.json({ message: "Task deleted." });
  } catch (error) {
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to delete task." });
  }
};

export default {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
