
var path = require("path");

module.exports = function (app,friends) {
    // Displays all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });


    // =============================================================
    // Create New Friend - takes in JSON input
    // =============================================================
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        newFriend.name = newcharacter.name.replace(/\s+/g, "").toLowerCase();
        console.log(newFriend);
        friends.push(newFriend);
        res.json(newFriend);
    });
}