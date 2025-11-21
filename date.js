let d=new Date();       // month represnted as 0 to 11 and day same but again week days is 0 to 6 , 24 hrs fromat  
console.log(d)
console.log(d.getFullYear());
console.log(d.getDay());
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());


d.setFullYear()       // change things which are needed
console.log(d)
d.setDate()
console.log(d)
d.setMonth()
console.log(d)
d.setHours()
console.log(d)
d.setTime()
console.log(d)

d.setDate(1)
console.log(d.toString());

d.setSeconds(45)
console.log(d)

console.log(d.toISOString)
console.log(d.toDateString)
console.log(d.toUTCString)
console.log(d.toTimeString)
console.log(d.toLocaleDateString)

