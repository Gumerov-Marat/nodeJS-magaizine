const http = require ('http');
var fs = require('fs');

//http.createServer().listen(3000);
http.createServer(function (request, responce) {
  console.log(request.url);
  console.log(request.method);
  console.log(request.headers['user-agent']);

  responce.setHeader("Content-Type", "text/html; charset=utf-8;")

  if (request.url == '/'){
     responce.end('Main <b>Hello</b>  Привет');
  } else if (request.url == '/dat') {
    let myFile = fs.readFileSync('page_1.dat');
    console.log(myFile);
     responce.end(myFile);
  }
}).listen(3000);