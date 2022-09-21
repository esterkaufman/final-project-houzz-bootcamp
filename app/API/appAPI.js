import express from "express";
import basicAppWithExpress from "./create-quick/express.js";
import userRrouter from "../users/controllers.js";
import productRouter from "../product/controllers.js";
import cartRouter from "../cart/controllers.js"
// import chatbotRouter from "../../features/support-system/chatbot/router.js"
import signRouter from "../../features/admin/sign/controllers.js";
import errHendler from "./authentications-and-authorizations/error-handler.js";
import emailRouter from "../../features/support-system/emails/controller.js";
import requestRrouter from "../../features/support-system/requests/controller.js";
import chatbotRouter from '../../features/support-system/chatbot/router.js'
const appAPI = () => {
  const app = basicAppWithExpress();
  app.use(signRouter);
  app.use("/users", userRrouter);
  app.use("/products", productRouter);
  app.use("/cart", cartRouter);
  // app.use("/chatbot", chatbotRouter);
  app.use("/emails", emailRouter);
  app.use("/requests", requestRrouter);
  app.use("/chatbot",chatbotRouter)
  app.use(errHendler);

  if (process.env.NODE_ENV === 'production') {
    console.log("Using static client files!");
    app.use(express.static('client/build'));
  }
};

export default appAPI;
