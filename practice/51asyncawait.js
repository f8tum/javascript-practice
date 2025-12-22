// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

//               Allows you to code in a synchronous manner
//               Async does not have resolve or reject parameters
//               Everything after await is placed in an evemt queue

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

async function doChores()
{
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You Finished all the chores");  
  } 
  
  catch (error) {
    console.log(error);
  }
}

doChores();