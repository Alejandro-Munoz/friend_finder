const path = require ("path");
const friends = require("./friends.js");

module.exports = function(app){
	app.get("/api/friends",function(req, res){
		res.json(friends);
	});

	function getCompatible(currentResults){
		let mostCompatible = {};
		var prevTotal = 51;
		var friendTotal = 0;

		for(var i = 0; i < friends.length; i++){
			var friendScores = friends[i].scores;

			//compare scores
			for(var j = 0; j < friendScores.length; j++){
				friendTotal += Math.abs(friendScores[j] - currentResults[j]);

			}
			if(friendTotal < prevTotal){
				prevTotal = friendTotal;
				mostCompatible = friends[i];
			}
		}

		return mostCompatible;
	}
	app.post("/api/friends", function(req, res){
		//insert new friend
		friends.push(req.body);

		let arrResults = req.body.scores.map((el)=>{return parseInt(el)});
		let compatibility = getCompatible(arrResults);
		res.send(compatibility);

	});

}