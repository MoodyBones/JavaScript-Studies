// Basic Algorithm Scripting
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/

//////////////////////////////////
// 1
// convert celsius to fahrenheit
function convertToF(celsius) {
  return (celsius * 9) / 5 + 32
}

console.log(convertToF(30))

///////////////////////////////////
// 2
// Reverse a string

// my answer
function reverseString(str) {
  return str.split('').reverse().join('')
}

reverseString('hello')

//////////////////////////////
// 3
// Factorilise (5 = 1 * 2 * 3 * 4 * 5)

function factorialize(num) {
  for (var product = 1; num > 0; num--) {
    product *= num
  }

  return product
}

factorialize(5)

// or

function factorialize(num) {
  if (num === 0) {
    return 1
  }
  return num * factorialize(num - 1)
}

factorialize(5)

//////////////////////////////////////
// 4
// Find the length of the longest Word in a String

// my answer
// function findLongestWordLength(str) {
//   let wordsArr = str.split(' ')
//   let lengthArr = []

//   wordsArr.forEach((e) => lengthArr.push(e.length))

//   return Math.max.apply(null, lengthArr)
// }

// findLongestWordLength('The quick brown fox jumped over the lazy dog')

// refactor using reduce
function findLongestWordLengthV2(str) {
  return str.split(' ').reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord
  }, '').length
}

console.log(
  findLongestWordLengthV2('The quick brown fox jumped over the lazy dog')
)

// or with map
// function findLongestWordLength(str) {
//   return Math.max(...str.split(' ').map((word) => word.length))
// }

// // or with for loop
// function findLongestWordLength(str) {
//   var words = str.split(' ')
//   var maxLength = 0

//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length
//     }
//   }

//   return maxLength
// }

///////////////////////////////
// 5
// Return Largest Numbers in Arrays

// answer
function largestOfFour(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) result.push(Math.max.apply(null, arr[i]))

  return result
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
])

// alternatives
function largestOfFour(arr) {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev
    })
  })
}

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null))
}

//////////////////////////////////////////
// 6
// Confirm the Ending
// time taken: 36mins

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target
}

console.log(confirmEnding('Bastian', 'n')) // true
console.log(confirmEnding('Connor', 'n')) // false
console.log(confirmEnding('He has to give me a new name', 'name')) // true
console.log(confirmEnding('Open sesame', 'pen')) // false
console.log(confirmEnding('Abstraction', 'action')) // true

//////////////////////////////////////////
// 7
// Repeat a String
// don't use replace()
// time taken: 10 mins
// refactor time: 13 mins

// original
// function repeatStringNumTimes(str, num) {
//   let result = []
//   for (let i = 0; i < num; i++) {
//     result.push(str)
//   }
//   return num <= 0 ? '' : result.join('')
// }

// refactor
function repeatStringNumTimes(str, num) {
  let result = ''
  for (let i = 0; i < num; i++) {
    result += str
  }
  return num > 0 ? result : ''
}

console.log(repeatStringNumTimes('abc', 3))

//////////////////////////////////////////
// 8
// Truncate a string
// time taken: 36 mins
// refactor: 1 min

// function truncateString(str, num) {
//   const ending = '...'
//   const firstArg = str.slice(0, num)

//   return str.length > num ?  firstArg.padEnd(firstArg.length+3, ending) : str
// }

// console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8))

// refactor

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + '...' : str
}

//////////////////////////////////////////
// 9
// Finders Keepers
// time taken: 36 mins
// refactor:
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

function findElement(arr, func) {
  return arr.find(func)
}

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0))

//////////////////////////////////////////
// 10
// booWho
// time taken: 15 mins
// refactor:1 min

//  my answer
// function booWho(bool) {
//   if (bool === true || bool === false) {
//     return true
//   }
//   return bool === typeof true
// }

//  my answer refactor
// function booWho(bool) {
//   return bool === true || bool === false ? true : bool === typeof true
// }

// alt solution from FCC
function booWho(bool) {
  return typeof bool === 'boolean'
}

console.log(booWho(true)) // true
console.log(booWho(false)) // true
console.log(booWho([1, 2, 3])) // false
console.log(booWho([].slice)) // false
