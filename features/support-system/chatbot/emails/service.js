//const { log } = require('console');
//const express = require('express')
import { info } from 'console';
import { createRequire } from 'module';
import EmailModel from './model.js';
const require = createRequire(import.meta.url);
const nodemailer = require('nodemailer');
require("dotenv").config();

const createEmail = async (emailContent, res) => {
   //return numbers of documents in collection
   async function countOfEmails() {
    return await EmailModel.countDocuments();
   }
    return new Promise(async (resolve, reject) => {
        try
        {
            const newEmail = new EmailModel({
                emailNumber: (await countOfEmails())+1,
                subject: emailContent.subject, 
                text: emailContent.text
            });
            newEmail.save();
            resolve(newEmail);
            res.status(200);
            res.json("the email inserted successfully")
        }catch (error)
        {
          reject(error);
          res.status(500);
          res.json("the email inserted failed");
        } 
      });
}

const sendEmail = async (mailOptions, res) => {
    console.log("i sendEmail, mailop.."+ mailOptions.to);
    // need run one time, but we dont know do this.
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
    });

    try {
        transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
                console.log("Error " + err);
            }
            else {
                console.log("Email sent successfully");
                res.json("Email sent successfully");
            }
        })
        
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const sendEmailById = async(id,to, res)=>
{
    EmailModel.findOne({emailNumber: id}, (err, result)=>{
        if(err)
        {
            res.status(400);
            res.json("this id email invalid");
            console.log("not valid email number!");
        }else
        {
            const mailOptions =
            {
                to: to,
                subject: result.subject,
                text: result.text
            }
            sendEmail(mailOptions,res);
        }
    });
}



//module.exports = sendEmail;
    // sendEmail2
export default {sendEmail, sendEmailById, createEmail};