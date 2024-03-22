/*

Asynchronous JavaScript:

- Asynchronous JavaScript allows multiple operations to be executed concurrently, without waiting for each other to complete.
- Asynchronous operations are typically initiated, and then the program continues to execute other code without waiting for the operation to finish.
- Callback functions, Promises, and async/await are mechanisms used to handle asynchronous operations in JavaScript.
- Asynchronous operations are commonly used for tasks such as fetching data from a server, handling user input/output, or any operation that may take some time to complete.
- Asynchronous operations do not block the execution thread, enabling the program to remain responsive while waiting for tasks to complete.

 */

function greet(name) {
  return "Hello, " + name + "!";
}

console.log("Start");

var message = greet("Kevin");

setTimeout(() => {
  console.log(message);
}, 1000);

console.log("End");
