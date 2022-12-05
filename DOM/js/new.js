function generate()
{
var number=document.getElementById("new");
var a=document.getElementById("range").value;
result.innerHTML='';
for (i=1;i<=a;i++)
{
result.innerHTML+=table + "x" +i+ "=" +table*i+ "<br>"
document.write(i);
}
}


