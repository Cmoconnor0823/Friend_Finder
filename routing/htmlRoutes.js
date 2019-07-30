var path = require("path");

// Begin the routing here
module.exports = function(app) {
// below code for each possible route for the html pages
app.get("/home", function(req, res) {
    res.sendfile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendfile(path.join(__dirname, "../public/survey.html"));
});

//default route request to home page
app.get("*", function(req, res) {
    res.sendfile(path.join(__dirname, "../public/home.html"));
});

app.use(function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
  });

};