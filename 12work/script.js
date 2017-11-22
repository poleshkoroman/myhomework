var divText = document.getElementsByClassName("text")[0];
var divFormat = document.getElementsByClassName('format')[0];
var divProperties = document.getElementsByClassName("properties")[0];
var butBold = document.getElementsByClassName("bold")[0];
var butUnderline = document.getElementsByClassName("underline")[0];
var butItalic = document.getElementsByClassName("italic")[0];
var changeSize = document.getElementsByClassName("size")[0];
var changeFamily = document.getElementsByClassName("family")[0];
var changeColor = document.getElementsByClassName("color")[0];
var changeColorBg = document.getElementsByClassName("background")[0];
var butNumericList = document.getElementsByClassName("numericList")[0];
var butMarkerList = document.getElementsByClassName("markerList")[0];
var butHr = document.getElementsByClassName("hr")[0];
var butCenter = document.getElementsByClassName("center")[0];
var butLeft = document.getElementsByClassName("left")[0];
var butRight = document.getElementsByClassName("right")[0];
var butIndent = document.getElementsByClassName("indent")[0];
var butOutdent = document.getElementsByClassName("outdent")[0];
var butAddhref = document.getElementsByClassName("addhref")[0];
var butClear = document.getElementsByClassName("clear")[0];
var count = 0, arrayofelement = [], arrayofproperties = [], k = -1;

var xhr = new XMLHttpRequest; 
xhr.open("GET","text.json", true);
xhr.onload = function(){
	var data = JSON.parse(this.responseText);
	divText.innerHTML = "<p>" + data[0].content + "</p>";
	var p = divText.children[0];
	divText.contentEditable = "true"; 
	var check = function(name, property){
		var val1 = 0, val2 = 0;
		if (name.classList.contains("press")) {
			val1 = ++k;
			arrayofproperties[val1] = property;
			arrayofelement[val1] = name;
		} 
		else {
			val2 = arrayofproperties.indexOf(property)
			delete arrayofproperties[val2];
			delete arrayofelement[val2];
		}
	}
	butBold.addEventListener("click", function(){
		document.execCommand("bold", false, true);
		this.classList.toggle("press");
		check(this, "bold");

	})
	butUnderline.addEventListener("click", function(){
		document.execCommand("underline", false, true);
		this.classList.toggle("press");
		check(this, "underline");
	})
	butItalic.addEventListener("click", function(){
		document.execCommand("italic", false, true);
		this.classList.toggle("press");
		check(this, "italic");
	})
	changeSize.addEventListener("change", function(){
		document.execCommand("fontsize", false, this.value);
		this.classList.add("press");
		check(this, "fontsize");
	})
	changeFamily.addEventListener("change", function(){
		document.execCommand("fontname", false , this.value);
		this.classList.add("press");
		check(this, "fontname");
	})
	changeColor.addEventListener("change", function(){
		document.execCommand("forecolor", false, this.value);
		this.classList.add("press");
		check(this, "forecolor")
	})
	changeColorBg.addEventListener("change", function(){
		document.execCommand("backcolor", false, this.value);
		this.classList.add("press");
		check(this, "backcolor");
	})
	butNumericList.addEventListener("click", function(){ 
		document.execCommand("insertorderedlist", false, null); 
		this.classList.toggle("press"); 
		butMarkerList.classList.remove("press");
		delete arrayofproperties[arrayofproperties.indexOf("insertunorderedlist")];
		check(this, "insertorderedlist");
	}) 

	butMarkerList.addEventListener("click", function(){ 
		document.execCommand("insertunorderedlist", false, null); 
		this.classList.toggle("press"); 
		butNumericList.classList.remove("press");
		delete arrayofproperties[arrayofproperties.indexOf("insertorderedlist")];
		check(this, "insertunorderedlist");
	}) 

	butHr.addEventListener("click", function(){ 
		document.execCommand("inserthorizontalrule", false, null); 
		this.classList.toggle("press");
		check(this, "inserthorizontalrule");
	})
	butCenter.addEventListener("click", function(){
		if (this.classList.contains("press")){
			document.execCommand("justifyleft", false, true);
			this.classList.remove("press");

		}
		else {
			document.execCommand("justifycenter", false, true);
			this.classList.add("press");
			delete arrayofproperties[arrayofproperties.indexOf("justifyleft")];
			delete arrayofproperties[arrayofproperties.indexOf("justifyright")];
			butLeft.classList.remove("press");
			butRight.classList.remove("press");
		}
		check(this, "justifycenter");
	})
	butLeft.addEventListener("click", function(){
		if (this.classList.contains("press")){
			document.execCommand("justifyleft", false, true);
			this.classList.remove("press");
			delete arrayofproperties[arrayofproperties.indexOf("justifyleft")];
		}
		else {
			document.execCommand("justifyleft", false, true);
			this.classList.add("press");
			delete arrayofproperties[arrayofproperties.indexOf("justifycenter")];
			delete arrayofproperties[arrayofproperties.indexOf("justifyright")];
			butCenter.classList.remove("press");
			butRight.classList.remove("press");
		}
		if (this.classList.contains("press")) {
			arrayofproperties[++k] = "justifyleft"
		}
	})
	butRight.addEventListener("click", function(){
		if (this.classList.contains("press")){
			document.execCommand("justifyleft", false, true);
			this.classList.remove("press");
		}
		else {
			document.execCommand("justifyright", false, true);
			this.classList.add("press");
			delete arrayofproperties[arrayofproperties.indexOf("justifycenter")];
			delete arrayofproperties[arrayofproperties.indexOf("justifyleft")];
			butLeft.classList.remove("press");
			butCenter.classList.remove("press");
		}
		check(this, "justifyright");
	})
	butIndent.addEventListener("click", function(){
		count++;
		document.execCommand("indent", false, true);
		this.classList.add("press");
		butOutdent.classList.remove("press");
		check(this, "indent");
	})
	butOutdent.addEventListener("click", function(){
		document.execCommand("outdent", false, true);
		count--;
		if (count == 0)	butIndent.classList.remove("press");
		check(this, "outdent");
	})
	butAddhref.addEventListener("click", function(){
		document.execCommand("createlink", false, prompt("Ссылка: ", ' '));
		check(this, "createlink");
	})
	butClear.addEventListener("click", function(){
		divText.innerHTML = "<p>" + divText.outerText + "</p>";
		for (var i = 0; i < arrayofelement.length; i++){
			if (arrayofelement[i] != undefined) arrayofelement[i].classList.remove("press");
		}
		arrayofproperties = [];
		arrayofelement = [];
		k = -1;	
		p = divText.children[0];
		p.addEventListener("mouseover", function(){	
			for (var i = 0; i < arrayofproperties.length; i++){
				if (arrayofproperties[i] != undefined)	divProperties.innerText += arrayofproperties[i] + " | ";
			} 
		})
		p.addEventListener("mouseout", function(){
			divProperties.innerText = "";
		})
	})
	p.addEventListener("mouseover", function(){	
		for (var i = 0; i < arrayofproperties.length; i++){
			if (arrayofproperties[i] != undefined)	divProperties.innerText += arrayofproperties[i] + " | ";
		} 
	})
	p.addEventListener("mouseout", function(){
		divProperties.innerText = "";
	})
}
xhr.send();
