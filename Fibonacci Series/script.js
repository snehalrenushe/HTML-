
var a=0,b=1,result,i;
var no=parseInt(prompt("Enter a Number to find Fibonacci series"));


	for(i=1;i<=no;i++)
	{
		result = a+b;
		document.write("<br>"+result);
		a=b;
		b=result;	
	}