// function = A section of reusable code
//            Declare this once use it as many times as you want
// function can be without return and with return values
function sayHappyBirthday()
{
  console.log("Happy Birthday to you!");
  console.log("Happy Birthday to you!");
  console.log("Happy Birthday dear you!");
  console.log("Happy Birthday to you!");
}

sayHappyBirthday(); // void function ne return value


let a = 5;
let b = 4;

function multiply(c, d) // these are called parameters, placeholders to receive arguments
{
  return a * b;
}

let product = multiply(a, b); // these are called arguments
console.log(product);