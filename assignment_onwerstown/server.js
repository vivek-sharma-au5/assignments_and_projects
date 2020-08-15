const http = require("http");
const app = require("./index");
let server = http.createServer(app);
const dotenv = require("dotenv");
dotenv.config();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.listen(6060, function () {
  console.log("Server started at 6060");
});
