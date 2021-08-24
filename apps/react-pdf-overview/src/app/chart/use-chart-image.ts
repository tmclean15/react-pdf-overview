import { ChartConfiguration, ChartItem } from "chart.js";
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";

export const useChartImage = (
  container: HTMLDivElement,
  chartConfig: ChartConfiguration
): string | undefined => {
  const [imageUrl, setImageUrl] = useState<string>();

  const chartId = "chart";

  useEffect(() => {
    let newChart = Chart.getChart(chartId);
    if (!newChart) {
      const canvas = document.createElement("canvas") as HTMLCanvasElement;
      canvas.style.display = "none";
      canvas.id = chartId;
      container.appendChild(canvas);
      newChart = new Chart(canvas as ChartItem, {
        ...chartConfig,
        options: {
          ...chartConfig.options,
          animation: {
            ...chartConfig.options?.animation,
            onComplete: function (event) {
              const original = chartConfig.options?.animation;
              if (original && original.onComplete)
                original.onComplete.call(this, event);
              const chart = Chart.getChart(chartId);
              if (chart) setImageUrl(chart.toBase64Image("image/png", 1));
            },
          },
        },
      });
    }
  });

  return imageUrl;
};
