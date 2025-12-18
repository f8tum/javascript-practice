// spread operator = ... allows n iterable such as an array or string
//                       to be expanded into separate elements

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(...numbers.join(','));
console.log(maximum);
console.log(minimum);

let username = "f8tum";
let letters = [...username].join(' ');
console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
console.log([...fruits, ...vegetables].join(', '));