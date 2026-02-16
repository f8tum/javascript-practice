// why we use asynchronous code
// start a task that takes time
// wait for that to finish and prevent crashes
// use its result

// 1. oldest way: Callbacks
function resolveAfter2Seconds(callback) {
  setTimeout(() => {
    callback("resolved after 2 seconds");
  }, 2000);
}

resolveAfter2Seconds((result) => {
  console.log(result);
});

// 2. newer way: Promises with .then .catch

function resolveAfter3Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved after 3 seconds");
      reject("reject");
    }, 3000);
  });
}

resolveAfter3Seconds()
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });

function resolveAfter4Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved after 4 seconds");
    }, 4000);
  });
}

// 3. Async functions with await we use try catch instead of .then and .catch
async function asyncCall() {
  try {
    const result = await resolveAfter4Seconds();
    console.log(result);
  } 
  catch (error) {
    console.log(error);
  }
}

asyncCall();