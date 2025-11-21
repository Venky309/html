// all array elements are same or not
a=[5,6,9]
count=0;
for(i=0;i<a.length;i++)
{
    type=typeof(a[0])
    if(typeof(a[i])==type)
    {
        count=count+1;
    }
}
if(a.length==count)
{
    console.log('same')
}


let p=0;
let n=0;
let zero=0;
let b=[-1,2,4,0,0,9,-1,2,-6]
for( let num of b){
 switch (true) {
      case num==0:
            zero=zero+1;
        break;
         case num<0:
            n=n+1;
        break;
         case num>0:
            p=p+1;
        break;
          
      
    }
}
    console.log(p)
    console.log(n)
    console.log(zero)



// common elements in 2 arrasy
c=[10,20,30,40]
d=[20,30,60,50]
for(i=0;i<c.length;i++)
    {
        for(j=0;j<d.length;j++)
        {
            if(c[i]==d[j])
            {
                console.log(i+"  "+j+" " +c[i])
            }
        }
    }    
