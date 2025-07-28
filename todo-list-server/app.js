var express = require('express');
var app = express();

var todoItems = [
    { id: 0, value: 'React', done: false, delete: false }
];

// 全局跨域中间件
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'content-type');
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
  next();
});

app.use(express.json());   // ← 必须加
// 获取全部待办事项
app.get('/items', (req, res) => {
  res.send(todoItems);
});

// 为根路径添加路由处理
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// 为 /items 路径添加路由处理
app.get('/items', function (req, res) {
    res.json(todoItems);
});

app.post('/items', (req, res) => {
  const newItem = {
    id: Date.now(),          // 后端生成唯一 id
    value: req.body.value,
    done: false,
    delete: false
  };
  todoItems.push(newItem);
  res.json(newItem);
});

app.listen(8000, function () {
    console.log('Server running at http://127.0.0.1:8000/');
});