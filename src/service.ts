import { config } from "dotenv";
import express, { Request, Response, NextFunction, Application } from "express";
import cors from "cors";
import route from "./routes";
import connect from "./config/connection";
config();
const app: Application = express();
const PORT = process.env.PORT;
// bodyparse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cors()
// view engine
app.use(cors());
// web route
route(app);
try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on PORT ${PORT}`);
  });
} catch (error) {
  console.error(`Error occured`);
}
