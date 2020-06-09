// /////////////
// ESG
// ////////////

// ////
// Differences between var and let
// ////
// One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.
//  A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword. If you were to replace var with let in the variable declarations of the code above, the result would be an error.

let catName
let quote
function catTalk() {
  catName = 'Oliver'
  quote = catName + ' says Meow!'
}
catTalk()


// ////
// Compare Scopes of the var and let Keywords

// var is declared globally
// let scopt is limited to the block, statement or expression

function checkScope() {
  let i = 'function scope'

  if (true) {
    let i = 'block scope'
    console.log('Block scope i is: ', i)
  }
  console.log('Function scope i is: ', i)
  return i
}


// ////
// Declare a Read-Only Variable with the const Keyword

// const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. 
// it's common practice to name const in CAPS

function printManyTimes(str) {

  const SENTENCE = str + ' is cool!'
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE)
  }

}
printManyTimes('freeCodeCamp')


// ////
// Mutate an Array Declared with const

// Objects (incl. arrays and functions) assigned to a varaible usisng const are still mutable
// const only prevents reassignment of the variable identifter

const s = [5, 7, 2]
function editInPlace() {

  s[0] = 2
  s[1] = 5
  s[2] = 7
}
editInPlace()


// ////
//  Prevent Object Mutation

//  use Object.freeze()

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  }
  Object.freeze(MATH_CONSTANTS)

  try {
    MATH_CONSTANTS.PI = 99
  } catch (ex) {
    console.log(ex)
  }
  return MATH_CONSTANTS.PI
}
const PI = freezeObj()




// ////
// Use Arrow Functions to Write Concise Anonymous Functions

const magic = () => {
  return new Date()
}


// ////
// Write Arrow Functions with Parameters

const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2)
}

console.log(myConcat([1, 2], [3, 4, 5]))



// ////
// Set Default Parameters for Your Functions

const increment = (number, value = 1) => number + value



// ////
// Use the Rest Parameter with Function Parameters

// In order to help us create more flexible functions, 
// ES6 introduces the rest parameter for function parameters. 
// With the rest parameter, you can create functions that take a variable number of arguments. 
// These arguments are stored in an array that can be accessed later from inside the function.


// previously
// const sum = (x, y, z) => {
//   const args = [x, y, z]
//   return args.reduce((a, b) => a + b, 0)
// }

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0)
}


// ////
// Use the Spread Operator to Evaluate Arrays In-Place

// ES6 introduces the spread operator, 
// which allows us to expand arrays and other expressions 
// in places where multiple parameters or elements are expected.


// The ES5 code below uses apply() to compute the maximum value in an array:

// var arr = [6, 89, 3, 45];
// var maximus = Math.max.apply(null, arr); // returns 89

// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. 
// Math.max() expects comma-separated arguments, but not an array. 


// The spread operator makes this syntax much better to read and maintain.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

// ...arr returns an unpacked array. In other words, it spreads the array. 
// However, the spread operator only works in-place, like in an argument to a function or in an array literal. 
// The following code will not work:
const spreaded = ...arr; // will throw a syntax error



//  another working example of the Spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  



// ////
// Use Destructuring Assignment to Extract Values from Objects

// Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

// ES5 / OLD
// const user = { name: 'John Doe', age: 34 };

// const name = user.name; // name = 'John Doe'
// const age = user.age; // age = 34

// ES6
const { name, age } = user;
// name = 'John Doe', age = 34


// another example

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES
