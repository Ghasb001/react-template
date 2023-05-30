require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const axios = require('axios');

app.use(express.static(path.join(__dirname, "./public/dist")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/index.html'));
});



app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/bundle.js'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/index.html'));
});


// app.get('/', (req, res) => {
//   res.sendStatus(200)
// })

// server listens on designated port
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
});
