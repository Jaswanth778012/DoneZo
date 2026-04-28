import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "My Tasks", path: "/tasks" },
    { name: "Projects", path: "/projects" },
    { name: "Calendar", path: "/calendar" },
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">DoneZo</h2>

      <nav className="space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-purple-600"
                  : "hover:bg-purple-700"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}