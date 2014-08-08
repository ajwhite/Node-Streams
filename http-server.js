var http = require('http'),
    through = require('through'),
    server;

server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(function (buf) {
      this.push(buf.toString().toUpperCase());
    }))
    .pipe(res);
  }
});

server.listen(process.argv[2]);
