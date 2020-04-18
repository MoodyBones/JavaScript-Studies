// Array.prototype.reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])

// Sum all the values of an array
///////////////////////////////////

let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue
}, 0)
console.log(sum) // 6

//  or with an arrow
let sum = [0, 1, 2, 3].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
)

// Sum of values in an object array
///////////////////////////////////

// To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.

let initialValue = 0
let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (
  accumulator,
  currentValue
) {
  return accumulator + currentValue.x
},
initialValue)

console.log(sum) // 6

// Flatten an array of arrays
let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue)
}, [])

console.log(flattened) // [0, 1, 2, 3, 4, 5]

// om a
// function flattened(array) {
//   let flattened = array.reduce(function (accumulator, currentValue) {
//     return accumulator.concat(currentValue)
//   }, [])
//   console.log(flattened)
// }

// flattened([
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ])

// if there is an
