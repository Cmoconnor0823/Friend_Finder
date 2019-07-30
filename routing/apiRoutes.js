// First declare a variable for the friends array data
var friendsArr = require("../app/data/friends");

// Begin the routing here
module.exports = function(app) {
// now the get request for all friend data
app.get("/api/friends", function(req, res) {
    res.json(friendsArr);
});

//Api Post request
//This code will take in the survey data and compare it to the 
//data in the friends array
app.post("/api/friends", function(req, res) {
    friendsArr.push(req.body);
    //var grabbing current user's score
    var friendScore = req.body.scores;
    //closest matching frined will have a score closest to 0
    var matchFriend = 0;
    //this sets the worst possible score
    var lowestDiff = 50;

    //Now call in the data from the Friends array and run the score 
    // through each friend and then compare scores
    for (var i = 0; i < (friendsArr.length -1); i++) {
        //create a var to compare score
        var compareScore = friendsArr[i].scores;
        var totalDiff = 0;

        //Now compare the score for each friend in the data
        for (var j = 0; j < friendScore.length; j++) {
            //And now do the math to compare each question's score between the friends
            // use absolute value of current score - the absolute value of compareScore
            var eachDiff = Math.abs(parseInt(friendScore[j]) - parseInt(compareScore[j]));
            //now add the total of each diff to the total diff to get the final friend score
            totalDiff = totalDiff + eachDiff;
        }
        // and set a stop/ best friend 
        if (totalDiff < lowestDiff) {
            lowestDiff = totalDiff;
            matchFriend = [i];
        }
    }

    res.send(friendsArr[matchFriend]);
});
};