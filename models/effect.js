const mongoose = require('mongoose');

const effectSchema = new mongoose.Schema(
  {
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image_sample: {
    type: String,
    required: false
  },
 video_sample: {
  type: String,
  required: true
 }  
   
}, 

{
  timestamps: {
    createdAt: 'creationDate',
    updatedAt: 'updateDate'
  }
}
);

const Effect = mongoose.model('Effect', effectSchema);

module.exports = Effect;