import { useState } from "react";
import { useTasks } from "../../hooks/useTasks";

export default function Tasks() {
  const { tasks, addTask } = useTasks();

  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title) return;

    addTask({
      title,
      status: "todo",
      priority: "medium",
      createdAt: new Date(),
    });

    setTitle("");
  };

  return (
    <div className="space-y-4">
      <div className="card flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task..."
        />
        <button className="btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>

      <div className="card">
        {tasks.map((t) => (
          <div key={t.id} className="flex justify-between mb-2">
            <span>{t.title}</span>
            <span className="text-sm text-gray-500">{t.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}