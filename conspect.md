require; - стандартный модуль ноды

http.createServer().listen

createServer - стандартный метод
listen(3000) - метод с портом который мы будем слушать


http.createServer(function (request, responce) {
  request - то что отправляем на сервер - запрос
  responce - ответ сервера
})


// следующий шаг такой
http.createServer(function (request, responce) {
  responce.end(`Hello my first ever on Node`);
}).listen(3000);


// в брузере в нетворк - если статус 200  есть
то это нормально



// следующий шаг
    http.createServer(function (request, responce) {
      console.log(request.url);
      if (request.url == '/'){
        responce.end(`Main`);
      } else if (request.url == '/cat') {
        responce.end(`Category`);
      }
    }).listen(3000);

//  в имени урл в браузере добавляем /cat и сервер дает  другой ответ


//- добавляем распознование тегов и кириллицу

http.createServer(function (request, responce) {
  console.log(request.url);
  console.log(request.method);
  console.log(request.headers['user-agent']);

  responce.setHeader("Content-Type", "text/html; charset=utf-8;") // вот тут

  if (request.url == '/'){
     responce.end(`Main <b>Hello</b>  Привет`);
  } else if (request.url == '/cat') {
     responce.end(`Category <h2>Hello</h2>`);
  }
}).listen(3000);
