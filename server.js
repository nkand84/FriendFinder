// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var app = express();
app.use(express.static('app/public'));

// =============================================================
var friends = require("./app/data/friends.js")(app);
var apiRoutes = require("./app/routing/apiRoutes.js")(app,friends);
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);



var PORT = process.env.PORT || 3000;

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



