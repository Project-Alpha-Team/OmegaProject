require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");
var app = express();
var exphbs = require("express-handlebars");
var emailRouter = require("./app/routes/emailRoutes.js");


var PORT = process.env.PORT || 8080;
app.use("/app/public", express.static(__dirname + '/app/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./app/routes/html-routes.js")(app);
app.use(emailRouter);

app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

process.on( "SIGINT", function() {
  console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
  process.exit();
})