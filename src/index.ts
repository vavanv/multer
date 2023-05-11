import express, { Request, Response } from "express";
import app from "./app";
const port = process.env.PORT || 8081;

const server = app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
