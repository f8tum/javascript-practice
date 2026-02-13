// datastructures(hastables) that  that have key value pairs
// kind of like objects

const map = new Map()
map.set("bertholdt", "shifter");
map.set("reiner", "warrior");
map.set("annie", "shifter");
map.set("bertholdt", "colossal titan");

console.log(map);
map.delete("annie");
console.log(map);