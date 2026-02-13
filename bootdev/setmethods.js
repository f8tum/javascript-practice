// set methods
// use weaksets to prevent memory leaks
const heroes = new Set(["eren", "mikasa", "armin"]);
const villains = new Set(["eren", "reiner", "bertholdt", "annie"]);

console.log(heroes.intersection(villains));
console.log(heroes.union(villains));
console.log(heroes.difference(villains));
console.log(villains.intersection(heroes));