
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

    app.post("/api/friends", function (req, res) {
        var newUser = req.body;
        newUser.name = newUser.name.replace(/\s+/g, "").toLowerCase();
        // console.log(newUser);
        // object to save the closet match info
        var closeMatch = [];
        var previousVal = -1;
        var closeFriendMatch = "";
        var closeFriendPhoto = "";

        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            // getting scores aray from existing user nad new user
            var existingUserArray = friends[i].scores;
            var newUserArray = newUser.scores;
            // console.log(existingUserArray);
            // console.log(newUserArray);
            for (var j = 0; j < existingUserArray.length; j++) {
                // calculate difference b/w both
                diff += Math.abs(existingUserArray[j] - newUserArray[j]);
          
            }
      
            if (previousVal === -1) {
                previousVal = diff;
                closeFriendMatch = friends[i].name;
                closeFriendPhoto = friends[i].photo;
            }
            else if (previousVal > diff) {
                
                previousVal = diff;
                closeFriendMatch = friends[i].name;
                closeFriendPhoto = friends[i].photo;
            }
           
        }
        console.log(closeFriendMatch, closeFriendPhoto);
        friends.push(newUser);
        matchfriend = {
            friendMatch: closeFriendMatch,
            friendPhoto: closeFriendPhoto
        }
        res.json(matchfriend);


    });
}