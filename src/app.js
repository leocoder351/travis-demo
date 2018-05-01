var express = require('express');
var app = express();

app.use('/', function (req, res) {
  res.send('Hello Travis CI');
});

app.listen(3000, function () {
  console.log('Server running at http://localhost:3000');
});
