// litteral approach
let a=[12,34,5,68];
console.log(a)
console.log(a.pop())
console.log(a.push())
console.log(a)
//constructor


//push(ele)
//unshift(ele)
//shift()
//indexOf(ele)-returns the index of element 
//includes(ele)

//sort()- to sort array element
//reverse() - reverse the elenments of an array
//concat() - jopins multiple arrays 
//join()- converts array to a string 

let b=[10,20,30,40,50,60,70];
console .log(b.pop())
console.log(b.push(100))
console.log(b.unshift(200))
console.log(b.shift())

a.indexOf(30)
a.includes(40)

let c=[10,20,22,110,50,1111]
console.log(c.sort())
// taking as string so getting wrong order lexico 
// to overcome that we use arrow function or function expression
console.log(c.sort(function(a,b){
   return a-b;
    
}))

console.log(c.length)
 
//splice() -used for insertion ,deletion, and replacement
// sysntax
// array.splice(startind, deletecount,ele1,ele2)
//slice() extracts the portion of an array
// sysntax array.slice[startindex , end index)
a.splice(1,2,'js')
a.splice(2,0,20,)

a=[10,20,30,40,50]
console.log(a.slice(2,3))


//for each() - used to iterate an array and execute a function on each element
 a.forEach(function(ele , index){
        console.log(`the ${index}array element is ${ele}`)
 })

 function display(ele)
 {
    console.log(ele)
 }
 a.forEach(display);

 res=a.map((ele)=> {return(ele*ele)});
 console.log(res)
 console.log(a)

 a.forEach(function(ele , index){
       l= [(ele*ele)];
       console.log(typeof(l))
 })

//filter () - use to filter elementss from an arraay based on condition
a=[23.22,98,56,4,3056];
res=a.filter((ele)=>
{
    return ele%2==0
})
console.log(res);

//reduce()  used to reduce an array  to a single value by applying function on each element
a=[23,67,98,24,10,55]
re=a.reduce(function(accumulator,currentValue){
    return (accumulator + currentValue);
}) 
console.log(re)

s="Java Script"
console.log(typeof(s))
// at() charAt(3) CharCodeAt(3) indexOf() substring() substr() lastIndeexOf() padStart() padEnd() replace( , ) replaceAll( , ) trim() trimStart()
// trimEnd()  startsWith() endsWith() split() slice() concat() toLower() toUpper() includes()
console.log(s.at(3))
console.log(s.charAt(3))
console.log(s.charCodeAt(3))
console.log(s.substring(3))
console.log(s.substr(3))
console.log(s.lastIndexOf())
console.log(s.padStart(13,'w'))
console.log(s.padEnd(13,'r'))
console.log(s.replace('a','v'))
console.log(s.replaceAll('a','A'))
console.log(s.at(3))
console.log(s.at(3))
console.log(s.at(3))
console.log(s.at(3))
console.log(s.at(3))

a="HTML"
console.log(a.split(''));
a="java script";
a.split(' ')
a.slice(2,4)
