// First declare a variable for the friends array data
var friendsArr = require("../data/friends");

// Begin the routing here
module.exports = function(app) {
// now the get request for all friend data
app.get("/api/friends", function(req, res) {
    res.json(friendsArr);
})


}