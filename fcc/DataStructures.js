// Basic Data Structures

// ////
// Use an Array to Store a Collection of Data

let yourArray = ['heya', 4, null, true, false, NaN, undefined]

// Access an Array's Contents Using Bracket Notation

let myArray = ['a', 'b', 'c', 'd']
myArray[1] = 'Mel'
console.log(myArray)

// Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three') // unshift adds to beginning
  arr.push(7, 'VIII', 9) // push adds to end
  return arr
}

console.log(mixedNumbers(['IV', 5, 'six']))

// Remove Items from an Array with pop() and shift()

function popShift(arr) {
  let popped = arr.pop()
  let shifted = arr.shift()
  return [shifted, popped]
}

console.log(popShift(['challenge', 'is', 'not', 'complete']))

// Remove Item Usings splice()

// 1 param where to start splicing
// 2 para how many to splice

const arr = [2, 4, 5, 1, 7, 5, 2, 1]
arr.splice(0, 1)
arr.splice(3, 4)
console.log(arr)

// Add Items Using splice()

// 3 params what to add to the array, in it's place, can be one or more items

function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')

  return arr
}

console.log(
  htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick',
  ])
)

// Copy Array Items Using slice()

//  2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index)

function forecast(arr) {
  return arr.slice(2, 4)
}

console.log(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])
)

// Copy an Array with the Spread Operator

function copyMachine(arr, num) {
  let newArr = []
  while (num >= 1) {
    newArr.push([...arr])
    num--
  }
  return newArr
}

console.log(copyMachine([true, false, true], 2))

// Combine Arrays with the Spread Operator

function spreadOut() {
  let fragment = ['to', 'code']
  let sentence = ['learning', ...fragment, 'is', 'fun']
  return sentence
}

console.log(spreadOut())

// Check For The Presence of an Element With indexOf()

// return the index of the array,
// or if the element doesn't exist returns -1

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) === -1) {
    return false
  } else {
    return true
  }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'))
