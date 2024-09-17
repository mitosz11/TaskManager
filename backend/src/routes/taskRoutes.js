import express from "express";
import authorize from "../middlewares/authorize.js";
import taskController from "../controllers/taskController.js";

const router = express.Router();

router.get("/", authorize, taskController.getAllTasks);
router.get('/:id', authorize, taskController.getTaskById);
router.post('/', authorize, taskController.createTask);
router.put('/:id', authorize, taskController.updateTask);
router.delete('/:id', authorize, taskController.deleteTask);

export default router;
