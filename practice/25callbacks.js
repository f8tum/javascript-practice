// callback = a function that is apssed as an argument
//            to another function
//            used to handle asynchronous operations
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases

sayHello(sayGoodbye);

function sayHello(callback)
{
  console.log("hello");
  callback();
}

function sayGoodbye()
{
  console.log("goodbye");
}