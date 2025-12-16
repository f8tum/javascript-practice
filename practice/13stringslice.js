// string slicing = creating a substring
//                  string.slice(start, end);

let name = "GitHub";
let first = name.slice(0, 3);
console.log(first);
console.log(name.slice(-3));

let email = "abc@gmail.com";
let start = email.slice(0, email.indexOf("@"))
console.log(start);
