// project stup
var path = require('path');
const express = require('express');
const fetch = require('cross-fetch');
// api data using dotenv
const dotenv = require('dotenv');
dotenv.config();

const app = express();

/* dependencies */
const bodyParser = require('body-parser');

/* middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
  //   res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});


app.post('/data', async (req, res) => {
  const fullAPI = `${process.env.API_ID}?key=${process.env.API_KEY}&lang=en&url=${req.body.url}`;
  console.log('your url', req.body.url);
  const response = await fetch(fullAPI);
  const data = await response.json();
  res.send(data);
});
