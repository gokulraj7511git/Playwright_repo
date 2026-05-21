function greet():void{ //typescript can automatically identify the return type.
console.log("Hello, World!")
} 
greet() 

// Parameterized function
// getting the function while calling the function

function add(a: number, b: number) { // Here we are specifying the types of parameters and return type.
console.log(a + b)

}
add(5, 10)

// with return type
function multiply(a: number, b: number) { 
return a * b
}
console.log(multiply(5, 10))

// never.
function stop():never{  // this function will throw an error and never return a value. so we use the 'never' type to indicate that it will never return.
    throw new Error("Something went wrong error .....")
}
stop()
