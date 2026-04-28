import { useTasks } from "../../hooks/useTasks";

export default function StatsCards() {
  const { tasks } = useTasks();

  const total = tasks.length;
  const inProgress = tasks.filter(t => t.status === "inprogress").length;
  const completed = tasks.filter(t => t.status === "done").length;

  const today = new Date().toISOString().split("T")[0];
  const dueToday = tasks.filter(t => t.dueDate === today).length;

  return (
    <div className="grid grid-cols-4 gap-4">
      <Card title="Total" value={total} />
      <Card title="In Progress" value={inProgress} />
      <Card title="Completed" value={completed} />
      <Card title="Due Today" value={dueToday} />
    </div>
  );
}

const Card = ({ title, value }) => (
  <div className="bg-white p-4 rounded shadow">
    <h4>{title}</h4>
    <h2>{value}</h2>
  </div>
);