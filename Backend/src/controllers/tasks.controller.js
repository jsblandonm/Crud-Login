import Tasks from "../models/tasks.model.js";

export const createTasks = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const newTask = new Tasks({
      title,
      description,
      date,
      user: req.user.id,
    });
    const savedTasks = await newTask.save();
    res.json(savedTasks);
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong" });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({
      user: req.user.id,
    }).populate("user");
    res.json(tasks);
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong" });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.id).populate("user");
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const task = await Tasks.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

export const updateTasks = async (req, res) => {
  try {
    const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};
