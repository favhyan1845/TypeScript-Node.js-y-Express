import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Fetching all diary entries");
});

router.post("/", (_req, res) => {
  res.send(  "Diary entry created" );
});

export default router;