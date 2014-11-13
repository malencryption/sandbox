var peopleString = localStorage["people"];
console.log("peopleString: " + peopleString);
if (peopleString == undefined){
	var peopleArray = [];
}
else {
	var peopleArray = JSON.parse(peopleString);
}
function addThing(){
	// var count = localStorage.length;
	var newThing = document.querySelector('[name="thing"]').value;
	console.log(newThing);
	peopleArray.push(newThing);
	console.log(peopleArray);
	// localStorage.setItem("Item" + count, newItem);
	// console.log("Item: " + count + "name: " + newItem);
	var entry = document.createElement("li");
	entry.appendChild(document.createTextNode(newThing));
	var list = document.querySelector("#things");
	list.appendChild(entry);
	localStorage["people"] = JSON.stringify(peopleArray);
}

function displayThings(){
	console.log("number of things: " + peopleArray.length);

	for (var i = 0; i < peopleArray.length; i++) {
		var entry = document.createElement("li");
		entry.appendChild(document.createTextNode(peopleArray[i]));
		var list = document.querySelector("#things");
		list.appendChild(entry);
	}
}
function removeLocalStorage(){
	localStorage.removeItem("people"); 
	location.reload();
}
window.onload = displayThings;


