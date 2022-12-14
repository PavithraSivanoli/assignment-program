function getvowels(string){
		count=0;
		a=string
		for(i=0;i<=string.length-1; i++)
		{
			if ((a[i]=="a"||a[i]=="e"|| a[i]=="i"||a[i]=="o"||a[i]=="u")||(a[i]=="A"||a[i]=="E"|| a[i]=="I"||a[i]=="O"||a[i]=="U"))
			{
				count+=1;	
		    }
	  }
		return count;
	}
	b=getvowels(prompt("enter a string"));
	c=count;
	console.log(c);
	