function player (name) {
	this.name=name;
	var totalScore = 0;
	roundScore;
	roundBet;
}
function addPlayer() {
	var list = document.querySelector('#pList');
	console.log(list);
	var newName = document.querySelector('input[name="name"]').value;
	var entry = document.createElement('li');
	var removeLink = '<span onclick="removePlayer()">- </span>'
	entry.appendChild(document.createTextNode(removeLink + newName));
	list.appendChild(entry);
}
function removePlayer(liId){
	lid = '#' + liId
	element = document.querySelector(lid);
	element.parentNode.removeChild(element);
}
var game = {
	playerList : [],
	addPlayer : function(name) {
		// name = querySelector("name");
		console.log("hello " + name);
		player = new player(name);
		playerList[playerList.length] = player;
		querySelector("pList").innerHTML += name;
	}
}
// var game = {playerList: 
// 	{player: 
// 		{name:
// 			score:
// 		}
// 	}
// }
// var players = [
// {"name":"Leesa", "score":"0"}
// {"name":"Jesse", "score":"0"}
// ];


var text = '{"playerList": [ {"name" : "Leesa", "score" : "0"}, {"name" : "Jesse", "score" : "0"} ]}';

// var text = '{"name" : "Leesa", "score" : "0"}';

var game1 = JSON.parse(text); printNames(game1);

function printNames(game){
	for (i = 0; i < game.playerList.length; i++){
		document.querySelector("#pList").innerHTML += 'Name: ' + game.playerList[i].name;	
	}
}