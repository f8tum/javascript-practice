// some in-built string methods

let username = "f8tum  ";
username = username.trim() // removes the extra whitespace aft6er or before text

console.log(username.charAt(1));
console.log(username.length);
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.repeat(1));
console.log(username.startsWith("f")); // returns boolean
console.log(username.endsWith(" "));
console.log(username.includes("8"));
console.log(username.replaceAll("8", "a")); // replaces all instances of string with string