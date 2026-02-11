// Inheritance in js works as prototypes and not on classes based like c++, java or python
// an object inherits from its prototype

const pureTitan = {
  name: "Enen's mom",
  speak(msg) {
    console.log(`titan noises`);
  },
};
pureTitan.speak();

//sets the beastTitan objects' prototype as pureTitan
const beastTitan = Object.create(pureTitan);

console.log(beastTitan.name);

beastTitan.name = "Zeke";
beastTitan.speak = function() {
  console.log(`${this.name} says, I am the beast Titan`);
}

beastTitan.speak();