function createInvalidAgeError(message) {
  return {
    name: "InvalidAgeError",
    message: message
  };
}

function registerUser(name, age) {
  if (age < 0 || age > 120) {
    throw createInvalidAgeError("Age must be between 0 and 120");
  }
  return `${name} registered successfully`;
}

try {
  const result = registerUser("Parth", -5);
  console.log(result);
}
catch (error) {

  if (error.name === "InvalidAgeError") {
    console.log("Validation Error:", error.message);
  } 
  else {
    console.log("Unknown Error:", error);
  }

}
finally {
  console.log("Registration attempt finished");
}