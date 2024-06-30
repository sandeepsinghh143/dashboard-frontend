export const lineData = (data) => {
  const chartData = {
    labels: data.map((item) => item["demo_table.timestamp.hour"]),
    datasets: [
      {
        fill: true,
        label: "values at different times",
        data: data.map((item) => item["demo_table.totalValue"]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: 1,
      },
    ],
  };
  return chartData;
};
