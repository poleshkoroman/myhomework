//first task

var input = document.getElementsByTagName("input")[0];

input.addEventListener("keypress", function(e){
	if((e.keyCode >= 48) && (e.keyCode <= 57)){
		this.value += e.key;
	}
	e.preventDefault();
})

//second task

var testinputbyid = myFW.get.byId("input");
console.log(testinputbyid);

var testinputbytag = myFW.get.byTag("input",0);
console.log(testinputbytag);

var testinputbyclass = myFW.get.byClass("lol",0);
console.log(testinputbyclass);

var tr = myFW.create("tr");
console.log(tr);

var td = myFW.create("td")
console.log(td);

myFW.append(tr,td);

myFW.remove(td);