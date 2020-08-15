const http = require("http");
const app = require("./index");
let server = http.createServer(app);

server.listen(6060, function () {
  console.log("Server started at 6060");
});
