var express = require('express');
var app = express();
const headlineRoutes = require('./routes/headlines-routes');
var port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept,Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  next();
});

app.use('/headlines', headlineRoutes);

app.listen(port, () => {
  console.log('Server running on port 5000');
});
