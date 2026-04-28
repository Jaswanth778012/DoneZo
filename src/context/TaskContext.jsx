import { createContext, useEffect, useState } from "react";
import * as service from "../service/taskService";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await service.getTasks();
    setTasks(data);
  };

  const addTask = async (task) => {
    const newTask = await service.createTask(task);
    setTasks((prev) => [...prev, newTask]);
  };

  const updateTask = async (id, updatedTask) => {
    const res = await service.updateTask(id, updatedTask);
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? res : t))
    );
  };

  const deleteTask = async (id) => {
    await service.deleteTask(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};