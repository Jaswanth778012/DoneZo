import { useTasks } from "../../hooks/useTasks";
import { PieChart, Pie } from "recharts";

export default function TaskOverviewChart() {
  const { tasks } = useTasks();

  const data = [
    { name: "Todo", value: tasks.filter(t => t.status === "todo").length },
    { name: "InProgress", value: tasks.filter(t => t.status === "inprogress").length },
    { name: "Done", value: tasks.filter(t => t.status === "done").length },
  ];

  return (
    <PieChart width={250} height={250}>
      <Pie data={data} dataKey="value" />
    </PieChart>
  );
}