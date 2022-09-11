import basicAppWithExpress from "./create-quick/express.js";
import userRrouter from "../users/controllers.js";
import signRouter from "../../features/admin/sign/controllers.js";
import errHendler from "./authentications-and-authorizations/error-handler.js";
import emailRrouter from "../emails/controller.js"

const appAPI = () => {
  const app = basicAppWithExpress();
  app.use(signRouter);
  app.use("/users", userRrouter);
  app.use("/emails", emailRrouter);
  app.use(errHendler);
};

export default appAPI;
