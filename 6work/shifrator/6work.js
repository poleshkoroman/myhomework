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
	console.log(arr);
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
	console.log(arr);
	for (var i = 0; i < arr.length; i++){
		newarr[i] = String.fromCharCode(arr[i]);
	}
	inputmain.value = newarr.join("");
	input.value = "";
})