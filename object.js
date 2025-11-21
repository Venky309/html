//object literal
obj=
{
    name:"venky",
    institute:"gtech",
    edu:"btech",
    age:'22'
}
//instance of an object
let obj1=new Object;

//functional constructor
function fun(name)
{
    this.name=name;
}
let f1=new fun('venky')
console.log(f1.name)
console.log(obj['name'])

obj1.name='anu';
obj1.edu='gtech';
console.log(obj1)

obj1['age']=35000;

console.log(obj1)

//updating
obj1['name']='developer';
console.log(obj1)

delete obj1.name;
console.log(obj1)

console.log(Object.keys(obj1))
console.log(Object.values(obj1)) 
console.log(Object.entries(obj1))    //array of keys

