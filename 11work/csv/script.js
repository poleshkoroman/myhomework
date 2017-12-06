//AJAX + JSON

//форматы передачи данных
// 1) plain text - обычный текст (xml, json, csv)
// 2) binary - данные упакованы в двоичный код

var div = document.getElementById("main");
var sumofprice = 0; sumofnumber = 0;
var ul = document.getElementsByTagName("ul")[0];

var xhr = new XMLHttpRequest();
xhr.open("GET", "cars.csv", true);
xhr.onload = function(){
	var arr = this.responseText.split(/\r\n/).map(function(elem){return elem.split(", ")});

	var data = [];

	for(var i = 1; i < arr.length; i++){
		var obj = {};
		var k = 0;
		arr[0].forEach(function(elem){
			Object.defineProperty(obj, elem, {
				value: arr[i][k]
			})
			k++;
		})
		data.push(obj);
	}


// var xhr = new XMLHttpRequest; xhr.open("GET", "jsonfile.json", true);

// xhr.onload = function(){
	// console.log(this.responseText);
	// var data = JSON.parse(this.responseText);
	console.log(data);
	ul.innerHTML = "";
	div.innerText = "Количество: " + sumofnumber + " Цена: " + sumofprice;
	data.forEach(function(item){
		var li = document.createElement("li");
		li.innerHTML += "<h3>" + item.name + " - " + item.price + " - " + item.country + "</h3>";

		var butPlus = document.createElement("button");
		butPlus.setAttribute("type","button");
		butPlus.innerText = "+";

		var butMines = document.createElement("button");
		butMines.setAttribute("type","button");
		butMines.innerText = "-";

		var butCart = document.createElement("button");
		butCart.setAttribute("type","button");
		butCart.innerText = "В корзину";

		var number = document.createElement("span");
		number.innerText = " " + 0 + " ";

		ul.appendChild(li);
		li.appendChild(butMines);  li.appendChild(number); li.appendChild(butPlus); li.appendChild(butCart);

		butMines.addEventListener("click", function(){ if ( Number(number.innerText) > 0 ) number.innerText = " " + ( Number(number.innerText) - 1) + " "; })

		butPlus.addEventListener("click", function(){ number.innerText = " " + ( Number(number.innerText) + 1) + " "; })

		butCart.addEventListener("click", function(){
			alert("Товар " + item.name + " в количестве " + Number(number.innerText) + " штук добавлен.");
			sumofnumber += Number(number.innerText);
			sumofprice += item.price * Number(number.innerText);
			div.innerText = "Количество: " + sumofnumber + " Цена: " + sumofprice; 
			number.innerText = " " + 0 + " ";
		})

	})

}
xhr.send(null);