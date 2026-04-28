import { useTasks } from "../../hooks/useTasks";
import { useStreak } from "../../hooks/useStreak";

export default function StreakTracker() {
  const { tasks } = useTasks();
  const streak = useStreak(tasks);

  return (
    <div className="bg-white p-4 rounded">
      🔥 {streak} Day Streak
    </div>
  );
}