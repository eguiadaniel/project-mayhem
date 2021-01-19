const express = require('express');

const router = new express.Router();

router.get('/effect/gallery', (req, res, next)=> {
  res.render('effect-gallery')
});

router.get('/effect/:id', (req, res, next)=> {
  const id = req.params.id;
  res.render('effect-single')
});

router.get('/effect/:id/create', (req, res, next)=> {
  const id = req.params.id;
  res.render('effect-create')
});

module.exports = router;