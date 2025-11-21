/* 
control  construct  TO ALTER A DEFAULT STRUCTURE 
*/
var fruits=['apple','orange','banana','mango','grapes']
console.log(fruits.length);
for(let element of fruits)
{
    console.log('the fruit is :'+element)
}


obj=
{
    name:"venky",
    institute:"gtech",
    edu:"btech",
    age:'22'
}
for(let key in obj)
{
    console.log( `the key is ${key} and value is  ${obj[key]}`)
}
for(let element of obj)
{
    console.log(`the fruit is : ${element}`)
}
