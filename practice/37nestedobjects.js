// nested objects = objects inside of objects
//                  Allows you to represent more complex datat structures
//                  Child object is enclosed by a parent object

//                  Person{Address{}, ContactInfo{}}
//                  ShoopingCart{Keyboard{}, Mouse{}, Monitor{}}

class Person
{
  constructor(name, age, ...address)
  {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
};

class Address 
{
  constructor(street, city, country) 
  {
    this.street = street;
    this.city = city;
    this.country = country;
  }
};

const person1 = new Person("Spongebob", 30, "124 Conch St.",
                                            "Bikini Bottom",
                                            "Int. Waters")

const person2 = new Person("Patrick", 37, "128 Conch St.",
                                            "Bikini Bottom",
                                            "Int. Waters")

const person3 = new Person("Sandy", 345, "126 Conch St.",
                                            "Bikini Bottom",
                                            "Int. Waters")

console.log(person1.name);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);