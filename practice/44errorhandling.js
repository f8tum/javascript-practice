// Error = an object that is created to represent a problem that occurs
//         errors often occur with user input or establishing a connection

// We can handle them by:
// try{} = Encloses code that might potentially cause an error
// catch{} = Catch and handle any thrown errors from try{}
// finally{} = (optional) code that always executes, mostly for cleanup

try
{
  // Network errors
  // Promise rejection
  // Security errors
  const dividend = Number(window.prompt("Enter a dividend"));
  const divisor = Number(window.prompt("Enter a divisor"));

  if (divisor == 0)
    throw new Error("You can't divide by zero");
  if (isNaN(dividend) || isNaN(divisor))
    throw new Error("Values must be a number");

  const result = dividend / divisor;
  console.log(result);
}

catch(error)
{
  console.error(error);
}

finally
{
  // close files
  // close connections
  // release resources
  console.log("This always executes");
}

console.log("You have reached the end!");