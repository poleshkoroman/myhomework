var canvas = document.getElementsByClassName("canvas")[0];
var context = canvas.getContext("2d");
var x = window.pageX, y = window.pageY, xnew, ynew;

canvas.addEventListener("mousemove", function(e){
	context.strokeStyle = "purple";
	context.beginPath();
	xnew = x; ynew = y;
	context.moveTo(xnew, ynew);
	context.lineTo(e.pageX, e.pageY);
	context.stroke();
	x = e.pageX; y = e.pageY;
});

