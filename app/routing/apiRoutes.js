var path = require('path');

var friendsList = require('../data/friends')

module.exports = function (app) {

    //will have to make the home paths catch-all
    app.get("/api/friends", function (req, res) {
        res.json(friendsList)
    });
    
    app.post('/api/friends', function (req, res) {
        //create a variable to store request information
        var newFriend = req.body;

        //set match variables
        var matchName = "";
        var matchPhoto = "";


        //set up a difference value to start
        var startDifference = 1000;

        //find the best match by checking each friend (j)
        for (j = 0; j < friendsList.length; j++) {
            var friendDifference = 0;
            for (i = 0; i < 10; i++) {

                //add the difference for each question 
                friendDifference += Math.abs(newFriend.scores[i] - friendsList[j].scores[i])
            }
            console.log("My stats: " + newFriend.scores);
            console.log(friendsList[j].name + " scores: " + friendsList[j].scores);
            console.log("Difference: " + friendDifference)
            if (friendDifference < startDifference) {

                //assign chosen values to result
                matchName = friendsList[j].name;
                matchPhoto = friendsList[j].photo;

                //assign our new difference value to be the startdiff
                startDifference = friendDifference;
            }
        }
        console.log("best friend: " +matchName)

		//Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchPhoto: matchPhoto});

        //add to the image
        friendsList.push(newFriend)
    })
};