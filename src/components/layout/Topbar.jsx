import { useTasks } from "../../hooks/useTasks";

export default function Topbar() {
  const { addTask } = useTasks();

  const handleAdd = () => {
    const title = prompt("Enter task");

    if (!title) return;

    addTask({
      title,
      status: "todo",
      priority: "medium",
      createdAt: new Date(),
    });
  };

  return (
    <div className="flex justify-between p-4 bg-white shadow">
      <h2 className="font-bold">Dashboard</h2>

      <button
        onClick={handleAdd}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        + Add Task
      </button>
    </div>
  );
}