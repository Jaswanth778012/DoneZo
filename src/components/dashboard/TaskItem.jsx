import { useTasks } from "../../hooks/useTasks";

export default function TaskItem({ task }) {
  const { updateTask, deleteTask } = useTasks();

  const toggleStatus = () => {
    const newStatus = task.status === "done" ? "todo" : "done";

    updateTask(task.id, {
      ...task,
      status: newStatus,
      completedAt: newStatus === "done" ? new Date() : null,
    });
  };

  return (
    <div className="flex justify-between p-3 bg-white rounded mb-2">
      <div>
        <h4>{task.title}</h4>
        <p>{task.priority}</p>
      </div>

      <div className="flex gap-2">
        <button onClick={toggleStatus}>✔</button>
        <button onClick={() => deleteTask(task.id)}>🗑</button>
      </div>
    </div>
  );
}