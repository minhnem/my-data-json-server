const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Dữ liệu mô phỏng thay vì đọc từ file db.json
const data = {
  "posts": [
    { "id": 1, "title": "Hello World" }
  ]
};

// Sử dụng bộ nhớ thay vì file
const router = jsonServer.router(data);

server.use(middlewares);
server.use(router);

// Sử dụng process.env.PORT cho Vercel
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});
