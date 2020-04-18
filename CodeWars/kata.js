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

/////////////////////
// Kata challenge 2
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering.
// For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

function deleteNth(array, occurence) {
  let keyValue = new Map()

  let sortedArray = array.reduce(function (accumulator, currentValue) {
    // console.log(accumulator.indexOf(currentValue), 'index')
    // console.log(currentValue, 'current')
    // console.log(accumulator, 'acc')
    //     console.log(array.indexOf(currentValue))
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue)
    }
    else if (accumulator.indexOf(currentValue) >= 0) {
      return (keyValue[currentValue] = 1)
    }
    return accumulator
  }, [])

  console.log(counterObject)
  console.log(sortedArray)
}

// deleteNth([1,1,1,1],2)

deleteNth([20, 37, 20, 21, 37], 1)

// const obj = { foo: 'bar', baz: 42 };
// console.log(Object.values(obj)); // ['bar', 42]

if (counterObject.hasOwnProperty(value)) {
  return (counterObject[value] = +1)
}
