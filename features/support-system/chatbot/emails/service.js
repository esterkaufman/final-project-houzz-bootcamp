//const { log } = require('console');
//const express = require('express')
import { info } from 'console';
import { createRequire } from 'module';
import EmailModel from './model.js';
const require = createRequire(import.meta.url);
const nodemailer = require('nodemailer');
require("dotenv").config();

const createEmail = async (emailContent) => {
   //return numbers of documents in collection
    const x = EmailModel.aggregate();
    console.log("x: ", x);
    return new Promise(async (resolve, reject) => {
        try
        {
            const newEmail = new EmailModel({
            emailNumber: x,
            subject: emailContent.subject, 
            text: emailContent.text
            });
            newEmail.save();
            resolve(newEmail);
        }catch (error)
        {
          reject(error);
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

const sendEmailById = async(id,to, res)=>{
    console.log("id: "+id);
    const findEmail = EmailModel.findById({_id:'631dc39c9073d596190c2e93'});
    console.log("findEmail.text: ", findEmail.text);
    if(findEmail)
    {
        const mailOptions =
        {
            to: to,
            subject: findEmail.subject,
            //must be text
            text: findEmail.text
        }
        sendEmail(mailOptions,res);
    }else
    {
        res.status(400);
        res.json("this id email invalid");
    }
    
}



//module.exports = sendEmail;
    // sendEmail2
export default {sendEmail, sendEmailById, createEmail};