// Enter requirements / dependencies here

var express = require("express");
var path = require("path");

var app = express();

// this sets the initial port.. should I be setting this or heroku?
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing--taken from in class assingment week 13 day 3 act 16  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// require the route files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// add in the port listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });