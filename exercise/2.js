// Exercises - Primitive Data Types, Arrays, Loops, & Conditions
// Chapter 2
// p 60

/////////////
// 1. What is the result of executing each of these lines in the console? Why?
///////////

var a
typeof a
// undefined
// because the variable has been declared, but it has not been initialised

var s = '1s'
s++
// NaN
// s is a string, because it begins with a number, JS tries to coerce it into a number and do the addition
// but fails because of the s, and outputs NaN
// interestingly: NaN type is number

!!'false'
// false
// came out true, why is that? hmmmm why explain?

!!undefined
// false
// because underfined in a falsy value
// and using logical NOT twice converts it twice, first to true then back to false

typeof -Infinity
// number
// because it's a very big/small number..

10 % '0'
// NaN
// because one is a number and one is a string
// ok just tested without "" and i still get NaN
// hmm why is that?

undefined == null
// true
// because the are both falsy values

false === ''
// false
// because it's a strict comparison so it compares types too

typeof '2E+2'
// string
// "" makes it a string

a = 3e3
a++
// 3001
// a++ adds 1

//////////////////
// 2. What is the value of v after the following?
///////////////

var v = v || 10
// 10
// because v is undefined(falsy)
// undefined || 10

// Experiment by first setting v to 100,
// returns 100
// 100 || 10

// 0,
// returns 10,
// 0 || 10 does it return 10 because it's greater or because 0 is falsy?

// null,
// return 10, null it like a placeholder, and so it's replaced with 10

// or unset it (delete v).
// v is not defined

/////
// it always returns the greater number, or the truthy value.

////
//////
// Continue on from page 54 [TICK]
// review loops [TICK]
// do exercise 3 [TICK]
// and try exercises from Elequent JavaScript Book
////////

/////////////////
// 3. Write a script that prints out the multiplication table. Hint: use a loop nested inside another loop.
///////////////////

// SOLUTION:
let num = 1
const numberArray = []
const resultsArray = []
let loopArray = []

for (let i = 1; i <= 12; i++) {
  numberArray.push(num)
  num++
  if (i === 12) {
    resultsArray.push(numberArray)
    for (let i = 1; i <= 12; i++) {
      loopArray = resultsArray[[0]].map(a => a * i)
      resultsArray.push(loopArray)
    }
  }
}
console.log(resultsArray)

// WORKINGS:
// end of line
//  \n

// space or tab
// ' ' or \t

// look like this
// X 0 1 2 3 4 5 6 7 8 9 10 11 12
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12

// const number = 0
// const saveNumber = 0
// const numberArray = [[X]]
// const end = '\n'
// const tab = '\t'
// for (let i = 0; i <= 12; i++) {
//  if (num === 0) {
//   numberArray.push(num)
//   num++;
//  } else if (num <=12) {
//      numberArray[[]].push(num)
//      num++;
//  }

//  console.log(numberArray)
//  console.log(num)
// }

// let num = 1
// let numberArray = []
// let savedArrays = []
// let newArray = []

// // make an array of number 1-12
// for (let i = 0; i < 12; i++) {
//   numberArray.push(num)
//   num++;
//   if (i === 11) {
//     savedArrays.push(numberArray)
//     for (let i = 1; i <= 12; i++) {
//       newArray = savedArrays[[0]].map(a => a * i)
//       savedArrays.push(newArray)
//     }
//   }
//  }
//  console.log(savedArrays)
