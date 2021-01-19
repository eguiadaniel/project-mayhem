const express = require('express');
const path = require('path');

const effectsRouter = require('./routers/effect');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Make express parse request bodies
app.use(express.urlencoded({ extended: true }));

//Access static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.use(effectsRouter);

app.get('/video/:id', (req, res) => {
  res.render('video-output');
});

module.exports = app;
