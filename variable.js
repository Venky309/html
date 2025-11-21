var name='anu';
console.log(name)
// 

// var is redeclaration allow const let wont allow thw redeclaration SyntaxError: Identifier 'age' has already been declared 
// reassignment is possible for var , not for const, not for let

//console.log(a);
//let a;

console.log(b)
var b;          // before declaration var stores undefined value  after declaration it will give value  hoisting (temporary dead zone let and const)

//console.log(b)
//const c;


for(var i=1;i<=5;++i)       // var is functionaal scope but const and let block scope 
{
    console.log(i);
}
console.log(i);

for(let i=1;i<=5;++i)       
{
    console.log(i);
}
console.log(i);

for(const i=1;i<=5;++i)       
{
    console.log(i);
}
console.log(i);

for(i=1;i<=5;++i)       
{
    console.log(i);
}
console.log(i);

function fun()
{
    const num=10;

}
console.log(num)
