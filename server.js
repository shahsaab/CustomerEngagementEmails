//Create a web server for API
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

const api = require('./routes/api');

//Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/api', api);

app.get('/', function(req, res){
    res.send('Hello from server');
})

app.post('/sendEmail', function(req, res){
    console.log(req.body);
    res.status(200).send({"message": "Email Sent"});
});

app.listen(PORT, function(){
    console.log('Server running on localhost:' + PORT);
});

// write a post method to send email
