var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=UTF-8'
  });

  res.write('<h1>Hello Travis</h1>');
  res.end();
});

server.listen(8000, function () {
  console.log('Server running at http://localhost:8000');
})
