var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=UTF-8'
  });

  res.write('<h1>Hello Travis</h1>');
  res.end();
});

server.listen(3000, '172.31.222.64')
console.log('Server running at http://47.104.66.25:3000');
