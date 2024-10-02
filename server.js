const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // Kết nối với file db.json
const middlewares = jsonServer.defaults();    // Các middleware mặc định

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 3000, () => {  // Sử dụng process.env.PORT cho Vercel
  console.log('JSON Server is running');
});
