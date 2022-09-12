import basicAppWithExpress from "./create-quick/express.js";
import userRrouter from "../users/controllers.js";
import productRouter from "../product/controllers.js";
import cartRouter from "../cart/controllers.js"
import signRouter from "../../features/admin/sign/controllers.js";
import errHendler from "./authentications-and-authorizations/error-handler.js";

const appAPI = () => {
  const app = basicAppWithExpress();
  app.use(signRouter);
  app.use("/users", userRrouter);
  app.use("/products", productRouter);
  app.use("/cart", cartRouter);
  app.use(errHendler);
};

export default appAPI;
