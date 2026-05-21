
/* //syntax using object literal
let object_name={
    key1 : value1,
    key2 : value2
} */
let student = {
    name : "Sample",
    age : 27
} 
console.log(student.name,student.age)
console.log("*****************************************************************")

// object literal with method/function
let a = {
    first_name : "Rick ",
    last_name : "Ghram",
    full_name : function()
    {
        console.log(this.first_name + this.last_name)
    }
}
a.full_name()
console.log ("First Name : " + a.first_name)
console.log ("Last Name : " + a.last_name)
//console.log(a.first_name,a.last_name)
console.log("*****************************************************************")

// short hand method - not using function keyword

let studentt = {
    name1 : "Hari",
    age : 25,
    study ()
    {
        console.log(this.name1,this.age)
    }
}
studentt.study()
console.log("*****************************************************************")

// Object literal with parameterized

let student2 = {
    name : "Manoj",
    study(subject)
    {
        console.log(this.name + " is studying " + subject)
    }
}
student2.study("Maths")
student2.study("English")
    console.log(student2.name)
    console.log("*****************************************************************")

    // Method with return

    let student3 = {
    name : "Mahesh",
    study(subject){
        return this.name + " is studying " + subject
    }
    }
    //calling the method and storing the returned values
    let result1 = student3.study("Computer")
    let result2 = student3.study("Science")
    //printing the returned values
    console.log(result1)
    console.log(result2)
    console.log(student3.name)
    
