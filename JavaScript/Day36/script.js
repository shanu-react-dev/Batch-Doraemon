//! Scope in JavaScript
//? Scope in JavaScript represents of accessibility or visibility of a variable in the files. There are three scopes in JavaScript. 
//? 1. Global Scope:- Variables can be accessed from anywhere in the file.
//? 2. Block Scope:- Variables declared inside the blocks such as if else, loops etc. Can be accesed inside the block itself.
//todo Only variables declared with let and const keyword will follow block scope.
//? 3. Local scope or Function Scope:- Local Scope in JavaScript represents a variable which has been declared inside a function can be accessible inside the functions itself, known as local or function scope.
//todo Each and every variable follows local scope whether it is created using let, var or const.

// console.log(myName)
// var myName = "Hi I am Shanu!!"
// console.log(myName)

// console.log(a)
// var a = "Shanu"
// console.log(a)
// console.log(b)
// var b = "Shiva"
// console.log(b)
// // console.log(c)
// let c = "Sundari"
// console.log(c)
// let d = "Shakeela"
// console.log(d)
// let e = "Mala"
// console.log(e)
// // console.log(f)
// const f = "Leila"
// console.log(f)

// var num1 = 7
// console.log(num1)

// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

// if(true) {
//     var a = "Sheila"
//     console.log(a)
//     let b = "Mala"
//     console.log(b)
//     const c = "Shakeela"
//     console.log(c)
// }
// console.log(a)
// console.log(b)
// console.log(c)

// let myData = "Shanu"
// console.log(myData)
// function printMyName () {
//     var firstName = "Rohit"
//     console.log(firstName)
//     let secondName = "Rahul"
//     console.log(secondName)
//     const thirdName = "Shami"
//     console.log(thirdName)
// }
// printMyName()


// function MyName () {
//     let favPlayer = "Amarjeet"
//     console.log(favPlayer)
//     console.log(myData)
//     return "India is a good country!!"
// }
// MyName()


//! Closures in JavaScript
//? A closure is a function that remembers and accesses variables from its outer scope even after the outer function has finished executing.

//? A closure is a function or mechanism by which we can access a variable which has been declared inside parent function. It is created when we are accessing a variable inside a child function which has been declared inside parent function.
// let mydata = "Shanu"
// console.log(mydata)
// function Parent () {
//     let amount = "5 lac"
//     function Child () {
//         console.log(amount)
//     }
//     return Child
// }

// let returnedData = Parent()
// console.log(returnedData)
// returnedData()

let a = 7
function firstFun () {
    let b = "Radha"
    console.log("I am first function")
    return b
}

firstFun()
function secondFun () {
    console.log("I am second Function")
    return firstFun()
}
secondFun()