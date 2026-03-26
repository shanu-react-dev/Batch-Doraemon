//! Loops in JavaScript
//? Loops in JavaScript refers to run the particular block of code based on certain condtion until and unless it is getting false. It is a control flow statement which is used to execute the code again and again based on certain condition.

//! Difference between for, while and do while loop
//? for loop: Used when the number of iterations is known, checking the condition before each run.
//? while loop: Used when the iteration count is unknown, checking the condition before running, meaning it may never execute.
//? do-while loop: Ensures the code block executes at least once, checking the condition after the first execution

//! There are several loops in JavaScript
//? 1. While Loop
let count = 0
// while(count<=10){
//     console.log(count)
//     count++
// }

// while(count <= 100){
//     if(count %9 == 0){
//         console.log(count)
//     }
//     count++
// }
//? 2. do While loop
// let num1 = 10
// do{
//     console.log(num1)
// }while(num1 < 5)
// //? 3. for Loop
// for(let i = 0; i<=1000; i++ ){
//     console.log("I am so sorry", i , "times")
// }

//! Tasks based on our loops
for(let i = 0; i < 4; i++){
    let star = ""
    for (let j = 0; j <4; j++){
        star+="*"
    }
    console.log(star)
}

for(let i = 0; i < 4; i++){
    let star = ""
    for (let j = 0; j <= i; j++){
        star+="*"
    }
    console.log(star)
}