// console.log("Hii This is JavaScript");
// var firstNum = 10;
// var secNum = 20;

//! Assignment Operator
//? Assignment operator in JavaScript is used to assign values in declared variable
// var sum = firstNum + secNum;
// console.log(sum);
// console.log(firstNum);
// firstNum = firstNum + secNum;
// firstNum += secNum;
// console.log(firstNum);

// firstNum -= secNum;
// console.log(firstNum);

// firstNum *= secNum;
// console.log(firstNum);

// firstNum /= secNum;
// console.log(firstNum);

// firstNum %= secNum;
// console.log(firstNum);

// firstNum **= secNum;
// console.log(firstNum);

//! Relational Operator or Comparison Operator
//? Relational operator in JavaScript is used to establish a relation or to compare two variables or values. It always return one boolean value either true or false. Here we have multiple operators such as less than, greater than, less than equals to, greater than equals to etc..

// let firstNum = 100;
// let secNum = 50;
// //! greater than
// let result = firstNum > secNum;
// console.log(result);

//! less than
// result = firstNum < secNum;
// console.log(result);

//todo Why we get false whenever we are comparing number and string whether it is less than or greater than but whenever we are comparing two string data then it is giving me the result based on ASCII value.
//! type coercion type casting and type conversion
// var myName = "Amar"; //65
// // var myAge = 70;
// var myAge = "amar"; // 97
// var myRes = myName < myAge;
// console.log(myRes);

//! less than equals to & greater than equals to
// var firstNum = 100;
// var secNum = 100;
// var res = firstNum <= secNum;
// console.log(res);
// res = firstNum >= secNum;
// console.log(res);

//! double equals to & triple equals to
//? Double Equals and Triple Equals to both are equality Operator used to check whether the values are equal or not. Double equals to will compare only the values but triple equals to will compare values along with its datatypes.
// var firstNum = 100;
// var secNum = "100";
// var res = firstNum == secNum;
// console.log(res);
// res = firstNum === secNum;
// console.log(res);

//! not Equals to not Double Equals to
//? not equals to and not double equals to are also equality operator used to check equality of data and its types. It is just vice versa of double equals to and triple equals to.
// let firstNum = 10;
// let secNum = "10";
// let res = firstNum != secNum;
// console.log(res);
// res = firstNum !== secNum;
// console.log(res);

//! Logical Operator
//? Logical Operator is a combination of multiple operartors or values. It can return values based on the conditions. If there is comparison operator inside this it will return boolean value else it will return values itself. There are total 3 logical operators. AND, OR, NOT
//AND Operator
//? This is a logical AND operator which returns values based on truthy values or falsy values, if both values are truthy values it will be returning the last truthy value else it will be returning the falsy values.
// let firstNum = 10;
// let secNum = 20;
// let res = firstNum > secNum && firstNum < secNum;
// console.log(res);
// res = firstNum < secNum && secNum > firstNum;
// console.log(res);

// console.log(10 && 0);
// console.log(0 && 10);
// console.log(20 && 10);
// console.log(10 && "");

// OR Operator
//? This is a Logical OR operator which returns the values based on truthy values it will get you the first truthy values.
// console.log(8 || 0 || 9);
// console.log(8 || (0 && 9));
// console.log((8 || 0) && 9);

// NOT Operator
//? This is a Logical NOT Operator used to make the values true to false or false to true.
// let isMarried = false;
// let myData = !isMarried;
// console.log(myData);

// let isPassed = true;
// console.log(isPassed);
// console.log(!isPassed);

//! Unary Operator
//? Operator which can be performed only using one operand is known as Unary Operator. Here we have post increment, pre increment, Post decrement, Pre Decrement and typeof Operators.
let a = 10;
let b = 20;
// console.log(a++);
// console.log(a);

// let updatedValue = a++;
// console.log(a);

// let expr = a++ - ++a;
// console.log(expr);

// expr = a++ + ++b - b + ++b; // 10 + 21 - 21 + 22 = 32
// console.log(expr);

// expr = a-- + a - ++b - a + --a + b++;
// console.log(expr);

// expr = (a++)(++b);
// console.log(expr);

//! preIncrement
//? This is increment unary operator which will be incrementing the value by 1 tehn it will be assigned or used.
//! postIncrement
//? This is increment unary operator which will be used or assigned first then it will get incremented by 1.
//! preDecrement
//? This is decrement unary operator which will be decreasing the value by 1 then it will be assigned or used.

//! postDecrement
//? This is decrement unary operator which will be used or assigned first then it will get decreased by 1.

//! Ternary Operator in JavaScript
//? It is also known as conditional operator in JavaScript and it is used to return the output based on certain condition.
let isMarried = false;
//? syntax: condition ? true statement : false statement
// isMarried == true
//   ? console.log("You may have kids...")
//   : console.log("You don't have any kids now!!");

let res =
  isMarried === true ? "You have a good husband" : "You are not married yet";
console.log(res);
