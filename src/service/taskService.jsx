const STORAGE_KEY = "tasks";

// Helper to simulate delay (optional, feels real)
const delay = (ms) => new Promise(res => setTimeout(res, ms));

// GET ALL TASKS
export const getTasks = async () => {
  await delay(200);

  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// CREATE TASK
export const createTask = async (task) => {
  await delay(200);

  const tasks = await getTasks();

  const newTask = {
    ...task,
    id: Date.now(), // simple unique id
  };

  const updated = [...tasks, newTask];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  return newTask;
};

// UPDATE TASK
export const updateTask = async (id, updatedTask) => {
  await delay(200);

  const tasks = await getTasks();

  const updated = tasks.map(t =>
    t.id === id ? { ...updatedTask, id } : t
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  return updatedTask;
};

// DELETE TASK
export const deleteTask = async (id) => {
  await delay(200);

  const tasks = await getTasks();

  const updated = tasks.filter(t => t.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};