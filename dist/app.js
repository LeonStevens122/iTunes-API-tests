'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const axios = require('axios');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
let path = require('path');

const app = (0, _express2.default)();
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(_express2.default.static(path.join(__dirname, 'client/build')));

app.use(cors());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    axios.get('https://itunes.apple.com/search?term=jack+johnson').then(response => {
        res.send('Listening to port : ' + port);

        console.log('Config :  --------   -------', response.config);
    });
});

axios.get('https://api.github.com/users/mapbox').then(response => {
   
    console.log('Config of second axios : ', response.config);
});
console.log('Listening to port: ', port);
app.listen(port);