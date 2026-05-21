// function function_name()
// {
    // code to execute
//}

function display()
{
    console.log("Hello")
}
display()
//
function add(a,b)
{
    console.log(a+b)
}
add(3,4)
//
function addition(a,b)
{
    return a+b
}
let sum= addition(8,4)
console.log(sum)

// Anonymous Function

let sum1 =(a,b) => a+b
console.log(sum1(4,2))