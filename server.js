const express = require('express');
const app = express();
const date = require('./middleware/date');
const sendEmail = require("./email-sender"); 
const bodyParser = require('body-parser');
const port = 4000;

app.use(bodyParser.json());


app.get('/get',(req,res)=> {
res.send('your first express project');
})

app.use(express.static(__dirname + '/public'));

app.get('/home',date,(req,res) => {
    res.sendFile(__dirname + '/public/home.html');
})

app.get('/contactus',date,(req,res) => {
    res.sendFile(__dirname + '/public/contactus.html');
})

app.get('/services',date,(req,res) => {
    res.sendFile(__dirname + '/public/services.html');
})

app.post('/send-email', date, (req, res) => {
    const { recipientEmail, subject, message } = req.body;

    sendEmail(recipientEmail, subject, message);

    res.json({ status: 'success', message: 'Email sent successfully!' });
});


app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`You are connected to the server on port ${port}`);
    }
})




