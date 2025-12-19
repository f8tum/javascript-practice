// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          lik local methods or 

class User 
{
  static userCount = 0;

  constructor(username)
  {
    this.username = username;
    User.userCount++;
  }

  static getUserCount()
  {
    console.log(`There are ${User.userCount} users`);
  }

  sayHello()
  {
    console.log(`Hello, my username is ${this.username}`);
  }
};

const user1 = new User("spongebob");
const user2 = new User("patrick");
const user3 = new User("sandy");
user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();