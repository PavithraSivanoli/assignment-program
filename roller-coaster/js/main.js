var age=prompt("enter the age");
var permission=prompt("enter the permission");
if ((age>=16)&&(age<=50)){
{
	alert("allow to get ticket");
}
 if((age<16)&&(permission=="pass"))
{
	alert("parent permission allowed")
}
else if((age<16)&&(permission=="fail"))
{
	alert("parent permission not  allowed")
}
else 
{
	alert("not permission to get ticket");
}

/*var age=prompt("enter the age");
var permission=prompt("enter the permission");
switch((age>=16)&&(age<=50))
{
	case 1:
	{   
	alert("allow to get ticket");
	}
	case 2:
	{
		alert("not allow to get ticket");
		
		
