
function addItem(){
	var count = localStorage.length;
	var newItem = document.querySelector('[name="item"]').value;
	console.log(newItem);
	localStorage.setItem("Item" + count, newItem);
	console.log("Item: " + count + "name: " + newItem);
	var entry = document.createElement("li");
	entry.appendChild(document.createTextNode(newItem));
	var list = document.querySelector("#items");
	list.appendChild(entry);
}

function displayItems(){
	console.log("number of items: " + localStorage.length);
	console.log(localStorage.getItem("Item0"));
	if (localStorage.getItem("Item1") != null){

		for (var i = 1; i < localStorage.length; i++) {
			var entry = document.createElement("li");
			entry.appendChild(document.createTextNode(localStorage.getItem("Item" + [i])));
			var list = document.querySelector("#items");
			list.appendChild(entry);
		};
	}
}
function removeLocalStorage(){
	localStorage.removeItem("Item" + 0);
	localStorage.removeItem("Item" + 1);
	localStorage.removeItem("Item" + 2);
	localStorage.removeItem("Item" + 3);
	localStorage.removeItem("Item" + 4);
	localStorage.removeItem("Item" + 5);
	localStorage.removeItem("Item" + 6);
	localStorage.removeItem("Item" + 7);
	localStorage.removeItem("Item" + 8);
	localStorage.removeItem("Item" + 9);
	location.reload();
}
window.onload = displayItems;


