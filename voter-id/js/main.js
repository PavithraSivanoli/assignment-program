var age=parseInt(prompt("enter age value"));
var voterId=(prompt("enter voterId Number value"));
if(age>18)
{
	if(voterId=="true")
	{
		alert("Eligible for vote");
	}
	
	else
	{
		alert("Not Eligible");
	}
}
else
{
	alert("Not vote eligible");
}