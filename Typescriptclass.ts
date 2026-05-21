class TestClass1
{
   newfunction(){
        console.log("Sample text by Gokul");
   }
}
const obj = new TestClass1();
obj.newfunction()

// ----------------------------------------------------------------

class TestClass2
{
newfunction2(value: number)
   { 
    console.log("The number is " + value);
   }
}
const obj2 = new TestClass2();
obj2.newfunction2(5)

// ----------------------------------------------------------------

class TestClass3
{
   constructor(name: string)
   {
      console.log(name)
   }
   newfunction3()
   {
      console.log("This is a new function")
   }
}
const obj3 = new TestClass3("Gokul")
obj3.newfunction3()

// ----------------------------------------------------------------

class TestClass4
{
   name: string
   constructor(name: string)
   {
      this.name = name
      console.log(name)
   }
newfunction4(age: number)
   {
      console.log(this.name)
      console.log(age)
   }
}
const obj4 = new TestClass4("Gokul")

obj4.newfunction4(20)   

