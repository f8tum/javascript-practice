// Variables are containers that stre values
// 1. Declaration    let x; with let, var, and const
// 2. Assignment     x = 100;
// Adding semicolons is optional 
// Printing can be done using `` '' ""
// Data types are number, string, boolean, BigInt, Null, NaN

a = 2; // bad practice
var b = "Hello"; // var is function scoped 
let c = false; // let is block scoped
const d = 100; // const is block scoped can't be reinitialized

console.log(`${a} ${b} ${c} ${d}`);
console.log('\n');
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);