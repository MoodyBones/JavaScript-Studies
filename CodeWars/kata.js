// JS Kata #1, fundamental JS, obtained from codewars.com: Integers: Recreation One
// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42.
// These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764.
// The sum of the squared divisors is 2500 which is 50 * 50, a square!
// Given two integers m, n (1 <= m <= n)
// we want to find all integers between m and n
// whose sum of squared divisors is itself a square. 42 is such a number.

// function isPrime(num) {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//     if (num % i === 0) return false
//   return num > 1
// }
// isPrime(7)

// function checkSquare(sum, num) {
//     if ( sum / num === num ) {
// //         you are a square
//     }

// }

// function list_squared(m, n) {
//   let arrayOfArrays = []
//   let arr = []

//   for (let num = m; num < n; num++) {
//     console.log(i)

//     for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
//       if (num % i === 0) return false
//       else if (num > 1) {
//         arr.push(num)
//       }
//       console.log(arr)
//     }
//   }
// }
// list_squared(42, 250)

// is this number greater than m & less than n

//

//  return arr

// list_squared(1, 250)

//////////////////////////////////////////
/////////////////////
// Kata challenge 2
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering.
// For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
//
// time taken: too long

function deleteNth(array, occurence) {
  const ocurrenceObject = {}

  return array.reduce(function (accumulator, currentValue) {
    if (!ocurrenceObject[currentValue]) {
      ocurrenceObject[currentValue] = 0
    }
    if (ocurrenceObject[currentValue] < occurence) {
      accumulator.push(currentValue)
      ocurrenceObject[currentValue] += 1
    }

    return accumulator
  }, [])
}
// console.log(deleteNth([1, 1, 1, 1], 2))
// console.log(deleteNth([20, 37, 20, 21, 37], 1))

//////////////////////////////////////////
// Kata challenge 3
// Is it a triangle
// time taken: 4mins

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a
}

//////////////////////////////////////////
// Kata challenge 4
// Find the missing letter
// time taken:

// write a method that takes an array of consecutive (increasing) letter as input and
// that returns the missing letters

function findMissingLetter(array) {
  let result
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  return array
    .map((e) => alphabet.indexOf(e.toLowerCase()))
    .reduce((acc, current) => {
      if (current === acc + 2) {
        return (result = alphabet[current - 1])
      }

      if (current === acc + 1) {
        return (acc = current)
      }
      return result
    })
}

const test1 = ['a', 'b', 'c', 'd', 'f']
const test2 = ['O', 'Q', 'R', 'S']

console.log(findMissingLetter(test1)) // e
console.log(findMissingLetter(test2)) // p

// the following code works, but it does't help with this exercise.. whoops
// but its nice code, keep at it Mel!
// it doesnt work because filter works like:
////////////
// Filter
/////////////
// is a function on the array
// that accepts another function as it's argument,
// (callback function)
// filter will loop through each item in the array,
// and for each item, it's going to pass it into the callback function,
// and when it does it will expect the callback function to return a true or false,
// to tell filter whether or not this item should be in the array
// and when it's done it will return the new filtered array

//  alphabetArray.map((e) => {
//   array.filter(function (letter) {
//     return e === letter ? missingLetter.push(e) : false
//   })
// })
// console.log(missingLetter)

//////////////////////////////////////////
// Kata challenge 4
// Reverse every other word in the string
// time taken: 4mins

function reverseEveryOtherWord(str) {
  return str
    .split(' ')
    .map((word, index) =>
      index % 2 === 1 ? word.split('').reverse().join('') : word
    )
    .join(' ')
}

console.log(reverseEveryOtherWord('Reverse this string, please!'))
console.log(reverseEveryOtherWord('I really don’t like reversing strings!'))

//////////////////////////////////////////
// 4
// Moving Zeros To The End
// time taken: 12 mins
// refactor:
//////////////////////////////////////////

var moveZeros = function (arr) {
  const zeroes = []

  return arr
    .reduce((a, c) => {
      if (c === 0) {
        zeroes.push(c)
      } else {
        a.push(c)
      }
      return a
    }, [])
    .concat(zeroes)
}

// nice solution I found online
var moveZeros = function (arr) {
  return [...arr.filter((n) => n !== 0), ...arr.filter((n) => n === 0)]
}

//////////////////////////////////////////
// 5
// Maximum Length Difference
// time taken: 8
// refactor:
//////////////////////////////////////////

// FAILED
// I have no idea what this question is asking. Ask Raffa!!!

function mxdiflg(a1, a2) {
  const joinedArr = [...a1, ...a2]
  if (a1.length === 0 || a2.length === 0) {
    return -1
  }

  return (
    Math.max(...joinedArr.map((x) => x.length)) -
    Math.min(...joinedArr.map((x) => x.length))
  )

  // return a2.reduce((a, c) => a + c).length - a2.reduce((a, c) => a + c).length
}

