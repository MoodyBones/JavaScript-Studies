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

