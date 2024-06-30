import LineChart from "@/components/LineChart";
import cube from "@cubejs-client/core";
import React from "react";

const page = async () => {
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

  const myLineData = lineChartData.tablePivot();

  return (
    <div>
      <div className="text-center text-3xl font-semibold">Line Charts</div>
      <div>
        <LineChart data={myLineData} />
      </div>
    </div>
  );
};

export default page;
