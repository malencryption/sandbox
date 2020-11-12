var numOfPlayers;
var playersString = localStorage["players"];
console.log("playersString: " + playersString);
if (playersString == undefined){
	var playersArray = [];
	numOfPlayers = 0;
	//Add inital player input
	// addInputPlayer();
	}
	else {
	var playersArray = JSON.parse(playersString);
	numOfPlayers = playersArray.length;
	}
function addInputPlayer() {
	//Add div, class, id
	var playerDiv = document.createElement("div");
	playerDiv.setAttribute("class", "player");
	playerDiv.setAttribute("id", "p" + (numOfPlayers+1));
	
	//add player avatar
	var avatar = document.createElement("img");
	avatar.setAttribute("src", "person.png");
	avatar.setAttribute("class", "ppl");

	//add new player name input 
	var newPlayer = document.createElement("input");
	newPlayer.setAttribute("type", "text");
	newPlayer.setAttribute("class", "pName");
	newPlayer.setAttribute("name", "name");
	
	//create button to add new player
	var addButton = document.createElement("img");
	addButton.setAttribute("class", "add");
	addButton.setAttribute("onclick", "addPlayer()");
	addButton.setAttribute("src", "add_person.png");

	//Add avatar, input, and add button to div
	playerDiv.appendChild(avatar); 
	playerDiv.appendChild(newPlayer);
	playerDiv.appendChild(addButton);

	//Add input player div to players div
	var players = document.querySelector("#players");
	players.appendChild(playerDiv);
}
function addPlayer() {
	//increase number of players
	numOfPlayers++;
	
	//Get input player name
	var nameInput = document.querySelector(".pName");
	var name = nameInput.value;
	// console.log("Name: " + name);
	// console.log(nameInput);

	//Add player to local storage array
	playersArray.push(name);
	localStorage["players"] = JSON.stringify(playersArray);

	//Add name text node
	var playerName = document.createElement("p");
	// playerName.setAttribute("class", "pName");
	var entry = document.createTextNode(name);
	playerName.appendChild(entry);
	
	//Remove add player button from previous player
	// var currPlayer = document.querySelector(".player");
	var prevPlayerDiv = document.querySelector("#p"+ (numOfPlayers));
	console.log(prevPlayerDiv);
	prevPlayerDiv.removeChild(document.querySelector(".add"));

	//Remove input, add name to previous player
	prevPlayerDiv.removeChild(nameInput);
	prevPlayerDiv.appendChild(playerName);

	addPlayerToRound(name, numOfPlayers);

	//add input player div
	addInputPlayer();
}

function addPlayerToRound(name, playerNumber) {
	//Add player name to rounds (sPlayers div)
	//Create new p with player name from input
	var roundPlayer = document.createElement("p");
	var rndPname = document.createTextNode(name);
	roundPlayer.appendChild(rndPname);

	roundPlayer.setAttribute("id", "sp" + playerNumber);
	roundPlayer.setAttribute("class", "line-up");
	//Add to round 
	var sPlayers = document.querySelector("#sPlayers");
	sPlayers.appendChild(roundPlayer);
}

function displayPlayers(){
	// var numOfPlayers;
	
	// numberOfPlayers = playersArray.length;

	console.log("number of players: " + numOfPlayers);

	for (var i = 0; i < playersArray.length; i++) {
		var entry = document.createElement("div");
		entry.setAttribute("class","player");
		entry.setAttribute("id","p" +(i+1));
		
		//player avatar
		var avatar = document.createElement("img");
		avatar.setAttribute("src", "person.png");
		avatar.setAttribute("class", "ppl");

		//player name
		var playerName = document.createElement("p");
		var name = playersArray[i];
		playerName.appendChild(document.createTextNode(name));

		//Add avatar and player name to div
		entry.appendChild(avatar);
		entry.appendChild(playerName);

		//Add new player div to players
		var players = document.querySelector("#players");
		players.appendChild(entry);

		addPlayerToRound(name, i);
	}
	//Add input player div
	addInputPlayer();
}
function removeLocalStorage(){
	localStorage.removeItem("players"); 
	location.reload();
}
function startGame() {
	
}
var won = parseInt(document.querySelector('#won').value);
var bet = parseInt(document.querySelector('#bet').value);
var bonus = parseInt(document.querySelector('#bonus').value);

function updateScore(){
	var rndTotal = 0;
	console.log("Bet: " + bet);
	console.log("Won: " + won);
	console.log("Bonus: " + bonus);
	if (won === bet) {
		console.log("Bet met");
		rndTotal += 10;
		console.log(rndTotal);
	}
	else {
		console.log("Bet missed");
	}
	rndTotal += won;
	rndTotal += bonus;
	console.log("Total: " + rndTotal);
	document.querySelector('#roundTotal').innerHTML = "Total: " + rndTotal;
}
function updateBet(newbet) {
	bet = parseInt(newbet);
	document.querySelector('#bet-value').value = bet;
	updateScore();
}
function updateWon(newwon) {
	won = parseInt(newwon);
	document.querySelector('#won-value').value = won;
	updateScore();
}
function updateBonus(newbonus) {
	bonus = parseInt(newbonus);
	document.querySelector('#bonus-value').value = bonus;
	updateScore();
}

window.onload = displayPlayers;