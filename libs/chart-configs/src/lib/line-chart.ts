import { ChartConfiguration } from "chart.js";

export const lineChartConfig: ChartConfiguration = {
  type: "line",
  data: {
    labels: [0.01, 0.1, 1, 10, 100, 1000, 10000, 100000],
    datasets: [
      {
        data: [200, 300, 400, 500, 600, 700, 800, 900],
        label: "Min",
        borderColor: "#9db3c0",
        fill: false,
      },
      {
        data: [282, 350, 411, 502, 635, 809, 820, 987],
        label: "Data",
        borderColor: "#010102",
        fill: false,
      },
      {
        data: [300, 400, 500, 600, 700, 800, 900, 1000],
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
        text: "A neat chart",
        font: {
          size: 30,
        },
      },
      legend: {
        labels: {
          font: {
            size: 20,
          },
        },
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
