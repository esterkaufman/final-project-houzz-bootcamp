require('dotenv').config();

const bootcempAPI1 = require("./server/bootcempAPI1");
const CQExpressMomgoAPI = require("./server/CQ-API/CQEM-API");

CQExpressMomgoAPI(bootcempAPI1);
