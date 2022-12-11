
//adding numbers in while loop

/*var numbers=4567;
sum=0
while(numbers>0)
{
rem=numbers%10
sum+=rem
numbers=(numbers-rem)/10;
}
console.log(sum);*/

//adding numbers in even
 /*var n=45638
sum=0
sum1=0
while(n>=0)
{
var rem=n%10
if(rem%2==0)
{
sum=sum+rem;
}
else
{
	sum1=sum1+rem;
}
n=(n-rem)/10;
}
console.log(sum,sum1);

*/
var user1={
	name:"pavi",
	age:23,
	getname:function()
	{
		console.log(this.username is +" "+this.name);
	}
	
}
user1.getname()

var user2={
	name2:"nithya",
	age2:22,
}
var x=user1.getname.bind(name);
x();




















