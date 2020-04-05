const express = require( 'express');
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

app.get('/search/:query', function(req, res) {
  //  res.send('Hello World changed');
    axios.get('https://itunes.apple.com/search?term=jack+johnson')
        .then((response) => {
            res.send(response.data);
           
            console.log('Config :  --------   -------', response.config);
        });


});


app.listen(port);
