var number = prompt("Enter a positive integer");
//var  numberOfDigits = number;
var sum = 0;
var  temp = number;
//.length while loop
var a=number;
var count=0;
while (a>0)
{
var rem=a%10;
a=(a-rem)/10;
count++;    
}	
while (temp > 0) 
{
    var remainder = temp % 10;
    sum += remainder ** count;
    temp = parseInt(temp / 10); 
}
if (sum == number) 
{
    console.log("It is an Armstrong number");
}
else 
{
    console.log("It is not an Armstrong number");
}
