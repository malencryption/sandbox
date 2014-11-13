function changeWidth(piece){
	var beginWidth = 100;
	if(!piece.width) {
		var newWidth = beginWidth + 100 + 'px';
	}
	else {
	var newWidth;
}
	// var wi = piece.width;
	// console.log(piece.width);
	// var newWi = (parseInt(wi.replace(/px/,""))+00)+"px";
	// console.log(newWi);
	// piece.width = newWi;
	
	piece.width ='700px';
}
function easeTransition(){
	document.querySelector("#hi").style.transition = '2s ease';
}
function easeInTransition(){
	document.querySelector("#hi").style.transition = '2s ease-in';
}
function easeOutTransition(){
	document.querySelector("#hi").style.transition = '2s ease-out';
}
function easeInOutTransition(){
	document.querySelector("#hi").style.transition = '2s ease-in-out';
}
function refreshPage(){
	location.reload();
}
function delayTransition(){
	document.querySelector("#hi").style.transitionDelay = '2s';
}
function changeBackground(){
	var color = document.querySelector("#hi").style.background;
	console.log(document.querySelector("#hi").style.background);
	console.log("color: " + color);
	if (color === "red" || color == ""){
		document.querySelector("#hi").style.background = 'yellow';
	}
	else {
		document.querySelector("#hi").style.background = 'red';
	}
	
}