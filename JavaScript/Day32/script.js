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
// let isSoftwareDeveloper = false;
// if (isSoftwareDeveloper == true) {
//   console.log("I am a software Developer..");
// }

//? if else
//? Here we have two block of codes if is known as true block and else block refers to false statement blcok of codes
// if (isSoftwareDeveloper === true) {
//   console.log("I am a Software Developer");
// } else {
//   console.log("I am not a developer");
// }

//? else if
// let age = prompt("Enter your age in number")

// if(age>= 18){
//   console.log("You are allowed to vote...")
// }else if (age>= 14 && age <18){
//   console.log("You need to wait now..")
// }else{
//   console.log("Please enter valid age..")
// }

let subj1 = Number(prompt("Enter the mark for subj1"))
let subj2 = Number(prompt("Enter the mark for subj2"))
let subj3 = Number(prompt("Enter the mark for subj3"))
let subj4 = Number(prompt("Enter the mark for subj4"))
let subj5 = Number(prompt("Enter the mark for subj5"))

console.log(subj1, subj2, subj3, subj4, subj5)
if(subj1<33 || subj2 <33 || subj3 < 33 || subj4 < 33 || subj5 <33){
  console.log("You are failed!! Better luck next time!!! 😂😂😂")
}else if ((subj1 >33 && subj1 <=100)||(subj2 >33 && subj2 <=100) || (subj3 >33 && subj3 <=100) || (subj4 >33 && subj4 <=100) ||(subj5 >33 && subj5 <=100) ){
  let totalScore = subj1 + subj2 + subj3 + subj4 + subj5
  let percentage = (totalScore / 500) * 100
  console.log(percentage)

  if(percentage>=90){
    console.log("You performed outstanding")
  }else if(percentage >= 80){
    console.log("Well done! You performed excellent")
  }else if (percentage>=70){
    console.log("Good")
  }else if (percentage>=60){
    console.log("Average Salpa push maari")
  }else if(percentage<60 && percentage>33){
    console.log("You are such a dabba You need to focus more... 😡😒😒😡")
  }else{
    console.log("Didn't get valid percentage")
  }
}else{
  console.log("Enter Valid marks..")
}
