import {
  DocumentTemplate,
  DocumentTemplateProps,
} from "@react-pdf-overview/templates";
import { CustomPDFViewer } from "./custom-pdf-viewer";
import { useChartImage } from "./chart";
import { ChartConfiguration } from "chart.js";

const loremIpsumParagraph = `
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet mollis augue, ac viverra nisi. Nulla facilisi. Nunc at elit ac lacus bibendum interdum ac vitae risus. Phasellus sed pellentesque dolor. Sed maximus ac leo vitae euismod. Etiam eu hendrerit est. In feugiat dolor semper, varius quam vel, varius orci. In quis lectus id sem pharetra efficitur sed non nibh. Sed porttitor augue sed massa porta rhoncus. Fusce at odio sapien. Duis id dolor id felis suscipit elementum. Phasellus tristique molestie ipsum nec maximus. Vivamus ut volutpat urna, nec elementum mauris.

Nullam vel sem quis justo consectetur commodo ut in dui. Pellentesque faucibus libero aliquam mauris cursus sodales. Integer mollis, mi eu interdum malesuada, ipsum lorem efficitur tortor, vel finibus velit libero quis nibh. Etiam ultricies elit mauris, id fermentum metus maximus sit amet. Nullam feugiat risus tempus, pharetra est vitae, feugiat erat. Vivamus eleifend blandit aliquam. Vivamus efficitur velit suscipit, hendrerit nunc ultricies, imperdiet leo. 
`;

const tableData: DocumentTemplateProps["tableData"] = {
  columns: [
    {
      label: "Name",
      name: "name",
      weighting: 0.3,
    },
    {
      label: "Email",
      name: "email",
      weighting: 0.3,
    },
    {
      label: "Phone No.",
      name: "phone",
      weighting: 0.3,
    },
  ],
  data: [
    {
      name: "John Smith",
      email: "john.smith@domain.com",
      phone: "705-123-456",
    },
  ],
};

const chartConfig: ChartConfiguration = {
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

const App = () => {
  const chartImageUrl = useChartImage(
    document.getElementById("root") as HTMLDivElement,
    chartConfig
  );

  if (!chartImageUrl) return null;

  return (
    <CustomPDFViewer
      title="An Important Document"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <DocumentTemplate
        title="Very Important Document"
        paragraph={loremIpsumParagraph}
        src="/assets/chart.png"
        tableData={tableData}
        chartImageUrl={chartImageUrl}
      />
    </CustomPDFViewer>
  );
};

export default App;
