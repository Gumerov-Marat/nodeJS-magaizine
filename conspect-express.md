// 1) после установки пакета

const express = require('express');
let app = express();

//добавляем в апп сам сервер

//2) Добавляем листен

app.listen(3000, function () {
  console.log('node express work on 3000')
});


//3) к приложению апп через метод гет обращаемся 

app.get('/', function (req, res) {
  res.end('hello');
});

// 4)

    app.get('/', function (req, res) {
      res.end('hello');
    });

    app.get('/cat', function (req, res) {
      res.end('cat');
    });

// 5) 

app.use(express.static('public')); -  папка где хранится статика

// 6) создали структуру в виде каталогов и файла индекс с шаблоном

// 7) 

app.get('/', function (req, res) {
  console.log('load /');
  res.render('index.html');
});



// 8)

app.get('/', function (req, res) {
  console.log('load /');
  res.render('index.html');
});