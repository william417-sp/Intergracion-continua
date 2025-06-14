const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Bootcamp de GitHub Action en Código Facilito</h1>');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
