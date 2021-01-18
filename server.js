const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');

const app = require('./app');

console.log(process.env.PORT);
console.log(process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
  })
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch((error) => {
    console.log('Unable to connect to the database');
    console.log(error);
  });
