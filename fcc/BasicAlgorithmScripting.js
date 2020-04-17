// Basic Algorithm Scripting
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/

//////////////////////////////////
// convert celsius to fahrenheit
function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32
  return fahrenheit
}

convertToF(30)

///////////////////////////////////
// Reverse a string

// my answer
function reverseString(str) {
  return str.split('').reverse().join('')
}

reverseString('hello')

//////////////////////////////
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
// Find the Longest Word in a String

// my answer
function findLongestWordLength(str) {
  let wordsArr = str.split(' ')
  let lengthArr = []

  wordsArr.forEach((e) => lengthArr.push(e.length))

  return Math.max.apply(null, lengthArr)
}

findLongestWordLength('The quick brown fox jumped over the lazy dog')

// or with map
function findLongestWordLength(str) {
  return Math.max(...str.split(' ').map((word) => word.length))
}

// or with for loop
function findLongestWordLength(str) {
  var words = str.split(' ')
  var maxLength = 0

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length
    }
  }

  return maxLength
}

///////////////////////////////
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
