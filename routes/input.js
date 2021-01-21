const express = require('express');
const Effect = require('../models/effect');
const Input = require('../models/input')

const inputRouter = new express.Router();

inputRouter.get('/input/:id', (req, res, next)=> {
  const id = req.params.id;
  console.log(id)
  Input.findById(id)
    .then(input => {
      if (input === null) {
        const error = new Error('Input does not exist.');
        error.status = 404;
        next(error);
      } else {
        res.render('input', { input: input });
      }
    })
    .catch(error => {
      if (error.kind === 'ObjectId') {
        error.status = 404;
      }
      next(error);
    });

});


module.exports = inputRouter;