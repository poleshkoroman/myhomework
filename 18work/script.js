﻿var canvas = document.getElementsByClassName("canvas")[0];
var context = canvas.getContext("2d");
var butBW = document.getElementsByClassName("black-white")[0];
var butNegative = document.getElementsByClassName("negative")[0];
var butCrema = document.getElementsByClassName("random")[0];
var img = document.getElementsByClassName("bmw")[0];

context.drawImage(img, 0, 0);

canvas.addEventListener("dragover", function(e){
	e.preventDefault();
})
	
canvas.addEventListener("drop", function(e){
	e.preventDefault();
	var dT = e.dataTransfer;
	var fileReader = new FileReader();
	fileReader.onload = function(){
		img.src = this.result;
	}
	fileReader.readAsDataURL(dT.files[0]);
})

img.onload = function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(img, 0, 0);
	if (butBW.classList.contains("press")) {
		butBW.classList.remove("press");
		var event = new Event("click");
		butBW.dispatchEvent(event);
	}
	if (butNegative.classList.contains("press")) {
		butNegative.classList.remove("press");
		var event = new Event("click");
		butNegative.dispatchEvent(event);
	}
	if (butCrema.classList.contains("press")) {
		butCrema.classList.remove("press");
		var event = new Event("click");
		butCrema.dispatchEvent(event);
	}
	
}

butBW.addEventListener("click", function(){
	if (!this.classList.contains("press")) {
		context.drawImage(img, 0, 0);
		var myImage = context.getImageData(0, 0, canvas.width, canvas.height);
		for (var i = 0; i < myImage.data.length; i += 4){
			var sum = 0;
			sum += myImage.data[i] + myImage.data[i + 1] + myImage.data[i + 2];
			sum = Math.round(sum / 3);
			myImage.data[i] = sum;
			myImage.data[i + 1] = sum;
			myImage.data[i + 2] = sum;
		}
		context.putImageData(myImage, 0, 0);
		this.classList.add("press");
	}
	else {
		context.drawImage(img, 0, 0);
		this.classList.remove("press");
	}
	butNegative.classList.remove("press");
	butCrema.classList.remove("press");
})

butNegative.addEventListener("click", function(){
	if (!this.classList.contains("press")) {
		context.drawImage(img, 0, 0);
		var myImage = context.getImageData(0, 0, canvas.width, canvas.height);
		for (var i = 0; i < myImage.data.length; i += 4){
			myImage.data[i] = 255 - myImage.data[i];
			myImage.data[i + 1] = 255 - myImage.data[i + 1];
			myImage.data[i + 2] = 255 - myImage.data[i + 2];
		}
		context.putImageData(myImage, 0, 0);
		this.classList.add("press");
	}
	else {
		context.drawImage(img, 0, 0);
		this.classList.remove("press");
	}
	butBW.classList.remove("press");
	butCrema.classList.remove("press");

})

butCrema.addEventListener("click", function(){
	if (!this.classList.contains("press")) {
		context.drawImage(img, 0, 0);
		var myImage = context.getImageData(0, 0, canvas.width, canvas.height);
		for (var i = 0; i < myImage.data.length; i += 4){
			myImage.data[i] = (myImage.data[i] * Math.random()) + (myImage.data[i + 1] * Math.random()) + (myImage.data[i + 2] * Math.random());
			myImage.data[i + 1] = (myImage.data[i] * Math.random()) + (myImage.data[i + 1] * Math.random()) + (myImage.data[i + 2] * Math.random());
			myImage.data[i + 2] = (myImage.data[i] * Math.random()) + (myImage.data[i + 1] * Math.random()) + (myImage.data[i + 2] * Math.random());
		}
		context.putImageData(myImage, 0, 0);
		this.classList.add("press");
	}
	else {
		context.drawImage(img, 0, 0);
		this.classList.remove("press");
	}
	butNegative.classList.remove("press");
	butBW.classList.remove("press");
})