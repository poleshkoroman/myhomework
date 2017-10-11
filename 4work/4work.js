// second_task
var str = prompt("Enter number of telephon!");
var format = /\+375[\s|\-|\(]?(24|25|29|33|44)[\s|\-|\)]?[1-9]{1}[0-9]{2}[\s|\-]?[0-9]{2}[\s\-]?[0-9]{2}/;
if (format.exec(str)){
	alert(str.match(format)[0].replace(/[^0-9]/g,""));
}
else alert("number of telephon not found");

 

// first_task

var arrwithinfo = ["Ширина экрана:<br>screen.width", 
		   "Высота экрана:<br>screen.height",
		   "Высота активного экрана:<br>screen.availHeight", 
		   "Ширина активного экрана:<br>screen.availWidth", 
		   "Битовая глубина цветовой палитры:<br>screen.colorDepth",
		   "Текущая ориентация экрана:<br>screen.orientation.type", 
		   "Кодовое имя браузера:<br>navigator.appCodeName", 
		   "Имя браузера:<br>navigator.appName", 
		   "Включена ли поддержка cookie?<br>navigator.cookieEnabled", 
		   "Включена ли поддержка Java в браузере?<br>navigator.javaEnabled", 
		   "Вы online?<br>navigator.onLine",
		   "Полная информация о браузере:<br>navigator.userAgent",
		   "Перейти на указанную n-ую URL в списке посещенных страниц:",
		   "Перейти на следующую URL в списке посещенных страниц:",
		   "Перейти на предыдущую URL в списке посещенных страниц:",
		   "Количество URL которые хранятся в History:<br>history.length",
		   "Часть URL, которая идет после символа решетки '#', включая символ '#':<br>location.hash",
		   "Xост и порт:<br>location.host","Весь URL:<br>location.href",
		   "Hомер порта:<br>location.port","Протокол:<br>location.protocol",
		   "Часть адреса после символа ?, включая символ ?:<br>location.search",
		   "Перезагрузить документ по текущему UR:",
		   "Загрузить документ по данному url:",
		   "Определяет x-координату указателя относительно экрана в момент возникновения события:<br>screenX/screenLeft",
		   "Определяет y-координату указателя относительно экрана в момент возникновения события:<br>screenY/screenTop",
		   "Предназначен для получения количества пикселей, на которые документ был прокручен в горизонтальном направлении относительного левого верхнего угла окна:<br>scrollX",
		   "Предназначены для получения количества пикселей, на которые документ был прокручен в вертикальном направлении относительного левого верхнего угла окна:<br>scrollY",
		   "Метод прокручивает страницу относительно текущих координат:",
		   "Метод прокручивает страницу к указанным координатам относительно документа:",
		   "Метод закрывает указанное окно:",
		   "Ширина рабочей области окна:<br>innerWidth",
		   "Высота рабочей области окна:<br>innerHeight",
		   "Открывает новое окно web-браузера:",
		   "Метод, для печати документа:"]; 
var arrwithproperties = [screen.width,
			screen.height, 
			screen.availHeight, 
			screen.availWidth, 
			screen.colorDepth, 
			screen.orientation.type, 
			navigator.appCodeName, 
			navigator.appName, 
			navigator.cookieEnabled, 
			navigator.javaEnabled, 
			navigator.onLine,
			navigator.userAgent,
			"history.go()",
			"history.forward()",
			"history.back()",
			history.length,
			location.hash,
			location.host,
			location.href,
			location.port,
			location.protocol,
			location.search,
			"location.reload()",
			"location.assign()",
			screenX, 
			screenY,
			scrollX,
			scrollY, 
			"scrollBy(x,y)",
			"scrollTo(pageX,pageY)",
			"close()",
			innerWidth,
			innerHeight,
			"open()",
			"print()"]; 
document.write("<table border='1'><tr><th>Property</th><th>Result</th></tr>"); 
for (var i = 0; i < arrwithinfo.length; i++){ 
	document.write("<tr><th width='60%'><p>" + arrwithinfo[i] + "<p></th><th width='40%'><p>" + arrwithproperties[i] + "</p></th></tr>"); 
}