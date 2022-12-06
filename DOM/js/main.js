var x=document.createElement("INPUT")
x.setAttribute("type","text")
x.setAttribute("placeholder","enter the number")
x.setAttribute("id","number")
document.body.appendChild(x);
document.write("<br>");
document.write("<br>");

var y=document.createElement("INPUT")
y.setAttribute("type","text")
y.setAttribute("placeholder","enter the range")
y.setAttribute("id","range")
document.body.appendChild(y);
document.write("<br>");
document.write("<br>");
  

var z=document.createElement("button")
z.setAttribute("onclick","table()")
z.innerHTML	="click"
document.body.appendChild(z);
 
function table() 
{
	var number = document.getElementById("number").value;
	var range= document.getElementById("range").value;
	var  i=1;
while(i<=range)
{
  document.write(i+  "  X  "  +number+  "  =  "  +i*number+ "<br>");
i++;
}
}