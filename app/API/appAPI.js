import basicAppWithExpress from "./create-quick/express.js";
import userRrouter from "../users/controllers.js";
import chatbotRouter from "../../features/support-system/chatbot/router.js"
import signRouter from "../../features/admin/sign/controllers.js";
import errHendler from "./authentications-and-authorizations/error-handler.js";
import emailRrouter from "../emails/controller.js"
import requestRrouter from "../../features/support-system/requests/controller.js";
const appAPI = () => {
  const app = basicAppWithExpress();
  app.use(signRouter);
  app.use("/users", userRrouter);
  app.use("/chatbot", chatbotRouter);
  app.use("/emails", emailRrouter);
  app.use("/requests", requestRrouter);
  app.use(errHendler);
};

export default appAPI;
