const mongoose = require('mongoose');

const inputSchema = new mongoose.Schema({
  text1: {
    type: String,
    required: true
  },
  text2: {
    type: String,
    required: true
  },
  logo_url: {
    type: String,
    required: false
  },
 effect_id: {
  type: String,
  required: true
 },
 creationDate: {
   type: Date,
 }
// user or creator
   
}, {
  timestamps: {
    createdAt: 'creationDate',
    updatedAt: 'updateDate'
  }
});

const Input = mongoose.model('Input', inputSchema);

module.exports = Input;