import { useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState("all");

  const filtered = tasks.filter(t =>
    filter === "all" ? true : t.status === filter
  );

  return (
    <div>
      <div className="flex gap-2 mb-2">
        {["all", "todo", "inprogress", "done"].map(f => (
          <button key={f} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      {filtered.map(t => (
        <TaskItem key={t.id} task={t} />
      ))}
    </div>
  );
}