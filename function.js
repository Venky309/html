/* Function can be created in many ways in java function doesnot need to have object but here we need to cal and create object
function keyword 
hoisting is possible only for function keyword
without calling function or calling it before initialization can work in function keyword

*/
function display()
{
    console.log("function with function keyword")
}
display();

// function expression ananymous function
let f1=function()
{
    console.log("function with function expression")
}
f1();

//arrow function
let f2=()=>{
    console.log("Function declaration using arrow function")
}


// function with parameter and with return type
function fun(str)
{
    return str 
}
let value=fun("JS")
console.log(value)

//function with no paramter but with return type
let fun1=function()
{
    return "JA";
}
console.log(fun1());

// function with paramter but without return type
let arr=(name)=>{
    console.log(`Hi ${name}`)
}
arr("venky")



