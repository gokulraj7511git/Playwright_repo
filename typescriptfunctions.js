"use strict";
function greet() {
    console.log("Hello, World!");
}
greet();
// Parameterized function
// getting the function while calling the function
function add(a, b) {
    console.log(a + b);
}
add(5, 10);
// with return type
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 10));
// never.
function stop() {
    throw new Error("Something went wrong");
}
stop();
