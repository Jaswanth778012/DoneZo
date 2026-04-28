export default function ProjectsOverview({ projects = [] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {projects.map((p, i) => (
        <div key={i} className="bg-white p-4 rounded">
          <h4>{p.name}</h4>
          <progress value={p.progress} max="100" />
        </div>
      ))}
    </div>
  );
}