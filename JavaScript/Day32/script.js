//! Difference Between var, let and const
// var userName;
// console.log(userName); // undefined
// userName = "Shanu";
// console.log(userName); // Shanu
// var userName = "Shanu";
// console.log(userName);
// var userName;
// console.log(userName);
// userName = "Samantha";
// console.log(userName);
// var userName = "Shreya Ghoshal";
// console.log(userName);

// let age;
// console.log(age); //undefined
// age = 20;
// console.log(age);
// let isMarried = true;
// console.log(isMarried);
// // let age
// age = 25;
// console.log(age);

// let age = 20;
// console.log(age);

// const gender = "male";
// gender;
// console.log(gender);
// const gender
// gender = "female";
// console.log(gender);
// const gender = "Male";
// console.log(gender);

//! Conditional Statements
//? Conditional statement is a way to show or return the output based on certain condition. We can perform condtional statements in various ways. such as if, if else, else if, nested if else, switch
//? if statement
//? The if statement is also known as true block statement means if the condition is true it will execute the block of codes.
let isSoftwareDeveloper = false;
if (isSoftwareDeveloper == true) {
  console.log("I am a software Developer..");
}

//? if else
//? Here we have two block of codes if is known as true block and else block refers to false statement blcok of codes
if (isSoftwareDeveloper === true) {
  console.log("I am a Software Developer");
} else {
  console.log("I am not a developer");
}
