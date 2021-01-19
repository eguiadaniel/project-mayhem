const mongoose = require('mongoose');

const outputSchema = new mongoose.Schema({
  text_1: {
    type: String,
    required: true
  },
  text_2: {
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
const Output = mongoose.model('Output', outputSchema);

module.exports = Output;