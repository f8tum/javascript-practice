// closure = a function inside another function
//           allows private variables and state maintainance
//           Used frequently in JS frameworks: Angular, React and Vue

function outer()
{
  let message = "Hello";
  function inner()
  {
    console.log(message);
  }
  inner();
}

outer();