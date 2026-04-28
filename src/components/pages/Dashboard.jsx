import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/Topbar";
import StatsCards from "../dashboard/StatsCards";
import TaskList from "../dashboard/TaskList";
import TaskOverviewChart from "../dashboard/TaskOverviewChart";
import StreakTracker from "../dashboard/StreakTracker";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-4 space-y-4">
          <StatsCards />

          <div className="grid grid-cols-2 gap-4">
            <TaskList />
            <TaskOverviewChart />
          </div>

          <StreakTracker />
        </div>
      </div>
    </div>
  );
}