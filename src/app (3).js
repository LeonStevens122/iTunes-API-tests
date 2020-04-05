import express from 'express';
const axios = require('axios');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const cors = require('cors');
let path = require('path');

const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()


app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors())
app.use(helmet())
// secure application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.get('/', function(req, res) {
  //  res.send('Hello World changed');
    axios.get('https://itunes.apple.com/search?term=jack+johnson')
        .then((response) => {
            res.send(response.data);
            //console.log('Data : ', response.data);
            //console.log(response.status);
            //console.log(response.statusText);
            //console.log(response.headers);
            console.log('Config :  --------   -------', response.config);
        });


});

axios.get('https://api.github.com/users/mapbox')
    .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    });

app.listen(port);
