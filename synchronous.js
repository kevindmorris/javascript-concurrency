/*

Synchronous JavaScript:

- In synchronous JavaScript, code is executed sequentially, one statement at a time, in the order in which it appears.
- When a synchronous operation is encountered, the program waits until that operation is completed before moving on to the next operation.
- Synchronous operations can block the execution thread, meaning other code cannot run until the current operation completes.
- Example synchronous operations include reading a file from disk, making a network request, or performing a complex computation.

 */

function greet(name) {
    return "Hello, " + name + "!";
}

console.log("Start");

var message = greet("Kevin");

console.log(message);

console.log("End");
