const router = require("express").Router();
//import { BL } from "./BL"
const BL = require("./BL");
router.post('/', function (req, res) {
    BL.sendEmail(req);
});