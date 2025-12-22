// Promise = An object that manages asynchronous operations
//           wrap promise object around {asynchronous code}
//           new Promise((resolve, reject) => asynchronous code)

// Do these in order
// 1. Walk the dog
// 2. Clean the kitchen
// 3. Take out the trash

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked)
        resolve("You walk the dog 🐶");
      else 
        reject("You did not walk the dog 🐶")
      
    }, 1500);
  })
}

function cleanKitchen() 
{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You clean the kitchen 🧹");
    }, 2500);
  })
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You take out the trash 🚮");
    }, 500);
  })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the tasks");});