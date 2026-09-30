import express from "express";

import diariesRouter from "./routes/diaries.js";

const app = express();
app.use(express.json());
app.use("/api/diaries", diariesRouter);

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("Hello, World!");
  res.send("pong");
});

app.use('/api/diaries', diariesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});