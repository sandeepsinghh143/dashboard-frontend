export const barData = (data) => {
  const chartData = {
    labels: data.map((item) => item["demo_table.name"]),
    datasets: [
      {
        label: "products",
        data: data.map((item) => item["demo_table.totalValue"]),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return chartData;
};
