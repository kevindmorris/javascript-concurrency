/*

JavaScript Promise:

A JavaScript Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. It allows you to handle asynchronous operations more easily by providing a more organized and readable syntax compared to traditional callback-based approaches.

Promises have three states:

Pending: Initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise has a resolved value.
Rejected: The operation failed, and the promise has a reason for failure.

A promise can be created using the Promise constructor, which takes a function with two arguments, resolve and reject. Inside this function, you perform your asynchronous operation, and when it's done, you call resolve if it was successful or reject if it failed.

*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject("Error: Random number is less than or equal to 0.5");
    }
  }, 1000);
});

promise
  .then((result) => {
    console.log("Promise resolved with value:", result);
  })
  .catch((error) => {
    console.error("Promise rejected with error:", error);
  });
