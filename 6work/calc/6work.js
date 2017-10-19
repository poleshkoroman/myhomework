var butplus = document.getElementById("plus");
var butminus = document.getElementById("minus");
var butmult = document.getElementById("mult");
var butdivide = document.getElementById("divide");
var butmemory = document.getElementById("memory");
var butresult = document.getElementById("result");
var butclear = document.getElementById("clearinput");
var butmemoryshow = document.getElementById("mrc");
var number0 = document.getElementById("value0");
var number1 = document.getElementById("value1");
var number2 = document.getElementById("value2");
var number3 = document.getElementById("value3");
var number4 = document.getElementById("value4");
var number5 = document.getElementById("value5");
var number6 = document.getElementById("value6");
var number7 = document.getElementById("value7");
var number8 = document.getElementById("value8");
var number9 = document.getElementById("value9");
var result = 0, memory = 0, id = 0;

number0.addEventListener("click",function(){
	var input = document.getElementById("calc");
	input.value += 0;
})

number1.addEventListener("click",function(){
	var input = document.getElementById("calc");
	input.value += 1;
})

number2.addEventListener("click",function(){
	var input = document.getElementById("calc");
	input.value += 2;
})

number3.addEventListener("click",function(){
	var input = document.getElementById("calc");
	input.value += 3;
})

number4.addEventListener("click",function(){
	var input = document.getElementById("calc");
	input.value += 4;
})

number5.addEventListener("click",function(){
	var input = document.getElementById("calc");
	input.value += 5;
})

number6.addEventListener("click",function(){
	var input = document.getElementById("calc");
	input.value += 6;
})

number7.addEventListener("click",function(){
	var input = document.getElementById("calc");
	input.value += 7;
})

number8.addEventListener("click",function(){
	var input = document.getElementById("calc");
	input.value += 8;
})

number9.addEventListener("click",function(){
	var input = document.getElementById("calc");
	input.value += 9;
})

butmemory.addEventListener("click",function(){
	memory = result;
	var input = document.getElementById("calc");
	input.value = "";
})

butmemoryshow.addEventListener("click",function(){
	var input = document.getElementById("calc");
	input.value +=memory;
})

butclear.addEventListener("click",function(){
	var input = document.getElementById("calc");
	input.value = "";
})

butplus.addEventListener("click",function(){
	var input = document.getElementById("calc");
	var value1 = document.getElementsByTagName("input")[0].value;
	input.value = parseInt(value1) + "+";
	id = "+";
})
butminus.addEventListener("click",function(){
	var input = document.getElementById("calc");
	var value1 = document.getElementsByTagName("input")[0].value;
	if (value1[value1.length-1] == id) {
		input.value = parseInt(value1) + id + "-";
	}
	else {
		input.value = parseInt(value1) + "-";
		id = "-";
	}
})
butmult.addEventListener("click",function(){
	var input = document.getElementById("calc");
	var value1 = document.getElementsByTagName("input")[0].value;
	input.value = parseInt(value1) + "*";
	id = "*";
})
butdivide.addEventListener("click",function(){
	var input = document.getElementById("calc");
	var value1 = document.getElementsByTagName("input")[0].value;
	input.value = parseInt(value1) + "/";
	id = "/";
})

butresult.addEventListener("click",function(){
	var input = document.getElementById("calc");
	var values = document.getElementsByTagName("input")[0].value;
	var value1 = parseInt(values);
	var value2 = Number(values.substr(values.indexOf(id)+1, values.length));
	switch(id)
	{
		case "+": result = value1+value2; break;
		case "-": result = value1-value2; break;
		case "*": result = value1*value2; break;
		case "/": result = value1/value2; break;
		default: "This operation not found.";
	}
	input.value = result;
})

butmemory.addEventListener("mouseover",function(){
	this.className = "true";
})

butmemory.addEventListener("mouseout",function(){
	this.className = "false";
})

butmemoryshow.addEventListener("mouseover",function(){
	this.className = "true";
})

butmemoryshow.addEventListener("mouseout",function(){
	this.className = "false";
})

butclear.addEventListener("mouseover",function(){
	this.className = "true";
})

butclear.addEventListener("mouseout",function(){
	this.className = "false";
})

butplus.addEventListener("mouseover",function(){
	this.className = "true";
})

butplus.addEventListener("mouseout",function(){
	this.className = "false";
})

butminus.addEventListener("mouseover",function(){
	this.className = "true";
})

butminus.addEventListener("mouseout",function(){
	this.className = "false";
})

butmult.addEventListener("mouseover",function(){
	this.className = "true";
})

butmult.addEventListener("mouseout",function(){
	this.className = "false";
})

butdivide.addEventListener("mouseover",function(){
	this.className = "true";
})

butdivide.addEventListener("mouseout",function(){
	this.className = "false";
})

butresult.addEventListener("mouseover",function(){
	this.className = "true";
})

butresult.addEventListener("mouseout",function(){
	this.className = "false";
})




