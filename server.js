// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);
var friends = require("./app/data/friends.js")(app);
var apiRoutes = require("./app/routing/apiRoutes.js")(app,friends);

// =============================================================
// Sets up the Express App
// =============================================================
// var app = express();
var PORT = process.env.PORT || 3000;
// =============================================================
// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// =============================================================
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



