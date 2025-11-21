console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)

num=Infinity;
console.log(Number.isFinite(num))

num=234567654321.234;
console.log(Number.isInteger(num))
console.log(Number.isNaN)

num='45.56qwert';
console.log(Number.parseFloat(num))
num=45.56
console.log(Number.parseInt(num))   // only starting numbers  will be taken

console.log(parseFloat(num))
console.log(parseInt(num))



//to round up we use toPrecision and toFixed

nu=12.345;
console.log(nu.toPrecision(4));     // include whole not only decimal part

console.log(nu.toFixed(1));         // only decimal part is counted and rounded off

