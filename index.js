import CMomgoDB from "./server/CQ-API/mongo.js";
import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRrouter from "./server/users/controllers.js";
import conectionRouter from "./server/conection/controllers.js";
import errHendler from "./server/conection/error-handler.js";

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

CMomgoDB();
