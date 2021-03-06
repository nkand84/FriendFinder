// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static('app/public'));
// =============================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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



