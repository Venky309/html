//creation
let m=new Map([['name','anu'],['age',20]])
console.log(m)

obj={
    name:'maqnu',
    age:20
}

//set()
m.set('city','banglore')
console.log(m)

//updating
m.set('city','mandya')
console.log(m)

// delete()
console.log(m.delete(20))
console.log(m)

//has()
console.log(m.has('age'))

//size()
console.log(m.size)


//clear()
//m.clear()
console.log(m)


//values()
//keys()
//entries
//foreach
//for of
for(k of m) {

    console.log("rtytre")
}

console.log(m.values())
console.log(m.keys())
console.log(m.entries())