const s1 = [
  'hoqq',
  'bbllkw',
  'oox',
  'ejjuyyy',
  'plmiis',
  'xxxzgpsssa',
  'xxwwkktt',
  'znnnnfqknaz',
  'qqquuhii',
  'dvvvwz',
]
const s2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww']

console.log(mxdiflg(s1, s2))

//////////////////////////////////////////
// 6
// Difference of Volumes of Cuboids
// time taken: 10 mins
// refactor: 8 mins
//////////////////////////////////////////

// first attempt
// function findDifference(a, b) {
//   const reducer = (acc, curr) => acc * curr
//   return a.reduce(reducer) > b.reduce(reducer)
//     ? a.reduce(reducer) - b.reduce(reducer)
//     : b.reduce(reducer) - a.reduce(reducer)
// }

// refactor

// function findDifference(a, b) {
//   const multiply = (acc, curr) => acc * curr
//   const volumeA = a.reduce(multiply)
//   const volumeB = b.reduce(multiply)
//   return volumeA > volumeB
//     ? volumeA - volumeB
//     : volumeB - volumeA
// }

// ///////////////////////////////////
// A better solution use Math.abs()
function volume(arr) {
  return arr.reduce((acc, curr) => acc * curr)
}

function findDifference(a, b) {
  return Math.abs(volume(a) - volume(b))
}

console.log(findDifference([3, 2, 5], [1, 4, 4]))

//////////////////////////////////////////
// 6
// Grasshopper - Grade book
// time taken: 5 mins
// refactor:
//////////////////////////////////////////

function getGrade(s1, s2, s3) {
  const mean = [...arguments].reduce((p, c) => p + c) / arguments.length
  return mean >= 90
    ? 'A'
    : mean >= 80
    ? 'B'
    : mean >= 70
    ? 'C'
    : mean >= 60
    ? 'D'
    : 'F'
}

console.log(getGrade(95, 90, 93))

//////////////////////////////////////////
// 7
// Women Who Code Hack Night Kata
// Loose Change
// time taken: 30 mins
// refactor:
//////////////////////////////////////////

function looseChange(cents) {
  const denominations = {
    Quarters: 25,
    Dimes: 10,
    Nickels: 5,
    Pennies: 1,
  }

  let remainder = Object.assign(cents)
  const dictionary = Object.create(denominations)
  console.log(dictionary)

  if (cents < 0) {
    dictionary.Quarters = 0
    dictionary.Dimes = 0
    dictionary.Nickels = 0
    dictionary.Pennies = 0
    return dictionary
  } else {
    dictionary.Quarters = Math.floor(remainder / denominations.Quarters)
    remainder = remainder - denominations.Quarters * dictionary.Quarters

    dictionary.Dimes = Math.floor(remainder / denominations.Dimes)
    remainder = remainder - denominations.Dimes * dictionary.Dimes

    dictionary.Nickels = Math.floor(remainder / denominations.Nickels)
    remainder = remainder - denominations.Nickels * dictionary.Nickels

    dictionary.Pennies = Math.floor(remainder / denominations.Pennies)
    remainder = remainder - denominations.Pennies * dictionary.Pennies

    return dictionary
  }
}

console.log(looseChange(56))
console.log(looseChange(-3))

// solution from code_wars
// const currency = [
//   { label: 'Quarters', amount: 25 },
//   { label: 'Dimes', amount: 10 },
//   { label: 'Nickels', amount: 5 },
//   { label: 'Pennies', amount: 1 },
// ]

// function looseChange(cents) {
//   const wallet = {
//     Quarters: 0,
//     Dimes: 0,
//     Nickels: 0,
//     Pennies: 0,
//   }

//   let balance = cents

//   for (const { label, amount } of currency) {
//     while (balance >= amount) {
//       balance -= amount
//       wallet[label] += 1
//     }
//   }

//   return wallet
// }

//////////////////////////////////////////
// 8
// Number to digit tiers
// time taken: 30 mins
// refactor:
//////////////////////////////////////////

function createArrayOfTiers(num) {
  const numSplit = num.toString()
  return numSplit.split('').reduce((result, _, index) => {
    result.push(numSplit.slice(0, index + 1))
    return result
  }, [])
}

console.log(createArrayOfTiers(420))

// notes
// convert num to string
// initial array numSplit
// reduce - acc is result array
// push numSplit sliced
//
// numSplit.slice(0, index+1)
// understanding the loop
// begin at 0 stop at 1
// begin at 0 stop at 2
// begin at 0 strop at 3
