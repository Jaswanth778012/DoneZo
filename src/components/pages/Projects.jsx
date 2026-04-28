import { useTasks } from "../../hooks/useTasks";

export default function Projects() {
  const { tasks } = useTasks();

  const projects = [
    {
      name: "Website Redesign",
      progress:
        (tasks.filter(t => t.status === "done").length / tasks.length) * 100 || 0,
    },
    {
      name: "Mobile App",
      progress:
        (tasks.filter(t => t.status === "inprogress").length / tasks.length) * 100 || 0,
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {projects.map((p, i) => (
        <div key={i} className="card">
          <h3>{p.name}</h3>
          <div className="mt-2">
            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-purple-500 rounded"
                style={{ width: `${p.progress}%` }}
              />
            </div>
            <p className="text-sm mt-1">{Math.round(p.progress)}%</p>
          </div>
        </div>
      ))}
    </div>
  );
}