/* Syntax:
class classname {} */
                          // class without method
class student {
    name = "Gokul"
}
let obj=new student ()
console.log(obj.name)
console.log("**************************************")

                          // class with method
class student1{
    name = "Varun"
display()
{
    console.log(this.name)
}
}
let obj1  = new student1()
obj1.display()
console.log("*************************************************")
//                     object with passing values

class student2 {
constructor(name){
    this.name=name
}
display(){
    console.log(this.name)
}
}
let obj2=new student2("Rahul")
obj2.display()
console.log("*******************************************************")

//                    constructor with multiple properties

class student4{
    constructor(name,age)
    {
this.name=name
this.age=age
    }
    display(){
        console.log(this.name, this.age)
    }
}
let obj4=new student4("Vishnu",28)
let obj41=new student4("Unni",29)
obj4.display()
obj41.display()
console.log("*********************************************************")

//

class student5{
    get college()      // get is a keyword used to retrive data/ when using get method return keyword use
    {
        return "abc college"
    }
}
let obj5 =new student5()
console.log(obj5.college)
