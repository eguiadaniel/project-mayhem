const express = require('express');

const router = new express.Router();

router.get('/effect/gallery', (req, res, next)=> {
  res.render('effect-gallery')
});

router.get('/effect/create', (req, res, next)=> {
  const id = req.params.id;
  res.render('effect-create')
});

router.post('/effect/create', (req, res, next)=> {
  console.log(req.body);
  res.redirect('/');
});

router.get('/effect/:id', (req, res, next)=> {
  const id = req.params.id;
  res.render('effect-single')
});


module.exports = router;