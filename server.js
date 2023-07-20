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

app.get('/', function(req, res){
    res.send('Hello from server');
})

app.post('/sendEmail', async function(req, res){
    console.log(req.body);
    await sendEmail();

    res.status(200).send({"message": "Email Sent"});
});

async function sendEmail(){
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'syd.adnanahmed@gmail.com',
            pass: 'oecmrqrlsoxufkky'
        }
    });
    await transporter.sendMail({
        from: 'syd.adnanahmed@gmail.com',
        to: 'syed.adnan@turf.pk;syed.adnanahmed@live.com',
        subject: 'Test Email Subject',
        html: '<h1>Example HTML Message Body</h1>'
    });
}

app.listen(PORT, function(){
    console.log('Server running on localhost:' + PORT);
});
