require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const compression = require('compression');
app.use(compression());

app.use(express.static(path.join(__dirname, "./public/dist")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

/////////////////// REACT ROUTER PATHS ///////////////////
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/index.html'));
});
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

/////////////////// SERVER PATHS  ///////////////////

app.get('/example', (req, res) => {
  axios.get(`${process.env.API}/example`)
  .then((data) => {
    res.status(200).send(data.data)
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})

// server listens on designated port
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
});