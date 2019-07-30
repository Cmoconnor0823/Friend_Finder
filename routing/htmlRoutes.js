var path = require("path");

// Begin the routing here
module.exports = function(app) {
// below code for each possible route for the html pages
app.get("/survey", function(req, res) {
    res.sendfile(path.join(_dirname, "../public/survey.html"));
});

//default route request to home page
app.get("*", function(req, res) {
    res.sendfile(path.join(_dirname, "../public/home.html"));
});



};