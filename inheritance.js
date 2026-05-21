class Parent {
    show(){
        console.log("Sample text")
    }
}
class Child extends Parent{
    
}
let objchild = new Child ()
objchild.show()

console.log("*********************************************************")

class Animal{
    eat () {
        console.log("Lives in jungle")
    }
}
class cow extends Animal{
    drink(){
        console.log("Drinks water")
    }
}
let objcow = new cow()
objcow.eat()
objcow.drink()

console.log("*********************************************************")

// 3. Parameterized cons
class Person {
    constructor (name){
        this.name=name
    }
    display(){
        console.log("Hello"+ this.name)
    }
}
class child extends Person{
    show(){
        console.log("Parent and child")
    }
}
let objperson = new child(" Friend")
objperson.display()
objperson.show()

console.log("*********************************************************")

// with super keyword

class Parent1 {
    show(){
        console.log("With super key")
    }
}
class Child1 extends Parent1{
show (){
    super.show()
    console.log("Second text from child")
    //  super.show() can be given before or after console.log
}
}
let objchld = new Child1()
objchld.show()

console.log("*********************************************************")

// super inside constructor

class Person2{
    constructor(name){
        this.name=name
    }
}
class Student4 extends Person2{
    constructor(name,mark){
        super(name)
        this.mark=mark
    }
    show(){
        //console.log(this.name,this.mark)
         console.log(this.name+ " " +this.mark)
    }
}
let objnew = new Student4("Gokul",25)
objnew.show()
