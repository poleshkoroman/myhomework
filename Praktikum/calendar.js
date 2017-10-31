var currentMonth = new Date().getMonth() + 1;
var currentYear = new Date().getFullYear(); 
var arrayOfMonth = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
var buttonNext = document.getElementById("next");
var buttonPrevious = document.getElementById("previous");
var buttonCurrent = document.getElementById("current");
var buttonShow = document.getElementById("show");
var selectMonth = document.getElementById("month");
var selectYear = document.getElementById("year");
var events = {}; numberofclick = 0;
var div = document.getElementById("events");

var daysInMonth = function(month, year) {
   var MonthDays = [
             [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
             [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            ];
   if (month < 1 || month > 12) return 0;
   return MonthDays[((month == 2) || ((year % 4 == 0) || ((year % 100 != 0) || (year % 400 == 0)))) ? 1:0][month-1];
}

var addevents = function(target, str){
	div.innerHTML = "<p><textarea name = 'events' id = 'textarea' readonly></textarea></p><input type = 'text' id = 'withevents'><button type = 'button' id = 'addevents'>Сохранить событие</button><button type = 'button' id = 'close'>Закрыть</button>";
	input = document.getElementById("withevents");
	textarea = document.getElementById("textarea");
	buttonfillEvents = document.getElementById("addevents");
	buttonClose = document.getElementById("close");
	buttonClose.addEventListener("click",function(){
		div.innerHTML = "";
	})
	buttonfillEvents.addEventListener("click",function(e){
		if(!events[str]) events[str]=[];
		events[str].push(input.value);
		textarea.value += input.value + "\n";
		input.value = "";
	 	target.classList.add("newevents");
	})
}

var deleteevents = function(target, str){
	div.innerHTML = "<p><textarea name = 'events' id = 'textarea' readonly></textarea></p><input type = 'text' id = 'withevents'><button type = 'button' id = 'deleteevents'>Удалить событие</button><button type = 'button' id = 'close'>Закрыть</button>";
	input = document.getElementById("withevents");
	textarea = document.getElementById("textarea");
	textarea.value = events[str];
	buttonDeleteEvents = document.getElementById("deleteevents");
	buttonClose = document.getElementById("close");
	buttonClose.addEventListener("click",function(){
		div.innerHTML = "";
	})
	buttonDeleteEvents.addEventListener("click",function(e){
		for (var i = 0; i < events[str].length; i++){
			if (input.value == events[str][i]){
				events[str].splice(i,1);
			}
		}
		textarea.value = events[str];
		input.value = "";		
		if (!events[str].length) target.classList.remove("newevents");		
	})

}

var createColumn = function(i,Month,Year){
	var td = document.createElement("td"); 
	table.appendChild(td);
	td.setAttribute("id",i);
	var forDay = new Date();
	forDay.setFullYear(Year); 
	forDay.setMonth(Month - 1); 
	forDay.setDate(i);	
	if (i == new Date().getDate() && Month == new Date().getMonth() + 1 && Year == new Date().getFullYear()) td.setAttribute("class","currentday"); 
	var day = forDay.getDay();
	switch(day){
		case 1 : { td.innerText = i + " | Понедельник"; break;}
		case 2 : { td.innerText = i + " | Вторник"; break;}
		case 3 : { td.innerText = i + " | Среда"; break;}
		case 4 : { td.innerText = i + " | Четверг"; break;}
		case 5 : { td.innerText = i + " | Пятница"; break;}
		case 6 : { td.innerText = i + " | Суббота"; break;}
		case 0 : { td.innerText = i + " | Воскресенье"; break;}
	}		
}

var createTable = function(Month, Year){
	maindiv.innerHTML = "<table id = 'table'></table>";
	table = document.getElementsByTagName("table")[0];
	var tr = document.createElement("tr");
	table.appendChild(tr);
	switch(Month){
		case 1 : { tr.innerText = arrayOfMonth[0] + ", " + Year; break;}
		case 2 : { tr.innerText = arrayOfMonth[1] + ", " + Year; break;}
		case 3 : { tr.innerText = arrayOfMonth[2] + ", " + Year; break;}
		case 4 : { tr.innerText = arrayOfMonth[3] + ", " + Year; break;}
		case 5 : { tr.innerText = arrayOfMonth[4] + ", " + Year; break;}
		case 6 : { tr.innerText = arrayOfMonth[5] + ", " + Year; break;}
		case 7 : { tr.innerText = arrayOfMonth[6] + ", " + Year; break;}
		case 8 : { tr.innerText = arrayOfMonth[7] + ", " + Year; break;}
		case 9 : { tr.innerText = arrayOfMonth[8] + ", " + Year; break;}
		case 10 : { tr.innerText = arrayOfMonth[9] + ", " + Year; break;}
		case 11 : { tr.innerText = arrayOfMonth[10] + ", " + Year; break;}
		case 12 : { tr.innerText = arrayOfMonth[11] + ", " + Year; break;}
	}
	for (var i = 1; i <= daysInMonth(Month,Year); i++){
		if((i - 1) % 11 == 0){ 
			var tr = document.createElement("tr"); 
			table.appendChild(tr); 
		} 
		if(i == 1) createColumn(i,Month,Year)
		else createColumn(i,Month,Year)
	}
	table.addEventListener("click",function(e){
		var target = e.target;		
		var str = Year + "-" + Month + "-" + +target.getAttribute("id");
		if ((events[str] == undefined) || (events[str].length == 0)) addevents(target, str)
			else deleteevents(target, str);
	})
}

var fillSelectByMonth = function(){
	for (var i = 0; i < arrayOfMonth.length; i++){
		var option = document.createElement("option");
		selectMonth.appendChild(option);
		option.innerText = arrayOfMonth[i];
		option.setAttribute("value",i+1);
	}
}

var fillSelectByYear = function(){
	for (var i = currentYear - 20; i <= currentYear + 20; i++){
		var option = document.createElement("option");
		selectYear.appendChild(option);
		option.innerText = i;
		option.setAttribute("value",i);
	}
}

var createCalendar = function(){
	selectMonth.value = currentMonth;
	selectYear.value = currentYear;
	createTable(currentMonth,currentYear);
	fillSelectByMonth();
	fillSelectByYear();
}

createCalendar();

buttonNext.addEventListener("click",function(){
	currentMonth++;
	if (currentMonth > 12) {currentMonth -= 12; createTable(currentMonth,++currentYear)}
	else createTable(currentMonth,currentYear);
})

buttonPrevious.addEventListener("click",function(){
	currentMonth--;
	if (currentMonth < 1) {currentMonth += 12; createTable(currentMonth, --currentYear)}
	else createTable(currentMonth,currentYear);
})

buttonShow.addEventListener("click",function(){
	createTable(+selectMonth.value, +selectYear.value);
	currentYear = +selectYear.value;
	currentMonth = +selectMonth.value;
})

buttonCurrent.addEventListener("click", function(){
	currentMonth = new Date().getMonth() + 1;
	currentYear = new Date().getFullYear(); 
	createTable(currentMonth, currentYear);
})


