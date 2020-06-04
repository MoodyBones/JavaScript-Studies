// Day 1
// Add a Border

// Given the following array of data
const sampleDataArray = ['abc', 'ded']
// it should return
// ["*****", "*abc*", "*ded*", "*****"]

// function addBorder(array) {
//   const starString = '*****'
//   const star = '*'
//   const resultArray = [...array]
//   resultArray.unshift(starString)
//   resultArray.push(starString)
//   resultArray[1] = star.concat(resultArray[1], star)
//   resultArray[2] = star.concat(resultArray[2], star)
//   return resultArray
// }

// ////
// REFACTORED
// function addBorder(array) {
//   const starString = '*****'
//   return [starString, ...array.map((e) => `*${e}*`), starString]
// }

// console.log(addBorder(sampleDataArray))

// ////
// Answer from Scrimba
// function addBorder(array) {
//   const wall = '*'.repeat(array[0].length + 2)

//   array.unshift(wall)
//   array.push(wall)

//   for (let i = 1; i < array.length - 1; i++) {
//     array[i] = '*'.concat(array[i], '*')
//   }

//   return array
// }

// ////
// EXTRA CHALLENGE refactor so it works for strings with varying lengths
// fill in spaces with extra *

function addBorder(arr) {
  const getLongest = arr.reduce((longestString, currentString) => {
    return currentString.length > longestString.length
      ? currentString
      : longestString
  }, '').length

  const border = '*'
  const buildBorder = (str = border) => str.padEnd(getLongest + 1, border)

  return [
    border + buildBorder(),
    ...arr.map((e) => border + buildBorder(e)),
    border + buildBorder(),
  ]
}

const sampleDataArray2 = ['abc', 'dede']
const sampleDataArray3 = ['a', 'bc', 'def', 'ghij', 'klm', 'no', 'p']
const sampleDataArray4 = ['a', 'star']

console.log(addBorder(sampleDataArray2))
console.log(addBorder(sampleDataArray3))
console.log(addBorder(sampleDataArray4))

// ////
// Notes / musings / pseudo code

// what if they varied in length

// check the length of the longest string
// use math max to find biggest string

// make top and bottom border longest string length + 2
// can use reduce
// start with [*]
// push in new star if [*].length <= biggest string

// result arr length must be arr + 2
