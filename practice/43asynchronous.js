// synchronous = Executes line by line in a sequential manner
//              code that waits for an operation to complete

// asynchronous = Allows multiple operations to be performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue
//                I/O operations, network requests, fetching data
//                Handled with: callbacks, promises, Async/Await
//                Example use: setTimeout()

function f1(callback) 
{
  setTimeout(function () {console.log("Task 1");
                          callback()}, 3000);
}

function f2()
{
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}

f1(f2);