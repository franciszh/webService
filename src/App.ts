import * as express from "express";

const app = express();

app.set("port", 8888);

app.post("/", (req, res) => {
  res.json({ message: "hello world" });
});

export default app;
