
import { createMongooseModel } from "../../../../app/API/create-quick/mongo.js";

const EmailModel = createMongooseModel('Email', {
    // to: {
    //   type: String,
    //   required: [true, "Please provide an Email!"],
    // },
    emailNumber: {
      type: Number,
      required: [true, "Please provide an Email!"],
    },
    subject: {
      type: String,
      require: [true, "Please provide a password!"],
    },
    text: {
      type: String,
      require: [true, "mast have role"],
    },
    
  })

export default EmailModel;