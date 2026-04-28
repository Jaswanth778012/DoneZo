import { useTasks } from "../../hooks/useTasks";

export default function Analytics() {
  const { tasks } = useTasks();

  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "done").length;
  const pending = total - completed;

  const completionRate = total ? (completed / total) * 100 : 0;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="card">
        <h4>Total Tasks</h4>
        <h2>{total}</h2>
      </div>

      <div className="card">
        <h4>Completed</h4>
        <h2>{completed}</h2>
      </div>

      <div className="card">
        <h4>Completion Rate</h4>
        <h2>{Math.round(completionRate)}%</h2>
      </div>

      <div className="card col-span-3">
        <h4>Progress</h4>
        <div className="h-3 bg-gray-200 rounded">
          <div
            className="h-3 bg-indigo-500 rounded"
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </div>
    </div>
  );
}