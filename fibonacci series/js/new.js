//fibonacci series
var fibo=prompt("enter a number");
var f1=0;
var f2=1;
var f3=0;

for(i=0;i<fibo;i++)
{
	document.write(f1 +"<br>");
	f1=f2;
	f2=f3;
	f3=f1+f2;
}
