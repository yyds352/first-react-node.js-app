var express = require('express');
var app = express();

var todoItems = [
    { id: 0, value: 'React', done: false, delete: false }
];

// 为根路径添加路由处理
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// 为 /items 路径添加路由处理
app.get('/items', function (req, res) {
    res.json(todoItems);
});

app.listen(8000, function () {
    console.log('Server running at http://127.0.0.1:8000/');
});