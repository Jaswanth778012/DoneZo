export default function Settings() {
  return (
    <div className="card space-y-4">
      <h3>⚙️ Settings</h3>

      <div>
        <label className="block text-sm">Username</label>
        <input className="border p-2 rounded w-full" />
      </div>

      <div>
        <label className="block text-sm">Theme</label>
        <select className="border p-2 rounded w-full">
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>

      <button className="btn-primary">Save</button>
    </div>
  );
}