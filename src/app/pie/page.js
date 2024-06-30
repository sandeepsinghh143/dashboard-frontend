import PieChart from "@/components/PieChart";
import cube from "@cubejs-client/core";
import React from "react";

const page = async () => {
  const cubeApi = cube(process.env.CUBEJS_API_TOKEN, {
    apiUrl: process.env.CUBEJS_API_URL,
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
  const myPieData = pieChartData.tablePivot();
  return (
    <div>
      <div className="text-center text-3xl font-semibold">Pie Charts</div>
      <div>
        <PieChart data={myPieData} fullPage={true} />
      </div>
    </div>
  );
};

export default page;
