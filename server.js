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
// Search function
app.get('/search/', async function (req, res) {
    console.log('req request :', req.query);

    // generate API Search URL based on Axios get call parameters
    let searchURL = ('https://itunes.apple.com/search?term=' + req.query.term + '&entity=' + req.query.entity);
    console.log('search term : ', searchURL);
    await axios.get(searchURL)
        // asyncronousely send data to React App
        .then(async (response) => {
            await res.send(response.data.results);
            // catch Errors 
        }).catch(function (error) {
            console.log(error);
        });
});

// function to test server
app.get('/', function (req, res) {
     res.send('Hello World!');
    
        });




// server start 
console.log('listening on port : ', port);
app.listen(port);
