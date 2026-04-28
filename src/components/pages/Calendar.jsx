import { useTasks } from "../../hooks/useTasks";

export default function Calendar() {
  const { tasks } = useTasks();

  const grouped = {};

  tasks.forEach((t) => {
    if (!t.dueDate) return;
    grouped[t.dueDate] = [...(grouped[t.dueDate] || []), t];
  });

  return (
    <div className="card">
      <h3 className="mb-4">📅 Task Calendar</h3>

      {Object.keys(grouped).map((date) => (
        <div key={date} className="mb-3">
          <h4 className="font-semibold">{date}</h4>
          {grouped[date].map((t) => (
            <div key={t.id} className="text-sm ml-2">
              • {t.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}