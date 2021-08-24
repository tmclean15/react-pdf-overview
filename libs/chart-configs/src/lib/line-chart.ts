import { ChartConfiguration } from "chart.js";

export const lineChartConfig: ChartConfiguration = {
  type: "line",
  data: {
    labels: [0.01, 0.1, 1, 10, 100, 1000],
    datasets: [
      {
        data: [],
        label: "Min",
        borderColor: "#9db3c0",
        fill: false,
      },
      {
        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
        label: "Data",
        borderColor: "#010102",
        fill: false,
      },
      {
        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
        label: "Max",
        borderColor: "#9db3c0",
        fill: false,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "World population per region (in millions)",
      },
    },
    scales: {
      x: {
        display: true,
        type: "logarithmic",
      },
      y: {
        display: true,
      },
    },
  },
};
