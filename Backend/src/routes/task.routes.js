import { Router } from "express";
import { authRequire } from "../middlewares/validateToken.js";
import {
  getTasks,
  getTask,
  createTasks,
  deleteTasks,
  updateTasks,
} from "../controllers/tasks.controller.js";
import { validatorSchema } from "../middlewares/validator.middlewares.js";
import { createTaskSchema } from "../schemas/tasks.schema.js";
const router = Router();

router.get("/tasks", authRequire, getTasks);
router.get("/tasks/:id", authRequire, getTask);
router.post(
  "/tasks",
  authRequire,
  validatorSchema(createTaskSchema),
  createTasks
);
router.delete("/tasks/:id", authRequire, deleteTasks);
router.put("/tasks/:id", authRequire, updateTasks);

export default router;
