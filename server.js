const express = require("express");
const app = express();
const server = require("http").Server(app);
var nodemailer=require('nodemailer');
app.use(express.json())

const transporter=nodemailer.createTransport({
    port:465,
    host:"smtp.gmail.com",
    auth:{
        user:'tarabhatia06@gmail.com',
        pass:'xtixoxfocvxfqjpf',
    },
    secure:true,
});

server.listen(process.env.PORT || 3030);