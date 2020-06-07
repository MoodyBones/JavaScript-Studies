// Day 4
// Sum All Primes

// find all primes for the given number
// add them all together, and include the given number

// function sumAllPrimes(num) {
//   const primes = []

//   function isPrime(num) {
//     for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//       if (num % i === 0) return false
//     return primes.push(num)
//   }

//   const countDownFrom = (num) => {
//     if (num < 2) return
//     isPrime(num)
//     countDownFrom(num - 1)
//   }

//   countDownFrom(num)
//   return primes.reduce((a, c) => a + c)
// }

// REFACTOR:
// if we dom't care what the primes are,
// we don't need to save them in an array
// or use reduce

function sumAllPrimes(num) {
  let primes = 0

  function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false
    return (primes += num)
  }

  const countDownFrom = (num) => {
    if (num < 2) return
    isPrime(num)
    countDownFrom(num - 1)
  }

  countDownFrom(num)
  return primes
}

const test1 = 10 // 17
const test2 = 977 // 73156

console.log(sumAllPrimes(test1))
console.log(sumAllPrimes(test2))
