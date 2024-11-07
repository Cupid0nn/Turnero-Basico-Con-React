import express from "express";
import morgan from "morgan";
import indexRouter from "./ROUTES/indexRoutes";
import cors from "cors";
import bodyParser from 'body-parser';
import { dateFormatter } from './MIDDLEWARES/dateAuthenticathor';

const app = express();
app.use(bodyParser.json());
app.use(dateFormatter);
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(indexRouter);

app.get("/", (req, res) => res.send("HOLA QUE HACE 🧐"));

export default app;