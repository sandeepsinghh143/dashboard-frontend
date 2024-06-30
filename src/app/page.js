import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import MyTable from "@/components/Table";
import cube from "@cubejs-client/core";
import { CircularProgress } from "@mui/material";

export default async function Home() {
  const cubeApi = cube(process.env.CUBEJS_API_TOKEN, {
    apiUrl: process.env.CUBEJS_API_URL,
  });
  const lineChartData = await cubeApi.load({
    measures: ["demo_table.totalValue"],
    timeDimensions: [
      {
        dimension: "demo_table.timestamp",
        granularity: "hour",
      },
    ],
    order: {},
  });

  const barChartData = await cubeApi.load({
    measures: ["demo_table.totalValue"],
    dimensions: ["demo_table.name"],
    order: [["demo_table.name", "asc"]],
  });

  const pieChartData = await cubeApi.load({
    measures: ["demo_table.totalValue"],
    timeDimensions: [
      {
        dimension: "demo_table.timestamp",
      },
    ],
    dimensions: ["demo_table.name"],
    order: [["demo_table.name", "asc"]],
  });

  const myLineData = lineChartData.tablePivot();
  const myBarData = barChartData.tablePivot();
  const myPieData = pieChartData.tablePivot();
  const barColumns = barChartData.tableColumns();

  if (!myLineData || !myBarData || !myPieData) {
    return (
      <div className="w-full lg:w-[calc(100vw-270px)] lg:ml-[250px] flex justify-center items-center h-[calc(100vh-64px)]">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="max-w-full lg:max-w-[calc(100vw-270px)] p-2">
      <div className="flex gap-3 p-4 md:max-w-full justify-between flex-wrap">
        {myPieData && <PieChart data={myPieData} />}
        {myBarData && <BarChart data={myBarData} />}
      </div>
      {myLineData && (
        <div className="flex justify-center max-w-full p-4">
          {" "}
          <LineChart data={myLineData} />
        </div>
      )}
      <div>
        <MyTable data={myBarData} columns={barColumns} />
      </div>
    </div>
  );
}
