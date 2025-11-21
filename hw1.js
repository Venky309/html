// finding how many times a letter in a string using functions 
s="give me a book which i can note madam speakings "
k=s.split('a')
console.log(k.length-1)
// without functions
count=0
for(i=0;i<s.length;i++)
{
    if(s[i]=='a')
    {
        count=count+1;
    }
}
console.log(`the a's are `+count)


// domain of gmail using functions
t="buchepallivenkatesh@gmail.com"
u=t.split('@')
console.log(u[1])

// without using functions
for(i=0;i<t.length;i++)
{
    if(t[i]=='@')
    {
        for(j=i+1;j<t.length;j++)
        {
           console.log(t[j])
        }
    }
}

//convert first letter of a sentenece into uppercase
a="i am the king of my own kingdom"
b=a.split(" ")
for(i=0;i<b.length;i++)
{
    p=b[i][0];
    n=p.toUpperCase();
   b[i][0].replace(p,n)
   console.log(b[i][0])

}


//reverse a string using string methods
rev=""
e="venky"
for(z=e.length-1;z>=0;z--)
{
    rev=rev+e[z];
}
console.log(rev)