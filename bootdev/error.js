// there is a built in error object
// we can edit that error object as per our needs

function createError(message) {
  return new Error(`Error: ${message}`);
}

console.log(createError("Invalid Input!"));