import "reflect-metadata";
import dotenv from "dotenv";
import app from "./server";
import { AppDataSource } from "./CONFIG/data_source";

dotenv.config();

const PORT = process.env.PORTURI || 3002;

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(PORT, () => {
      console.log(`Server escuchando en http://localhost:${PORT} 🤓`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
