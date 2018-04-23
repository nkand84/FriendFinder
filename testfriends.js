
var path = require("path");
var bodyParser = require("body-parser");
module.exports = function (app, friends) {
    // Sets up the Express app to handle data parsing
    // =============================================================
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Displays all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });


    // =============================================================
    // Create New Friend - takes in JSON input
    // =============================================================
    var resultArray = [];
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
        // console.log(newFriend);

        // res.json(newFriend);
        console.log(parseInt(newFriend.scores));

        // dict to save the closet match info
        var closetMatch = [];
        var previousVal = -1;
        var closedFriendMatch = "";
        var closedFriendURL = "";

        for (var i = 0; i < friends.length; i++) {
            // console.log(friends[i].scores);
            // console.log(newFriend.scores);
            var diff = 0;
            var existingUserArray = friends[i].scores;
            var newUserArray = newFriend.scores;

            console.log(friends[i].name);
            console.log(existingUserArray);
            console.log(newUserArray);

            for (var j = 0; j < existingUserArray.length; j++) {
                diff += Math.abs(existingUserArray[j] - newUserArray[j]);
                console.log(" here: " + j + " is " + diff);
            }
            /* closetMatch.push({
                name: friends[i].name,
                difference: diff,
            }) */
            if (previousVal === -1) {
                previousVal = diff;
                closedFriendMatch = friends[i].name;
                closedFriendURL = friends[i].photo;
            }
            else if (previousVal > diff) {
                // if previous value exists then compare prev value with the current value and 
                // if the current value is smaller than prev value then assign current value to prev value
                previousVal = diff;
                closedFriendMatch = friends[i].name;
                closedFriendURL = friends[i].photo;
            }

            console.log("totaldiff per friend:  " + diff);

        }

        //console.log(closetMatch);
        /* for (var i=0;i<closetMatch.length;i++) {
            //if there is no previous value then pushing current value to previousval
            if (previousVal === -1) {
                previousVal         = closetMatch[i].difference;
                closedFriendMatch   = closetMatch[i].name;
            }
            else if (previousVal > closetMatch[i].difference) {
                // if previous value exists then compare prev value with the current value and 
                // if the current value is smaller than prev value then assign current value to prev value
                previousVal         = closetMatch[i].difference;
                closedFriendMatch   = closetMatch[i].name;
            }
            console.log(previousVal);
        } */

        console.log(closedFriendMatch, closedFriendURL);
        friends.push(newFriend);
        matchfriend = {
            friendMatch: closedFriendMatch,
            friendURL: closedFriendURL
        }
        res.json(matchfriend);


    });
}