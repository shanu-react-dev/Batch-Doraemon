console.log("I am Shanu....")

//! Arguments object
//? In JavaScript, the arguments object is a built-in, array-like object automatically available inside all non-arrow functions. It contains the values of all arguments passed to a function, allowing you to access them even if they weren't explicitly named in the function signature/parameter.

//? Arguments object refers to an array containing the entire argument sent while calling the function. It is an array like object not exactly an object.
// function greet (name1, name2) {
//     // console.log(name1, "Good Afternoon")
//     // console.log(name2, "Good Afternoon")
//     // console.log(arguments)
//     for(let i = 0; i<arguments.length; i++){
//         console.log(arguments[i], "Good Afternoon")
//     }
// }

// greet("Shanu", "Shakeela", "Sundari", "Sheila", "Mala", "Leila", "Mila")


//! what is callee: ƒ, Symbol(Symbol.iterator): ƒ in our arguments object and what is the use of it???
//! what is lexical scoping
//! This keyword will be there or not inside our arrow function.

// function sumOfallArgs () {
//     console.log(arguments)
//     let sum = 0
//     for(let i =0; i<arguments.length; i++){
//         sum+=arguments[i]
//     }
//     console.log(sum)
// }
// sumOfallArgs(1,2,3,4,5,6,7,8,9,10)

let myArrow = () => {
    console.log(arguments)
}
myArrow("Shanu", "Tinku", "Rinku", "Minku")
