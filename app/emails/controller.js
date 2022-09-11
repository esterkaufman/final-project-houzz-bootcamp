
//const router = require("express").Router();
import express from "express";
const router = express.Router();
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
//import { BL } from "./BL"
//const BL = require('../../features/support-system/chatbot/emails/BL.js');
// const productsBL = require('../BL/productsBL');
import service from "../../features/support-system/chatbot/emails/service.js"
//import EmailModel from "../../features/support-system/chatbot/emails/model.js";
const nodemailer = require('nodemailer');
require("dotenv").config();


router.post('/', function (req, res) {
    const mailOptions =
    {
        to: req.body.to,
        subject: req.body.subject,
        //must be text
        text: req.body.text
    }
    service.sendEmail(mailOptions,res);
});

router.post('/createEmail', function (req, res) {
    const emailContent =
    {
        subject: req.body.subject,
        text: req.body.text
    }
    service.createEmail(emailContent,res);
});

router.post('/:id', function (req, res) {
    console.log('i sendemailbyid'); 
    const id = req.params.id;
    const to  = req.body.to;
    console.log("id: " + id);
    console.log("to: " + to);
    service.sendEmailById(id,to, res);
});


//module.exports = router;
export default router;