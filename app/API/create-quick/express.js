import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const basicAppWithExpress = (api) => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.json());

  const PORT = process.env.PORT || "8080";

  app.listen(PORT, () => {
    console.log(`server run on: http://localhost:${PORT}`);
  });

  return app;
};
export default basicAppWithExpress;
