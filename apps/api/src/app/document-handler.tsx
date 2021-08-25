import { Router } from "express";
import ReactPDF from "@react-pdf/renderer";
import { renderChart } from "./render-chart";
import { lineChartConfig } from "@react-pdf-overview/chart-configs";
import {
  DocumentTemplate,
  DocumentTemplateProps,
} from "@react-pdf-overview/templates";

const router = Router();

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

router.get("/", async function (req, res) {
  const buffer = await renderChart(lineChartConfig);

  const document = (
    <DocumentTemplate
      title="Very Important Document"
      paragraph={loremIpsumParagraph}
      src="http://localhost:3333/assets/chart.png"
      tableData={tableData}
      chartImage={{
        data: buffer,
        format: "png",
      }}
    />
  );

  const stream = await ReactPDF.renderToStream(document);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=document.pdf");

  stream.pipe(res);
});

export default router;
