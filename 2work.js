//first_task
function initarray(numberofval, avgval, otklonenie)
{
	var arr = [], min = avgval - avgval * otklonenie/100; max = avgval + avgval * otklonenie/100;
	for (var i = 0; i < numberofval; i++)
		arr[i] = (min + Math.random() * (max - min)).toFixed(1);	
	return arr;
}

function mysort(a,b)
{
	return a - b;
}

function avginarr(arr)
{
	var sum = 0;
	for (var i = 0; i < arr.length; i++)
	{
	  sum += Number(arr[i]);
	}
	return (sum / arr.length).toFixed(1);
}

var N = Number(prompt("Enter the number of elements in the array.",0));
if (!isNaN(N)) 
  {
	var s = Number(prompt("Enter averange element.",0));
	if (!isNaN(s))
	  {
	    var p = Number(prompt("Enter a variation in %.",0));
		if (!isNaN(p))
		{
			var myarr = initarray(N,s,p);
			alert(myarr);
			alert(myarr.sort(mysort));
			alert(avginarr(myarr));
		} 

	  }
  }

//second_task

function findx(arr)
  { 
  	 var sum = 0, powerofx = arr.length -1, val = myarr.pop();
  	 for (var i = 0; i < arr.length; i++)
  	 {	
  	 	sum += arr[i] * Math.pow(val,powerofx);
  	 	powerofx--;
  	 }
  	 return sum;
  }

var myarr = prompt("Enter an array separated by commas(1,2,3,..,x).",0).split(",");   
  alert(findx(myarr));	 

//third_task

function findminute(currenttime)
{
	var endofday = new Date();
	endofday.setHours(23,59,59,59);
	return Math.round((endofday.getTime() - currenttime.getTime())/60000);
}

var time_ = new Date();
alert(findminute(time_));