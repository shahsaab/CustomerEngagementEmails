//Create a web server for API
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const PORT = 3000;

//const api = require('./routes/api');

//Middleware
app.use(cors());
app.use(bodyParser.json());

//app.use('/api', api);

app.get('/', function (req, res) {
    res.send('Hello from server');
})


app.post('/sendEmail', async function (req, res) {
    try {
        await sendEmail(req.body);
        res.status(200).send({ "message": "Email Sent" });
    }
    catch (err) {
        res.status(500).send({ "message": err });
    }
});


async function sendEmail(HTMLbody) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'syd.adnanahmed@gmail.com',
            pass: 'oecmrqrlsoxufkky'
        }
    });
    await transporter.sendMail({
        from: '"ERA by Turf"<syd.adnanahmed@gmail.com>',
        to: HTMLbody.Recepients,
        subject: HTMLbody.Subject,
        html: HTMLbody.EmailBody
    });
}

app.listen(PORT, function () {
    console.log('Server running on localhost:' + PORT);
});
