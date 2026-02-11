// Setter and getters are used to safely return class elements

class User {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set age(value) {
    if (value < 0) 
      throw new Error("Age can't be less than 0");
    this._age = value;
  }
}

const user1 = new User("f8tum", 19);
user1._age = -1;
console.log(user1);