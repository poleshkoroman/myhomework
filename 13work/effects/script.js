var canvas = document.getElementsByClassName("canvas")[0];
var context = canvas.getContext("2d");
var butBW = document.getElementsByClassName("black-white")[0];
var butNegative = document.getElementsByClassName("negative")[0];
var butCrema = document.getElementsByClassName("crema")[0];
var img = document.getElementsByClassName("bmw")[0];

context.drawImage(img, 0, 0);

butBW.addEventListener("click", function(){
	this.classList.toggle("press");
	for (var pixelx = 1; pixelx < 600; pixelx++)
	for (var pixely = 1; pixely < 600; pixely++)
	{
		var sum = 0;
		sum += context.getImageData(pixelx, pixely,1,1).data[0];
		sum += context.getImageData(pixelx, pixely,1,1).data[1];
		sum += context.getImageData(pixelx, pixely,1,1).data[2];
		sum = Math.round(sum / 3);
		context.putImageData(sum, pixelx, pixely);
		
	}
	console.log("gotovo");
	butNegative.classList.remove("press");
	butCrema.classList.remove("press");
})

butNegative.addEventListener("click", function(){
	this.classList.toggle("press");
	butBW.classList.remove("press");
	butCrema.classList.remove("press");

})

butCrema.addEventListener("click", function(){
	this.classList.toggle("press");
	butNegative.classList.remove("press");
	butBW.classList.remove("press");
})