// Debugging

// 1. syntax erros that prevent a program from running 
//  2. runtime errors when code fails to execute or has unexpected behaviour
// 3. semantic (or logical) errors when code doesn't do what it's meant to


// - modern code editors help identify syntax errors

// runtime and semantic errors are harder to find & can cause the program to:
// crash
// run forever
// give incorrect output

// ////
// Debugging as trying to understand why your code is behaving the way it is.
// ////


// ////
// Syntax Error
funtcion willNotWork( 
  console.log("Yuck");
}
// "function" keyword is misspelled and there's a missing parenthesis

// ////
// Runtime Error
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
// Calling loopy starts an infinite loop, which may crash your browser

// ////
// Semantic Error

function calcAreaOfRect(w, h) {
  return w + h; // This should be w * h
}
let myRectArea = calcAreaOfRect(2, 3);
// Correct syntax and the program executes, but this gives the wrong answer




// ////
// Debugging can be frustrating, so it helps to follow a step by step approach to review your code
// This means checking the intermediate values and types of variables to see if they are what they should be. You can start with a simple process of elimination.




console.log();
console.clear(); // clears the console

// ////
// typeof
// checks the data structure or variable type
// This is useful in debugging when working with multiple data types. 
// Type errors can lurk in calculations or function calls.
// Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.

console.log(typeof "") // outputs "string"
console.log(typeof 0) // outputs "number"
console.log(typeof []) // outputs "object"
console.log(typeof {}) // outputs "object"


// JavaScript recognizes six primitive (immutable) data types: 
// Boolean, 
// Null, 
// Undefined, 
// Number, 
// String, 
// and Symbol(new with ES6) 


// and one type for mutable items: Object.
// Note that in JavaScript, arrays are technically a type of object.

// ////
// Reference Error
// JavaScript variable and function names are case -sensitive.

// Transposed, missing, or mis-capitalized characters in a variable or 
// function name will have the browser looking for an object that doesn't exist - and 
// complain in the form of a reference error. 





// ////
// Falsy values:

// false,
// 0, 
// ""(an empty string), 
// NaN, 
// undefined, 
// and null

// almost every other valye on it's own in JavaScript evaluates to true.

// ////
// Use Caution When Reinitializing Variables Inside a Loop

// BAD
// function zeroArray(numOfRows, numOfCols) {
//   let newArr = []
//   let newRow = [] // BAD
  
//   for (let i = 0; i < numOfRows; i++) {
//     for (let j = 0; j < numOfCols; j++) {
//       newRow.push(0)
//     }
//     newArr.push(newRow)
//   }
//   return newArr
// }

// let matrix = zeroArray(3, 2);

//  GOOD
function zeroArray(numOfRows, numOfCols) {
  let newArr = []
  
  for (let i = 0; i < numOfRows; i++) {
    let newRow = [] // GOOD

    for (let j = 0; j < numOfCols; j++) {
      newRow.push(0)
    }
    newArr.push(newRow)
  }
  return newArr
}

let matrix = zeroArray(3, 2);

// ////
// The dreaded Infintie Loop

// The final topic is the dreaded infinite loop. 
// Loops are great tools when you need your program to run a code block a certain number of times 
// or until a condition is met, 
// but they need a terminal condition that ends the looping.

// Infinite loops are likely to freeze or crash the browser, 
// and cause general program execution mayhem, which no one wants.

// It's the programmer's job to ensure that the terminal condition, 
// which tells the program when to break out of the loop code, 
// is eventually reached.One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition.
// Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or decrementing it.



// INFINITE LOOP - WARNING DO NOT USE

// function loopy() {
//   while(true) {
//     console.log("Hello, world!");
//   }
// }

