import express from "express";
import route from "./routes";

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(route);

export default app;