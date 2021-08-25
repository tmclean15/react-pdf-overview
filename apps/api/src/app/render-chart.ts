import { ChartJSNodeCanvas } from "chartjs-node-canvas";
import { ChartConfiguration } from "chart.js";

const canvas = new ChartJSNodeCanvas({ width: 800, height: 800 });

export const renderChart = (config: ChartConfiguration) =>
  canvas.renderToBuffer(config);
