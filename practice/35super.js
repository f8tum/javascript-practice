// super = keyword is used in classes to call the constructor or
//         access the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent
//         to use this keyword you must use super keyword

class Animal
{
  constructor(name, age)
  {
    this.name = name;
    this.age = age;
  }

  sayName()
  {
    console.log(`The name of this animal is ${this.name}`);
  }
};

class Rabbit extends Animal 
{
  constructor(name, age, hopSpeed)
  {
    super(name, age);
    this.hopSpeed = hopSpeed;
  }

  sayDetails()
  {
    console.log(`This rabbit's name is ${this.name}, it is ${this.age} years old, it hops at a speed of ${this.hopSpeed}km/h`);
  }
};

class Fish extends Animal
{
  constructor(name, age, swimSpeed)
  {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  sayDetails()
  {
    console.log(`This fish's name is ${this.name}, it is ${this.age} years old, it swims at a speed of ${this.swimSpeed}km/h`);
  }
};

class Hawk extends Animal
{
  constructor(name, age, flySpeed)
  {
    super(name, age);
    this.flySpeed= flySpeed;
  }

  sayDetails()
  {
    console.log(`This hawk's name is ${this.name}, it is ${this.age} years old, it flies at a speed of ${this.flySpeed}km/h`);
  }
};

const rabbit1 = new Rabbit("rabbit1", 2, 25);
const fish1 = new Fish("fish1", 3, 25);
const hawk1 = new Hawk("hawk1", 4, 30);

rabbit1.sayName();
fish1.sayName();
hawk1.sayName();