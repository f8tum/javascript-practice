// objects = objects are data types in JS not the same as OOP objects and classes
//           it is like a struct from c++ with more features
//           have property value pairs
//           instead of making many variables we can group all of them into one
//           it helps organise our code

const product = 
{
  name: "socks", // name: is called the property "socks" is value
  price: 1080,
  // nested object
  rating: 
  {
    stars: 4.5,
    count: 87,
  },
  fun: function f() // function inside an object is called a method
  {
    console.log("Functions inside objects");
  }
};

product.name = "cotton socks";
console.log(product.name);

product.color = "white";

delete product.price;
console.log(product);

console.log(product.rating.count);
console.log(product.fun());