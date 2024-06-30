import BarChart from "@/components/BarChart";
import cube from "@cubejs-client/core";
import React from "react";

const page = async () => {
  const cubeApi = cube(process.env.CUBEJS_API_TOKEN, {
    apiUrl: process.env.CUBEJS_API_URL,
  });
  const barChartData = await cubeApi.load({
    measures: ["demo_table.totalValue"],
    dimensions: ["demo_table.name"],
    order: [["demo_table.name", "asc"]],
  });
  const myBarData = barChartData.tablePivot();
  return (
    <div>
      <div className="text-center text-3xl font-semibold">Bar Charts</div>
      <div>
        <BarChart data={myBarData} fullPage={true} />
      </div>
    </div>
  );
};

export default page;
