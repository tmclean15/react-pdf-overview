import express from "express";
import { Message } from "@react-pdf-overview/api-interfaces";
import documentRouter from "./app/document-handler";
import path from "path";

const app = express();

const greeting: Message = { message: "Welcome to api!" };

app.get("/api", (req, res) => {
  res.send(greeting);
});

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use("/api/document", documentRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log("Listening at http://localhost:" + port + "/api");
});
server.on("error", console.error);
