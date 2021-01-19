const express = require('express');
const path = require('path');

const effectsRouter = require('./routers/effect');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home');
});

app.use(effectsRouter);

app.get('/video/:id', (req, res) => {
  res.render('video-output');
});

module.exports = app;
