const express = require('express');
const nodemailer = require('nodemailer');

function sendmail (recipientEmail, subject,message){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'emouna.ch@gmail.com',
            pass: 'lqhs irej umdd hnzj',
        },
    });

    const mailOptions = {
        from : "emouna.ch@gmail.com",
        to: recipientEmail,
        subject: subject,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info)=>{
        if (error){
            console.log("error sending email", error);
        } else {
            console.log("Email sent successfully! info:" + info.response);
        }
    });

}
module.exports = sendmail;