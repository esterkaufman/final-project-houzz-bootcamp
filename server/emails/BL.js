const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
require("dotenv").config();


// hello riki
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

const sendEmail = async (req, res) => {
    const mailOptions = req.params.mailOptions;
    try {
        transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
                console.log("Error " + err);
            }
            else {
                console.log("Email sent successfully");
            }
        })
        res.status(200);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    sendEmail,
}