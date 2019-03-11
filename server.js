//dependencies
var express = require('express');

//setting up application
var PORT = process.env.PORT || 8080;
var app = express();

// Add middleware for parsing incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//pulling in our routes

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//have application listen
app.listen(PORT, function() {
    console.log("The application is listening on port " + PORT);
});






