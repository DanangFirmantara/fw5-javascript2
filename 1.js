// const addition = (num1,num2) =>{
//     const total = num1 + num2
//     console.log(total)
//     // return total
// }

// console.log(addition(10,15))
// // console.log(addition())

// function sayHello (name,callback){
//     let greeting = `Hello ${name}`
//     callback(greeting)
// }

// function sayGreeting(quote){

// }

// function x(param1){
//     let angka = 0
//     while (param1 > 0){
//         // console.log (param1)
//         angka += param1
//         param1--
//     }
//     console.log(angka)
// }

// const x = (param1) => {
//     let angka = 0
//     while (param1 > 0){
//         // console.log (param1)
//         angka += param1
//         param1--
//     }
//     console.log(angka)
//     return angka
// }

// console.log(x)
// console.log(typeof x(5))

// () disebut invoke

// const cat = {
//     firsName : "Katy",
//     lastName : "Cute",
//     fullName : function (surname){
//         return  this.firsName + (surname ? ` ${surname} ` : ' ') + this.lastName
//     }
// }
// console.log(cat.fullName("jancok"))

const nilai = [9,8,6,3,4,5]

// nilai.sort()

// const fin = nilai.map(function(num){
//     // return idx + ". " + num + "..." + "\n"
//     return num + 10
// })

// const fin = nilai.filter(function (num){ return num > 5 && num <9})

// console.log(fin)

console.log(nilai)

nilai.push(200)
const fin = nilai.sort()

console.log(fin)