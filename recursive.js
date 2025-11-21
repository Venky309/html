function fac(n)
{
    if(n==0||n==1)
    {
        return 1;
    }
    return n*fac(n-1);
    
    
}
let fact=fac(4)
console.log(fact);

function fab(k)
{
        num1=1;
        num2=1;
        num3=num1+num2;
        num1=num2;
        num2=num3;
}