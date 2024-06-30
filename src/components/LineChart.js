"use client";
import { lineData } from "@/utils/lineData";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const LineChart = ({ data }) => {
  const finalData = lineData(data);
  const options = {
    // responsive: true,
    // aspectRatio: 1,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Chart showing values at different times",
      },
    },
    tension: 0.3,
  };
  return (
    <Line
      data={finalData}
      options={options}
      className="linechart w-full mt-8 max-h-96"
    />
  );
};

export default LineChart;
