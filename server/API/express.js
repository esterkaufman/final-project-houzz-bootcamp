import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRrouter from "../users/controllers.js";
import conectionRouter from "./authentications-and-authorizations/controllers.js";
import errHendler from "./authentications-and-authorizations/error-handler.js";


const createApplicationWithExpress = () =>
 {
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(conectionRouter);
app.use("/users", userRrouter);
app.use(errHendler);

const PORT = process.env.PORT || "8080";

app.listen(PORT, () => {
  console.log(`server run on: http://localhost:${PORT}`);
});

 }

 export default createApplicationWithExpress