//modelObjectParameters: name!:String model!:Object routers?(defalt: all): String[] controlers?:ControllerFunction[]

const itemsModel = require("./items/model");
const usersModel = require("./users/model");

//APIOBjectParameters: name?!:String models!:model appPort?(defulte: 8080):String dbURL!:String
const bootcempAPI1 = {
  name: "api",
  models: [itemsModel,usersModel],
  appPort: "8080",
  dbURL: process.env.DB_URL
};

module.exports =  bootcempAPI1;
