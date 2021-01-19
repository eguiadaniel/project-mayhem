const express = require('express');
const { create } = require('../models/effect');
const Input = require('../models/input')

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

  const data = req.body;

  Input.create({
    text1: data.text1,
    text2: data.text2,
    logo_url: data.logo_url || undefined,
    effect_id: 'test'
  })
  .then((input)=>{
    res.redirect(`/input/${input._id}`);

  })
  .catch((error)=>{
    res.render('error')
  })
});

router.get('/effect/:id', (req, res, next)=> {
  const id = req.params.id;
  res.render('effect-single')
});


module.exports = router;