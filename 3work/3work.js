//first_task
var people = ["Roma", "Dasha", "Stepa", "Igor", "Vika", "Denis", "Nikolay", "Oleg", "Elena"];
var cities = ["Brest", "Vitebsk", "Gomel", "Grodno", "Mogylev", "Minsk"];

var initArray = function(){
	var  arr = [];
	for (var i = 0; i < people.length; i++){
	    arr[i] = {};
		arr[i].name = people[Math.round(Math.random() * (people.length-1))];
		arr[i].city = cities[Math.round(Math.random() * (cities.length-1))];
		arr[i].age = Math.round(Math.random()*100);
		arr[i].showinfo = function() {console.log(this.name + " " + this.city + " " + this.age)}
    }
    return arr
}

var sortby = function(val1, val2){
	return val2.age - val1.age
}

var doSort = function(val){
	return val.sort(sortby);
}

var showArray = function(newarr){
	newarr.forEach(function(elem){
		elem.showinfo();
	})
}

var infoaboutpeople = initArray();
showArray(infoaboutpeople);
doSort(infoaboutpeople);
console.log("--------------AFTER SORTING--------------");
showArray(infoaboutpeople);

//second_task

console.log("--------------Second task--------------");

var names = ["Roma", "Dasha", "Stepa", "Igor", "Vika", "Denis", "Nikolay", "Oleg", "Elena"];
var namesofotdel = ["kek","lol","validol"];
var byhgaltariya = {
	initRabotnik :	function(){
				var  arr = [];
				for (var i = 0; i < names.length; i++){
	    			arr[i] = {};
					arr[i].name = names[Math.round(Math.random() * (names.length-1))];
					arr[i].age = Math.round(20 - 0.5 + Math.random() * (50 - 20 + 1));
					arr[i].otdel = namesofotdel[Math.round(Math.random() * (namesofotdel.length-1))];
					arr[i].zarplata = Math.round(200 - 0.5 + Math.random() * (500 - 200 + 1));
					arr[i].staj = Math.round(Math.random()*(11));	
					arr[i].showinfo = function() {console.log(this.name + " " + this.age + " " + this.otdel + " " + this.zarplata + " " + this.staj)}
    			}
    			return arr
	},
	addRabotnik: function(arr){
				var result = confirm("Add a new Rabotnik?");
				var currval = arr.length;
				currval++;
				if (result) {
					arr[currval] = {};
					arr[currval].name = names[Math.round(Math.random() * (names.length-1))];
					arr[currval].age = Math.round(20 - 0.5 + Math.random() * (50 - 20 + 1));
					arr[currval].otdel = namesofotdel[Math.round(Math.random() * (namesofotdel.length-1))];
					arr[currval].zarplata = Math.round(200 - 0.5 + Math.random() * (500 - 200 + 1));
					arr[currval].staj = Math.round(Math.random()*(11));
					arr[currval].showinfo = function() {console.log(this.name + " " + this.age + " " + this.otdel + " " + this.zarplata + " " + this.staj)}
  					return arr
				}
				else return arr
	},
	deleteRabotnik : function(arr){
				var currname = prompt("Enter name of rabotnik for delete.");
				for (var i = 0; i < arr.length; i++){
					if (currname == arr[i].name) {delete arr[i]}
				}
				return arr
	},
	sortByZp : function(arr){
				arr.sort(function(val1,val2){
					return val1.zarplata - val2.zarplata
				})
				return arr
	},
	sumByZp : function(arr){
				var sum = arr.reduce(function(prev, curr){
					return prev + curr.zarplata
				},0)
				return sum
	},
	MaxMinAverangeZp : function(arr){ //Объясните, как сделать нормально!
				var max = function(newarr){
					var newmax = newarr[0].zarplata;
					for (var i = 0; i < newarr.length - 1; i++){
						if (newmax < newarr[i].zarplata) {newmax = newarr[i].zarplata}
					}
					return newmax
				}

				var min = function(newarr){
					var newmin = newarr[0].zarplata;
					for (var i = 0; i < newarr.length - 1; i++){
						if (newmin > newarr[i].zarplata) {newmin = newarr[i].zarplata}
					}
					return newmin
				}
				var arr1 = arr.filter(function(elem){
					return elem.zarplata == max(arr)
				});
				showArray(arr1);

				var arr2 = arr.filter(function(elem){
					return elem.zarplata == min(arr)
				});
				showArray(arr2);

				console.log(this.sumByZp(arr) / arr.length);
	},
	infoAboutOtdel : function(arr){
				var arrlol = arr.filter(function(elem){
					return elem.otdel == "lol"
				});

				var arrkek = arr.filter(function(elem){
					return elem.otdel == "kek"
				});

				var arrvalidol = arr.filter(function(elem){
					return elem.otdel == "validol"
				});

				var infoAbout = function(newarr){
					showArray(newarr);
				    var sum = byhgaltariya.sumByZp(newarr);
				    if (sum == 0) {
				    	console.log("Takogo otdela net")
				    }
				    else {
						console.log(sum);
						console.log(sum / newarr.length);
						console.log(newarr.length);
						var sumage = newarr.reduce(function(prev, curr){
							return prev + curr.age
						},0)
						console.log(sumage / newarr.length);
						var maxage = function(newarr2){
							var newmax = newarr2[0].age;
							for (var i = 0; i < newarr2.length - 1; i++){
								if (newmax < newarr2[i+1].age) {newmax = newarr2[i+1].age}
							}
							return newmax
						}
						var arr1 = newarr.filter(function(elem){
						return elem.age == maxage(newarr)
						});
						showArray(arr1);
					}
				}
				console.log("--------------Info about otdel <lol>--------------");
				infoAbout(arrlol);
				console.log("--------------Info about otdel <kek>--------------");
				infoAbout(arrkek);
				console.log("--------------Info about otdel <validol>--------------");
				infoAbout(arrvalidol);
	}
}

var mass = byhgaltariya.initRabotnik();
console.log("--------------Init new array--------------")
showArray(mass);

var znach = Number(prompt("Number of sub-task."));

switch(znach){
	case 1 : 
	console.log("--------------Delete--------------");
	showArray(byhgaltariya.deleteRabotnik(mass));

	console.log("--------------Add--------------");
	showArray(byhgaltariya.addRabotnik(mass));

	break;
	case 2 :

	console.log("--------------Sort by Zp--------------");
	showArray(byhgaltariya.sortByZp(mass));

	console.log("--------------Summa Zp--------------");
	console.log(byhgaltariya.sumByZp(mass));

	break;
	case 3 :

	console.log("--------------Max Min Averange--------------");
	byhgaltariya.MaxMinAverangeZp(mass);

	break;

	case 4 :

	byhgaltariya.infoAboutOtdel(mass);

	break;

	default: 

	console.log("--------------Sub-task not found.--------------")
	break;
}









