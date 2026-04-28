import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Topbar />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}