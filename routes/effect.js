const express = require('express');
const { create } = require('../models/effect');
const Input = require('../models/input')

const effectRouter = new express.Router();


effectRouter.get('/effect/gallery', (req, res, next)=> {
  res.render('effect-gallery')
});

effectRouter.get('/effect/create', (req, res, next)=> {
  const id = req.params.id;
  res.render('effect-create')
});

effectRouter.post('/effect/create', (req, res, next)=> {

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

effectRouter.get('/effect/:id', (req, res, next)=> {
  const id = req.params.id;
  res.render('effect-single')
});


module.exports = effectRouter;