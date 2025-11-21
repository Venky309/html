// prime number 
n=2
count=0;
for(i=2;i<n;i++)
    {
        if(n%i==0)
        {
           count=count+1;
        }
    } 
    if(count>0)
    {
        console.log("its not a prime number")
    }
    else
    {
        console.log("its a prime number")
    }