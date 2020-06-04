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

// REFACTORED
// function addBorder(array) {
//   const starString = '*****'
//   return [starString, ...array.map((e) => `*${e}*`), starString]
// }

// console.log(addBorder(sampleDataArray))

// what if they varied in length

// check the length of the longest string
// use math max to find biggest string

// make top and bottom border longest string length + 2
// can use reduce
// start with [*]
// push in new star if [*].length <= biggest string

// result arr length must be arr + 2

function addBorder(arr) {
  const getLongest = arr.reduce((longestString, currentString) => {
    return currentString.length > longestString.length
      ? currentString
      : longestString
  }, '').length

  const starBorder = (str = '*') => str.padEnd(getLongest + 1, '*')

  return [starBorder(), ...arr.map((e) => `*${starBorder(e)}`), starBorder()]
}

const sampleDataArray2 = ['abc', 'dede']

console.log(addBorder(sampleDataArray2))

// answer from Teacher
// function addBorder(array) {
//   const wall = '*'.repeat(array[0].length + 2)

//   array.unshift(wall)
//   array.push(wall)

//   for (let i = 1; i < array.length - 1; i++) {
//     array[i] = '*'.concat(array[i], '*')
//   }

//   return array
// }
