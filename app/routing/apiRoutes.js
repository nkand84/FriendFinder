
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
        
        
        
        for (var i = 0; i < friends.length; i++) {
            // console.log(friends[i].scores);
            // console.log(newFriend.scores);
            var diff = 0;
            var existingUserArray = friends[i].scores;
            var newUserArray = newFriend.scores;

            console.log(existingUserArray);
            console.log(newUserArray);

            for (var j=0;j<existingUserArray.length;j++) {
                diff += Math.abs(existingUserArray[j] - newUserArray[j]);
                console.log(" here: "+ j + " is "+ diff);
            }
            console.log("totaldiff per friend:  " + diff)
            
        }
        
        friends.push(newFriend);

        // pushed score array of the new user into resultArray


        // handle the compatibility logic
    });
}