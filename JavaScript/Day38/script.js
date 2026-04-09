// let firstString = 'Amarjeet said, "you are not studying" '
// console.log(firstString)
// let secondstring = "Sundari's classmate is not so good"
// console.log(secondstring)
// let thirdString = `Twinkle Twinkle little Star
// How I wonder what you Are
// Up above the world so high
// like a shanu in the sky
// `
// console.log(thirdString)

// let myage = String(24)
// console.log(typeof myage)

// let myPhoneNumber = new String(1234567890)
// console.log( myPhoneNumber)




// let a = 7,
// b = 9

// myname = "Shanu"

//! String Methods and Properties
//! length
//? length is a property of string and it returns the number of alphabets present inside a string value.
// let PlayerName = "Rohit Sharma"
// let length = PlayerName.length
// console.log(length)

// let obj = {
//     firstName: "Shanu",
//     lastName: "Singh",
//     fullName: function () {
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(obj.firstName)
// obj.fullName()

//! at
//? at is a string method generally used to find the characters present inside the string based on specified index. it can accept negtive value also as an index. It returns undefined if the specified index is not present.
// PlayerName = "Sanju Samson"
// let res = PlayerName.at(3)
// console.log(res)
// res = PlayerName.at(-4)
// console.log(res)
// res = PlayerName.at(100)
// console.log(res)

//! charAt
//? charAt is a string method similar to at method but it does not accept negative argument. It also returns character based on the specified index. If the specified index is not present or if it is negative index it will return empty string.
// res = PlayerName.charAt(0)
// console.log(res)
// res = PlayerName.charAt(-1)
// console.log(res)
// res = PlayerName.charAt(100)
// console.log(res)

//! charCodeAt
//? It is a string method which returns ASCII value of the character which is present at the specified index. If the specified index is negative index or not present it will return NaN.
// res = PlayerName.charCodeAt(0)
// console.log(res)
// res = PlayerName.charCodeAt(-1)
// console.log(res)
// res = PlayerName.charCodeAt(100)
// console.log(res)

//! codePointAt
//? It is a string method similar to charCodeAt and it returns the ASCII value of the character at the specified index. If the argument is negative index or not present inside the string it will return undefined.
// res = PlayerName.codePointAt(100)
// console.log(res)

//! charCodeAt
//? It is a string method generally used to get the ASCII value of the character at specified index. if the specified index is not present or if it is negative index it will return NaN.
// res = PlayerName.charCodeAt(-1)
// console.log(res)

//! concat
//? It is a string method used to concat a string with any other values. It can accept multiple arguments.
// let myFavPlayer = "Trent Boult"
// let res = myFavPlayer.concat("Singh")
// console.log(res)
// res = myFavPlayer.concat(undefined)
// console.log(res)

//! endsWith
//? It is a string method and used to check or compare the last sequence of the letter with the specified string. if it is matching it will return true else it will return false.
// res = myFavPlayer.endsWith("oult")
// console.log(res)

//!includes
//? It is a string mehtod used to check whether the specified string or value is present or not in the string if it is there then it will return true else false.
// res = myFavPlayer.includes("q")
// console.log(res)

//! indexOf
//? indexOf is a string method and it is used to find the first matching index of the specified character. if the specified character is not present it will return me -1.
// res = myFavPlayer.indexOf("q")
// console.log(res)

//! lastIndexOf
//? lastIndexOf is a string method and it is used to find the last matching index of the specified character. if the specified character is not present it will return me -1.
// res = myFavPlayer.lastIndexOf("t")
// console.log(res)

//! isWellFormed on hold
//! localeCompare on hold
//! match on hold
//! matchAll on hold
//! normalize on hold

//! padEnd
//? It is a string method generally used to add any character at last based on the total index. Generally used to hide the strings partially such as ATM card, phone Number etc.
// let contact = "1234567890"
// res =contact.padEnd(15, "X")
// console.log(res)

//! padStart
//? It is a string method generally used to add characters at the starting based on toatl length, it is also used to hide some confidential detail such as Aadhaar card number.
// res = contact.padStart(15, "x")
// console.log(res)

//! repeat
//? It is a string method and used to repeat the string based on  specified count. it can accept only one argument. if we are passing argument as falsy values it will be returning empty string. If I am passing argument any string data apart from numeric value then also it will return empty string
// res = myFavPlayer.repeat(undefined)
// console.log(res)

