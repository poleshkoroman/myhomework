//4 task

var input = document.getElementById("input");
myFW.addproperty(input, "background", "purple");

//1 task

var maindiv = document.getElementsByClassName("main")[0];
var peoples = [
	{
		name: "Roma",
		event: function(){
			alert("Hi " + this.name);
		}
	},
	{
		name: "Dasha",
		event: function(){
			alert("Hi " + this.name);
		}
	}
]
var div = document.createElement("div");
div.classList.add("context");
for (var i = 0; i < peoples.length; i++){
	var contextdiv = document.createElement("div");
	contextdiv.innerHTML = "<p>" + peoples[i].name + "</p>"; 
	div.appendChild(contextdiv);
}

maindiv.style.height = "1000px";
maindiv.addEventListener("contextmenu", function(e){
	e.preventDefault();
	div.style.position = "absolute";
	div.style.left = (document.documentElement.clientWidth > e.offsetX + 210) ? e.offsetX + 10 + "px" : e.offsetX - 200 + "px" ;
	div.style.top = (document.documentElement.clientHeight > e.offsetY + 130) ? e.offsetY + 35 + "px" : e.offsetY - 55 + "px" ;
	this.appendChild(div);
})

div.addEventListener("click", function(e){
	peoples.forEach(function(elem){
		if (elem.name == e.target.outerText){
			elem.event();
		}
	})
})
maindiv.addEventListener("click", function(){
	div.remove();
})

//3 task

var ul = document.getElementsByTagName("ul")[0];
for(var i = 1; i < 4; i++){
	var li = document.createElement("li");
	li.innerText += "Пункт "  + i;
	ul.appendChild(li);
}
ul.addEventListener("click", function(e){
	if (e.target != this){
		if (e.target == this) return
		else {
			if(e.target.children.length == 1) e.target.children[0].remove();
			else{
				var insideUL = document.createElement("ul");
				e.target.appendChild(insideUL);
				for(var j = 1; j < 3; j++){
					var insideLI = document.createElement("li");
					insideLI.innerText ="Подпункт " + j;
					insideUL.appendChild(insideLI);
				}
			}
		}
	}
})