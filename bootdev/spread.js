// spread operator
// unpacks an iterable value into individual elements
// like arrays, objects or strings
// mostly used to
// Copy values
// Merge values
// Pass multiple elements as arguments
// Construct new arrays or objects

// merges arrays into a single one
const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8];

const merged = [...a, ...b];

merged.forEach((value) => console.log(value))

// Replaces the 
const user1 = {
  name: "f8",
  age: "1"
};

const user2 = {
  name: "tum",
  age: "9",
  occupation: "student"
}

const user = {...user1, ...user2};
console.log(user);

// turns string into an array of characters
const s1 = "f8";
const s2 = "tum";

const s = [...s1, ...s2];
console.log(s);