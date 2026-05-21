let x=[1,2,3,4,5,6]
console.log(x)
//
let y=Array(1,2,3)
console.log(y)
//

let z=Array(3) // output empty items because 3 storage allocated
//console.log(z)
//z.push(1)
//z.push(2)
//z.push(3)
//console.log(z)
for(let i=1; i<=3;i++)
{
    z.push(i)
}
console.log(z)
console.log(z.length)
//
let fruits=["Banana","Apple","Mango"]
    fruits.sort()
console.log(fruits)
//
let num=[10,8,1,4,15]
//num.sort((a,b)=>a-b)  //a-b ascending order
num.sort((a,b)=>b-a)  //b-a des order
console.log(num)

