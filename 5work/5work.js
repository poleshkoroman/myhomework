var numberoftag = document.getElementsByTagName("*").length;

var numberofcomment = 0, numberoftext = 0;
var childNodes = document.childNodes;

var findtextandcomment = function(obj){
	if (obj === undefined) return false;
	for (var i = 0; i < obj.length; i++){
		findtextandcomment(obj[i].childNodes);
		if (obj[i].nodeType == 3) numberoftext++;
		if (obj[i].nodeType == 8) numberofcomment++;	
	}
	}
findtextandcomment(childNodes);
alert("Number of tag: "+numberoftag + ". Number of text: "+numberoftext+". Number of comment: "+numberofcomment);

var task = Number(prompt("Enter task. Аvailable: 2,3,5."),1);

switch (task){
case 5 :

// resheto eratosfera

var div = document.getElementById("myDiv1");
var val = Number(prompt("Enter number",0));

var simpleArray = function(){
	var array = [], n = 2, i = 0;
	while (n <= val){
		array[i] = n;
		i++; n++;
	}
	var p = 2, key = 1;
	while( p*p < n)
	{
		for (var i = key; i < array.length; i++)
		{
			if (!(array[i] % p)) array.splice(i,1);	
		}
		p = array[key];
		key++;
	}
	return array;
}

var newarr = simpleArray().concat();
var table = document.getElementsByTagName("table")[0];

for(var i = 1; i < val+1; i++){ 
	if((i - 1) % Math.round(Math.sqrt(val)) == 0){ 
		var tr = document.createElement("tr"); 
		table.appendChild(tr); 
	}  
	if(i == 1){ 
		var td = document.createElement("td"); 
		table.appendChild(td);	
	} 
	else{ 
		var td = document.createElement("td"); 
		table.appendChild(td); 
		td.innerText = i;
		for (var j = 0; j < newarr.length; j++){
			if (i == newarr[j]) {td.setAttribute("id","true"); break;}
				else td.setAttribute("id","false");
		}			
		}
} 

break;

case 2:

//clock

var div = document.getElementById("myDiv2");
setInterval(function(){
	var currenttime = new Date(), endofday = new Date();
	endofday.setHours(23,59,59);
	var seconds = endofday.getSeconds() - currenttime.getSeconds();
	var minutes = endofday.getMinutes() - currenttime.getMinutes();
	var hours = endofday.getHours() - currenttime.getHours();
	(seconds < 10) ? seconds = "0" + seconds:seconds;
	(minutes < 10) ? minutes = "0" + minutes:minutes;
	(hours < 10) ? hours = "0" + hours:hours;
	div.innerText = hours + ":" + minutes + ":" + seconds;
	setTimeout(function(){div.innerText = hours + " " + minutes + " " + seconds},500);
},1000);

break;

case 3:

//multiplication

var table = document.getElementsByTagName("table")[0];
var val = Number(prompt("Enter number",0));
for(var i = 1; i < val+1; i++){ 
	var tr = document.createElement("tr"); 
	table.appendChild(tr); 
	for (var j = 1; j < val+1; j++){
		var td = document.createElement("td"); 
		table.appendChild(td);
		if (i == j) td.setAttribute("id","true");
		else td.setAttribute("id","false")
		td.innerText = i + " * " + j + " = " + i*j;
	}
}

break;

default : alert('Task not found');
}

