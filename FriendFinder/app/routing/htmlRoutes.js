var path = require('path');


module.exports = function (app) {

    //redirect on the root takes user to /home
    app.get("/", function (req, res) {
        return res.redirect('/home');
    });
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //our survey path
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};
