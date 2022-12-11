a=parseInt(prompt("enter a number"));
for(i=1;i<=a;i++)
{
	if(i>1)
	{
		for(j=2;j<=i/2;j++)
		{
			if(i%j==0)
			{
				break;
			}
			else
			{
				console.log(i)
			}
		}
	}
}
 /*var a=parseInt(prompt("enter a number"));
flag=true;
for(i=1;i<=60;i++)
{
	if(a%i==0)
	{
	flag==false;
	}
}

if(flag==true)
{
	alert("It is an prime number")
}
else 
{
	alert("It is not an prime number")
	
}*/

/*var input = document.createElement("input");
input.setAttribute("id","input");
input.placeholder="Enter a range:";
document.body.appendChild(input);
document.write("<br>");

var buton1 = document.createElement("button");
buton1.setAttribute("id","buton1");
buton1.innerHTML="click ME!";
document.body.appendChild(buton1);


buton1.onclick=function()
{
	var rangeInput = parseInt(document.getElementById("input").value);
	
	for(i=2;i<=rangeInput;i++)
	{
		for(j=2;j<i;j++)
		{
			if(i%j==0)
			{
				break;
			}
		}
		if(i==j)
	{
		document.write(i+" is a prime number<br>");
	}
	}
	
}*/