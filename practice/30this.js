// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
  name: "Spongebob",
  favFood: "Hamburgers",
  sayHello: function print()
            {
              console.log(`Hi, I am ${this.name}`);
            }
};

person1.sayHello()