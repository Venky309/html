s=new Set();
s=new Set([1,2,3,4,5]);
console.log(s.size);
console.log(s.has(1));
s.add(192);
console.log(s);
s.delete(3);
console.log(s);
console.log(s.values());
s.forEach(element => {
console.log(element)
});
s.clear();