import 'dotenv/config'
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const CExpressApp = (api) => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(express.json());
  if (api.appMidlware)
  app.use(api.appMidlware)
  if (!api || !api.name) api.name = "";
  const PORT = api.port || process.env.PORT || "8080";
  app.listen(PORT, () => {
    console.log(`server run on: http://localhost:${PORT}/${api.name}`);
  });
  app.get(`/${api.name}`, (req, res) => {
    res.json({ message: ` Hello from ${api.name} server!` });
  });
  return app;
};
export default CExpressApp;
