const express = require('express');
const { create } = require('../models/effect');
const fs = require('fs');
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
        let fileContent = input.text1;

  }).then(() =>{
    fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
      if (err) throw err;
    });

  }).then(() => {
    fs.writeFile('/tmp/a/apple', fileContent, (error) => {
      if (error) {
        console.log("An error ocurred creating your file: ", error);
      } else {
        console.log("File is created successfully.");
      }
    });

  }).then(() =>{
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

 
// include node fs module

 
// writeFile function with filename, content and callback function
