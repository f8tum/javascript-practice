// data structure that removes duplicates
const set = new Set();

set.add("bertholdt");
set.add("annie");
set.add("reiner");
set.add("bertholdt");

console.log(set);

set.delete("annie");
console.log(set);