//! replace
//? it is a string method and it is used to replace the first matching character with the specifeid character or string value. If the first argument is not present in the string then it will be returning me the default value which is already stored.
// res = myFavPlayer.replace("t", "shanu")
// console.log(res)

//! replaceAll
//? it is a string method and it is used to replace the all matching character with the specifeid character or string value. If the first argument is not present in the string then it will be returning me the default value which is already stored.
// res = myFavPlayer.replaceAll("t", "Shan")
// console.log(res)

//! search on hold

//! slice
//? slice is a string method generally used to extract the part of a string from a string. It can accept one or two arguments. if the first argument index (positive) is greater than second argument index then it will return empty string.
let myFavFruit = "Orange Kumar"
res = myFavFruit.slice(1)
console.log(res)

res = myFavFruit.slice(0, 6)
console.log(res)

res = myFavFruit.slice(-5)
console.log(res)

res = myFavFruit.slice(-5, 1)
console.log(res)

res = myFavFruit.slice(-5, -1)
console.log(res)

res = myFavFruit.slice(-1, -5)
console.log(res)

res = myFavFruit.slice(-1, 1)
console.log(res)

res = myFavFruit.slice(1, -1)
console.log(res)

//! substring
//? substring is a string method used to extract the string part it can accept one or two arguments most likely slice but it can't accept negative index as an argument. If it is negative index it will convert it to zero. If the first argument is greater than second argument it will swap the values and it will be returning start index to end index - 1.
let carName = "Dodge Challenger"
res = carName.substring(1)
console.log(res)

res = carName.substring(1, 5)
console.log(res)

res = carName.substring(-3)
console.log(res)

res = carName.substring(1, -3)
console.log(res)

res = carName.substring(-1, -3)
console.log(res)

//! substr
//? substr is also a string method used to extract the part from a string it accepts one or two arguments if it is only one argument it will considered as a starting index and from that index to the last index it will return. If it is two arguments first will be considered as start index and the second argument will be considered as count. it will return from the start index to the exact count value.
let cskPlayer = "Suresh Raina"
res = cskPlayer.substr(1)
console.log(res)

res = cskPlayer.substr(1, 5)
console.log(res)

res = cskPlayer.substr(-5)
console.log(res)

res = cskPlayer.substr(-5, 2)
console.log(res)

res = cskPlayer.substr(-5, -2)
console.log(res)

res = cskPlayer.substr(-5, false)
console.log(res)

//! split 
//? Split is a string method generally used to convert the string value into an array it can accept one argument as a separator. If we are not passing any argument it will convert the entire string as a single value into an array. if we are passing empty string then it will be converting the entire alphabet as a separate index in an array. if we are passing space as an argument then it will convert each word having index in an array.
let country = "India is my country"
res = country.split()
console.log(res)
res = country.split("")
console.log(res)
res = country.split(" ")
console.log(res)

//! startsWith
//? startsWith is a string method and it is used to check sequence of character whether it is starting with the same provided argument or not if yes then it will return true else false.
res = country.startsWith("india")
console.log(res)

//! toLocaleLowerCase and toLocaleUpperCase
//? toLocaleLowerCase and toLocaleUpperCase both are used to change the cases of characters either in Upper case or Lower case.
res = country.toLocaleLowerCase()
console.log(res)
res = country.toLocaleUpperCase()
console.log(res)

res = country.toLowerCase()
console.log(res)
res = country.toUpperCase()
console.log(res)

//! toString
//? toString is a string method and used to convert the values into string if it is null or undefined then it can't get converted into string because it does not have any toString method. Here we have some datatypes which can support toString as follows

//? Array
//? Function (anything whose typeof returns "function")
//? Error
//? Boolean
//? Number
//? String
//? Date
//? RegExp
let salary = true
console.log(typeof salary)

let data = salary.toString()
console.log(data)

//! trim, trimEnd, trimStart
//? All the above methods used to remove white spaces in the string trim can remove the whitespaces from both starting and ending of the string value. trimStart can remove the white spaces from starting and trimEnd can remove the white spaces from ending of the string value. All these values does not accept any argument.
let username = "              Shanu                   "
console.log(username)
console.log(username.trimEnd())
console.log(username.trimStart())
console.log(username.trim())


//! valueOf on Hold

// let val = "Chennai Super King"
// res = val.valueOf(1)
// console.log(res)

let contact = "1234567890"
res = contact.slice(0,3).padEnd(10, "X")
console.log(res)

res = contact.slice(7).padStart(10, "X")
console.log(res)