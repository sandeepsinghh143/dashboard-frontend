export const pieData = (data) => {
  const chartData = {
    labels: data.map((item) => item["demo_table.name"]),
    datasets: [
      {
        label: "Value",
        data: data.map((item) => item["demo_table.totalValue"]),
        backgroundColor: [
          "#5b8ff9",
          "#5ad8a6",
          "#5e7092",
          "#f6bd18",
          "#6f5efa",
          "#6ec8ec",
          "#945fb9",
          "#ff9845",
          "#299796",
          "#fe99c3",
        ],
        borderColor: [
          "#d7e3fd",
          "#daf5e9",
          "#d6dbe4",
          "#fdeecd",
          "#dad8fe",
          "#dbf1fa",
          "#e4d7ed",
          "#ffe5d2",
          "#cce5e4",
          "#ffe6f0",
        ],
        borderWidth: 1,
      },
    ],
  };
  return chartData;
};
