const express = require( 'express');
const axios = require('axios');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const cors = require('cors');
let path = require('path');
const app = express();
const port = process.env.PORT || 3001;
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());

// secure application

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/search/', async function (req, res) {
    console.log('req request :', req.query);


    let searchURL = ('https://itunes.apple.com/search?term=' + req.query.term + '&entity=' + req.query.entity);
    console.log('search term : ', searchURL);
    await axios.get(searchURL)
        .then(async (response) => {
            await res.send(response.data.results);
        }).catch(function (error) {
            console.log(error);
        });
});


app.get('/', function (req, res) {
     res.send('Hello World!');
    
        });





console.log('listening on port : ', port);
app.listen(port);
