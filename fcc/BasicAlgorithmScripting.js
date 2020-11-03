// Basic Algorithm Scripting
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/

//////////////////////////////////
// 1
// convert celsius to fahrenheit
//////////////////////////////////

function convertToF(celsius) {
  return (celsius * 9) / 5 + 32
}

console.log(convertToF(30))

///////////////////////////////////
// 2
// Reverse a string
///////////////////////////////////

// my answer
function reverseString(str) {
  return str.split('').reverse().join('')
}

reverseString('hello')

//////////////////////////////
// 3
// Factorilise (5 = 1 * 2 * 3 * 4 * 5)
//////////////////////////////

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
//////////////////////////////////////

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
///////////////////////////////

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
//////////////////////////////////////////

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
//////////////////////////////////////////

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
//////////////////////////////////////////

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
//////////////////////////////////////////

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
//////////////////////////////////////////

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

//////////////////////////////////////////
// 11
// Recursion - countUp & countDown
// time taken:
// refactor:
//////////////////////////////////////////

// what is RECURSION??
// when a function calls it's self until it doesn't

function countUp(n) {
  if (n < 1) {
    return []
  } else {
    const countArray = countUp(n - 1)
    console.log(n)
    console.log(countArray)
    countArray.push(n)
    return countArray
  }
}

console.log(countUp(5))

function countDown(n) {
  if (n < 1) {
    return []
  } else {
    const countArray = countDown(n - 1)
    countArray.unshift(n)
    return countArray
  }
}
console.log(countDown(5))

//////////////////////////////////////////
// 12
// Recursion - to create a range of Numbers
// time taken:
// refactor:
//////////////////////////////////////////

// it must return an array of integers
// first integer in array is startNum
// count up by one
// last integer in array is endNum
// the startNum will always be less than or equal to endNum

// function must use recursion
// no loops of any kind
// it should also work for cases where startNum === endNum

function rangeOfNumbers(startNum, endNum) {
  let result = []
  if (startNum === endNum) return [startNum]
  else {
    result = rangeOfNumbers(startNum, endNum - 1)
    result.push(endNum)
    return result
  }
}

console.log(rangeOfNumbers(1, 5))
console.log(rangeOfNumbers(6, 9))

// it works! but I don't understand :/

//////////////////////////////////////////
// 13
// TitleCase a Sentence
// time taken: 14mins 8/10/20
// refactor:
//////////////////////////////////////////

// split string by words

function titleCase(str) {
  return str
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(' ')
}

console.log(titleCase("I'm a little tea pot"))
console.log(titleCase(titleCase('sHoRt AnD sToUt')))
console.log(titleCase(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')))

//////////////////////////////////////////
// 14
// Slice and Splice
// time taken: 17 mins 8/10/20
// refactor:
//////////////////////////////////////////

function frankenSplice(arr1, arr2, n) {
  const result = [...arr2]
  result.splice(n, 0, ...arr1)
  return result
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

//////////////////////////////////////////
// 15
// Falsy Bouncer
// time taken: 25 mins 8/10/20
// refactor:
//////////////////////////////////////////

// function bouncer(arr) {
//   const result = []

//   arr.reduce((newArr, value) => {
//     let test = new Boolean(value)
//     // console.log(test)
//     if (test.valueOf() === true) {
//       result.push(value)
//     }
//   }, [])
//   return result

// }

function bouncer(arr) {
  return arr.filter(Boolean)
}

console.log(bouncer([7, 'ate', '', false, 9]))

//////////////////////////////////////////
// 16
// Where do I belong
// time taken:
// refactor:
//////////////////////////////////////////

function getIndexToIns(arr, num) {
  const result = arr
    .sort((a, b) => a - b)
    .findIndex((currentValue) => currentValue >= num)

  // if given array is empy or the number is larger than the given array,
  // then findIndex will return -1
  return result === -1 ? arr.length : result
}

// console.log(getIndexToIns([40, 70, 60], 50))
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
console.log(getIndexToIns([3, 10, 5], 3))
console.log(getIndexToIns([], 1))
console.log(getIndexToIns([2, 5, 10], 15))

// go through array
// check one at a time
// if the curr is greater or equal too num return the index of the curr

//////////////////////////////////////////
// 17
// Mutations
// time taken: 1 hour!!! jeez
// refactor:
//////////////////////////////////////////

function mutation(arr) {
  let string2 = [...arr[1].toLowerCase()]
  let string1 = [...arr[0].toLowerCase()]
  let result = []
  string2.map((letter) => {
    return result.push(string1.includes(letter))
  })
  return result.includes(false) ? false : true
}

console.log(mutation(['Hello', 'Hey']))
console.log(mutation(['hello', 'Hello']))
console.log(mutation(['floor', 'for']))

//////////////////////////////////////////
// 18
// Chunky Monkey
// time taken: 56 mins AUrghh
// refactor:
//////////////////////////////////////////

// workings

// function chunkArrayInGroups(arr, size) {
//   const result = []

//   let group = []

//   if (size < 0) {
//     return arr
//   } else {

//     for (let i = 0; i < arr.length; i++) {

//       let sample = arr.slice(0, size)
//       console.log(sample)

//       if (group.length < size) {
//         group.push(arr[i])

//       }

//       // arr.slice(i, size)
//       result.push(group)
//     }

//     // arr.map(arg => result.push(arg))

//     return result
//   }
// }

// console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2))

// if the array length is more than size create a new

// make a loop

function chunkArrayInGroups(arr, size) {
  const testArr = [...arr]
  const result = []

  while (testArr.length) {
    result.push(testArr.splice(0, size))
  }
  return result
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2))

//////////////////////////////////////////
//  Section Completed 03.11.2020
//////////////////////////////////////////
