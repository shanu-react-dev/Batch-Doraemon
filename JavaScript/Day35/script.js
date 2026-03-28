// greet()

//! Function
//? Function is a piece of block of Reusable code which is used to perform some specific tasks. We can create a function using function keyword followed by function name followed by parentheses followed by block of codes. In JavaScript we have various functions. 

//! Named Function / Function Declaration / Function Definition
//? A function which is defined along with the name is known as Named Function. It supports hoisting.
function greet () {
    let a = 0
    while(a <= 10){
        console.log(a)
        a++
    }
}

//! Function Invoking or calling
//? Function invoking refers to calling a function and getting the output returned or printed by function.
// greet()

// greet()

// greet()

//! Hoisting
//? Hoisting is a mechanism by which we can call a function or variable or class at the top of their scope. Means we can call the function, variable or classes before its declarations.

//? Parameters and Arguments
//? The parentheses used after the declaring of the function name is known as Parameter block. It is a block where all the passed arguments resides. Here we will have variables to store each and every arguments value. 

//? The parentheses used while calling the function is known as arguments block by using this block we can send some value to the functions for expected output. Here we can pass any value whether it is primitive or non primitive.

function sumOfTwoVariables (firstValue, secondValue) {
    console.log("Sum of Two values is: ", firstValue + secondValue)
}

// sumOfTwoVariables(20, 40)
// sumOfTwoVariables()// NaN: By default the parameter will have the value as undefined and here we have two parameters in the function we are trying to get sum of two undefined value so it will return NaN.
// sumOfTwoVariables(10, 100, 20, 200)

function evenOrOdd (a) {
    if(a % 2 === 0){
        console.log("It is an even number")
    }else{
        console.log("It is an odd number")
    }
}
// evenOrOdd(9)

function fullName (firstName, lastName) {
    // console.log(firstName + lastName)
    if(!lastName || typeof lastName === "boolean"){
        console.log(firstName)
    }else{
        console.log(firstName + lastName)
    }
}
// fullName("Amarjeet", null)
// fullName("Shahil" , NaN)
// fullName("Shahil" , null)
// fullName("Shahil" , "")
// fullName("Shahil" , undefined)
// fullName("Shahil" , false)
// fullName("Shahil" , true)

//! Anonymous Function
//? A funciton created without using any name that is anonymous function.

//  function () {
//     console.log("Hii I am an Anonymous Function...")
// }

//! Function Expression
//? A function stored inside a variable is known as Function expression. we can call this functions using their variable names.
let anonymousFun = function () {
    console.log("Hii I am an Anonymous Function...")
}

// anonymousFun()

let namedFun = function myName () {
    console.log("Hii this is Shanu!!")
}
// myName()
// namedFun()

//! Arrow Function
//? Arrow function is a shorthand function by which we can create a function without using function keyword. It was introduced in ES6. It is used to optimize the syntax.

let myArrowFun = () => console.log("Hi this is an arrow function")
myArrowFun()

let anotherArrow = () => {
    console.log("Hii this is also an arrow function")

    return "Lord Murugan"
}

let returnedValue = anotherArrow()
console.log(returnedValue)

//! implicit return: Returning a value from a function without using return keyword is known as implicit return.
let implicitReturn = () => "Hii this is Shanu"
let returnedData = implicitReturn()
console.log(returnedData);

//! IIFE Function
//? IIFE stands for Immediately Invoked Function Expression. It will get executed as soon as it is declared. It will be executed only once in the entire webpage lifecycle.

(function () {
    console.log("I am an IIFE function")
})();

(function () {
    console.log("I am an IIFE function 2.0")
}())

//! Nested Function
//? A function declared inside a function is known as Nested Function.
function Parent(){
    console.log("I am Parent Function")
    function Child () {
        console.log("I am Child Function")
    }
    Child()
}
Parent()

//! Function Currying
//? Function currying in JavaScript is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of nested functions, each taking a single argument at a time.
//? Function currying is a technique by which we can call a nested returned function using one extra parentheses.
function firstFun () {
    console.log("I am first function")
    function secondFun () {
        console.log("I am second Function")
    }
    return secondFun
}
firstFun()