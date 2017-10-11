//calculator
function calc(value_1, sign_, value_2)
{
	switch(sign)
	{
		case "+": return value_1+value_2; break;
		case "-": return value_1-value_2; break;
		case "*": return value_1*value_2; break;
		case "/": return value_1/value_2; break;
		default: return false;
	}
}

var value1 = Number(prompt("First numeric value.",0));
if (!isNaN(value1)) 
  {
	var sign = prompt("Enter operation.");
	if ((sign == "+") || (sign == "-") || (sign == "*") || (sign == "/"))
	  {
	    var value2 = Number(prompt("Second numeric value.",0));
		if (!isNaN(value2)) alert(calc(value1,sign,value2));
	  }
  }

//balans skobok
function check(str)
{
	var count = 0;
	for (var i = 0; i < str.length; i++)
	{
		if (str[i] == "(")  count++ ;
		if (str[i] == ")")  count-- ;
		if (count < 0) return false;
	}
	if (!count) return true
	   else return false;
}

var mystr = prompt("Enter string.","test strign (( ))");
if (check(mystr)) alert("Balans sobluden."); 
	else alert("Balans ne sobluden.");