const http = require ('http');

//http.createServer().listen(3000);
http.createServer(function (request, responce) {
  console.log(request.url);
  console.log(request.method);
  console.log(request.headers['user-agent']);

  responce.setHeader("Content-Type", "text/html; charset=utf-8;")

  if (request.url == '/'){
     responce.end(`Main <b>Hello</b>  Привет`);
  } else if (request.url == '/cat') {
     responce.end(`Category <h2>Hello</h2>`);
  }
}).listen(3000);