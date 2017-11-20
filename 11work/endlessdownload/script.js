var div = document.getElementById("main");

var xhr = new XMLHttpRequest; xhr.open("GET","images.json", true);
xhr.onload = function(){
	var data = JSON.parse(this.responseText);
	console.log(data);
	var addonpage = function(){
		for (var i = 0; i < data.length; i++) div.innerHTML += "<img src = '" + data[i] + "'</img>"
	}

	addonpage();

	window.addEventListener("scroll", function(){
		var lastblock = div.lastChild;
		if (lastblock.getBoundingClientRect().bottom < window.innerHeight) addonpage();
	})
}
xhr.send(null);