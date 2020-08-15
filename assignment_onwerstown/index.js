const express = require("express");
const app = express();
const cors = require("cors");
const mainRouter = require("./routes/programRoute");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", mainRouter);

module.exports = app;
