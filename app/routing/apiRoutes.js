
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
        var newFriend = req.body;

        // newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
        console.log(newFriend);
        friends.push(newFriend);
        res.json(newFriend);
    });
}