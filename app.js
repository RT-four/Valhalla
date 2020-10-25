const express = require("express");

var contentful = require('contentful');
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();


app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


app.get("/", function (req, res) {
  res.render("main", {});
});

app.get("/politics", function (req, res) {
  res.render("politics", {});
});

app.get("/customer", function (req, res) {
  res.render("customer", {});
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000.");
});