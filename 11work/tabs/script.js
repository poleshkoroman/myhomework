var divName = document.getElementById("name");
var divModel = document.getElementById("model");
var divPrice = document.getElementById("price");
var divCountry = document.getElementById("country");
var divImg = document.getElementById("img");
var ulName = document.createElement("ul");
ulName.classList.add("ulName");
divName.appendChild(ulName);
var ulModel = document.createElement("ul");
ulModel.classList.add("ulModel");
divModel.appendChild(ulModel);
var ulPrice = document.createElement("ul");
ulPrice.classList.add("ulPrice");
divPrice.appendChild(ulPrice);
var ulCountry = document.createElement("ul");
ulCountry.classList.add("ulCountry");
divCountry.appendChild(ulCountry);
var ul = document.getElementsByClassName("hr")[0];

var xhr = new XMLHttpRequest; xhr.open("GET","catalog.json", true);
xhr.onload = function(){
	var data = JSON.parse(this.responseText);
	data.forEach(function(item){
		var li = document.createElement("li");
		li.innerHTML += item.category;
		li.classList.add(item.category);
		ul.appendChild(li);
		
	})
	ul.addEventListener("click", function(e){
		var target = e.target.getAttribute("class");
		ulName.innerText = "";
		ulModel.innerText = "";
		ulPrice.innerText = "";
		ulCountry.innerText = "";
		divImg.innerText = "";
		divName.style.visibility = "visible";
		data.forEach(function(item){
			if (target == item.category) {
				for (var i = 0; i < item.subcategory.length; i++){
					var liName = document.createElement("li");
					liName.innerText += item.subcategory[i].name;
					liName.setAttribute("id", item.subcategory[i].name);
					ulName.appendChild(liName);

					var liModel = document.createElement("li");
					liModel.innerText += item.subcategory[i].model;
					ulModel.appendChild(liModel);

					var liPrice = document.createElement("li");
					liPrice.innerText += item.subcategory[i].price;
					ulPrice.appendChild(liPrice);

					var liCountry = document.createElement("li");
					liCountry.innerText += item.subcategory[i].country;
					ulCountry.appendChild(liCountry);
				}
				ulName.addEventListener("click", function (val) {
					var nameofjpg = val.target.getAttribute("id");
					for (var i = 0; i < item.subcategory.length; i++) {
						if (nameofjpg == item.subcategory[i].name) {
							if (divImg.children[0] == undefined) {
								var img = document.createElement("img");
								img.setAttribute("src",item.subcategory[i].image);
								divImg.appendChild(img);
							}
							else {
								divImg.children[0].setAttribute("src",item.subcategory[i].image)
								
							}
						}
					}

				})	
			}
		})
	})	
}
xhr.send(null);
