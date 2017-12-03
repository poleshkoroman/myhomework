var canvas = document.getElementsByClassName("canvas")[0];
var context = canvas.getContext("2d");
var butClear = document.getElementsByClassName("clear")[0];
var x = window.pageX, y = window.pageY, xnew, ynew, key = 1;
var lastopointX, lastopointY;

butClear.addEventListener("click", function(){
	localStorage.clear();
	context.clearRect(0, 0, canvas.width, canvas.height);
	location.reload();
})

window.onload = function(){
	// console.log(localStorage.getItem(localStorage.length - 1), localStorage.getItem(localStorage.length));
	while (localStorage.getItem(key)) {
		// if (lastopointX == x && lastopointY == y) key = key + 2;
		xnew = x;
		ynew = y;
		context.strokeStyle = "purple";
		context.beginPath();
		context.moveTo(xnew, ynew);
		x = +localStorage.getItem(key); key++;
		y = +localStorage.getItem(key); key++;
		context.lineTo(x, y);
		context.stroke();
	}
}

var createLine = function(e){
	context.strokeStyle = "purple";
	context.beginPath();
	xnew = x; localStorage.setItem(key, x); key++;
	ynew = y; localStorage.setItem(key, y);	key++;
	context.moveTo(xnew, ynew);
	context.lineTo(e.pageX, e.pageY);
	context.stroke();
	x = e.pageX; y = e.pageY;
}

canvas.addEventListener("mousedown", function(e){
	x = e.pageX; y = e.pageY; 
	canvas.addEventListener("mousemove", createLine);
})

canvas.addEventListener("mouseup", function(e){
	// lastopointX = e.pageX, lastopointY = e.pageY;
	// console.log(lastopointX, lastopointY);
	canvas.removeEventListener("mousemove", createLine);	
})



