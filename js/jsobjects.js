// using new Object()
person = new Object();

//add properties
person.name = "Leesa";
person.height = "5ft 9in";
//add method
person.run = function() {
	this.state = "running";
	this.speed = "5mph"
}

// use literal notation
book = {
	title : "Harry Potter",
	author : "J.K. Rowling",
	readers : ["Leesa", "Jason", "Lindsay"],
	printPage : function(page){
		console.log("page: " + page);
	}
}

//objet constructor
function shape(name) {
	this.name = name;
	this.sayName = function(){
		console.log("my name is " + this.name);
	}
}

shape1 = new shape("square");
shape1.sayName();

shape2 = new shape("triangle");
shape2.sayName();

//add methods using prototype, type of inheritance, use to have an object inherit a method after it has been defined
shape.prototype.changeName = function(name) {
	this.name = name;
}
shape1.changeName("oval");
shape1.sayName();

//using prototype on prebuilt javascript objects
// can prototype any prebuilt object that's initialized with the "new" keyword


