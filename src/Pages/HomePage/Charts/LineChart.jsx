import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ credits, debits }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart",
      },
    },
  };

  const labels =
    credits?.length > debits?.length
      ? credits.map((each, i) => i)
      : debits?.map((each, i) => i);

  const data = {
    labels,
    datasets: [
      {
        label: "Debits",
        data: debits?.map((each) => each.amount),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Credits",
        data: credits?.map((each) => each.amount),
        borderColor: "rgb(0, 2550, 0)",
        backgroundColor: "rgba(0, 255, 0, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default LineChart;
