import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/index.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Welcome to the API!"); // Or any other response for the root
});
app.use("/api", router); // API routes are prefixed with /api

export default app;
