var div = document.getElementById("div");
var settings = {
	"#file1" : {
		path : "file1.html",
		event : function(){
			var button = document.getElementById("button");
			var input = document.getElementById("input");
			button.addEventListener("click", function(){
				alert(input.value);
				input.value = "";
			})
		}
	}, 
	"#file2" : {
		path : "file2.html",
		event : function(){
			var button_shifr = document.getElementById("true");
			var button_deshifr = document.getElementById("false");

			button_shifr.addEventListener("click",function(){
				var inputmain = document.getElementById("deshifr");
				var input = document.getElementById("shifr");
				var myvalue = document.getElementById("shifr").value;
				var arr = [], newarr = [];
				for (var i = 0; i < myvalue.length; i++){
					arr[i] = 100 + myvalue.charCodeAt(i);
				}
				for (var i = 0; i < arr.length; i++){
					newarr[i] = String.fromCharCode(arr[i]);
				}
				inputmain.value = newarr.join("");
				input.value = "";
			})

			button_deshifr.addEventListener("click",function(){
				var inputmain = document.getElementById("shifr");
				var input = document.getElementById("deshifr");
				var myvalue = document.getElementById("deshifr").value;
				var arr = [], newarr = [];
				for (var i = 0; i < myvalue.length; i++){
					arr[i] = (100 - myvalue.charCodeAt(i))*(-1);
				}
				for (var i = 0; i < arr.length; i++){
					newarr[i] = String.fromCharCode(arr[i]);
				}
				inputmain.value = newarr.join("");
				input.value = "";
			})
		}
	}, 
	"#file3" : {
		path : "file3.html",
		event : function(){}
	}, 
	"#file4" : {
		path : "file4.html",
		event : function(){}
	}, 
	"#file5" : {
		path : "file5.html",
		event : function(){}
	}
}

var setting = {
	"#testajax" : "testajax.html"
}

var change = function(){
	var path = settings[location.hash].path;
	var events = settings[location.hash].event;
	var xhr = new XMLHttpRequest; xhr.open("GET", path, true);
	xhr.onload = function(){
		div.innerHTML = this.responseText;
		events();
	}
	xhr.send(null);
}

window.onhashchange = function(){
	change();
}
if (location.hash in settings){
	change();
}