// Exercise: Iteration vs. Recursion
// In functional programming, we avoid mutable state, and therefore avoid iterative loops using for or while. As an alternative to iteration, we use recursion to break down the problem into smaller ones.

// A recursive function has two parts:

// Base case: condition(s) under which the function returns an output without making a recursive call
// Recursive case: condition(s) under which the function calls itself to return the output

// ////////////////////////////////
// Comparing readability
// Below are two versions of a function to compute the factorial of a given positive integer n: one takes an iterative approach, the other uses recursion.

// Take a moment to read & understand both functions. Feel free to add comments to explain what each line does, and/or try out the functions by calling them with different inputs.

// Which one do you find more readable? Why?
function iterativeFactorial(n) {
  let product = 1
  while (n > 0) {
    product *= n
    n--
  }
  return product
}

iterativeFactorial(3) // 6

function recursiveFactorial(n) {
  if (n === 0) return 1
  return n * recursiveFactorial(n - 1)
}
recursiveFactorial(3) // 6

// //////////////////////////////////
// Comparing writeability
// Now it's time to try writing our own iterative & recursive functions!

// In the cells below, fill in the code to implement iterative and recursive versions of a function to compute the Nth Fibonacci number given a positive integer n.

// Each Fibonacci number is defined as the sum of the previous two Fibonacci numbers, so fibonacci(n) = fibonacci(n-1) + fibonacci(n-2). By convention, the first two numbers are fixed: fibonacci(0) = 0 and fibonacci(1) = 1.

// When each function has been implemented successfully, you'll see the tests below each function pass.

// my solution
function iterativeFibonacci(n) {
  let previous = 0
  let current = 1
  let result = 0
  while (n - 1 > 0) {
    // remove previous addition with n-1
    result = previous + current
    previous = current
    current = result
    n--
  }
  return result
}

// Anjanas Solution
// function iterativeFibonacci(n) {
//   if (n === 0) return 0
//   if (n === 1) return 1

//   let previous = 0
//   let current = 1
//   for (let i = n; i > 1; i--) {
//     let next = previous + current
//     previous = current
//     current = next
//   }
//   return current
// }

iterativeFibonacci(2) // should return 1
iterativeFibonacci(6) // should return 8
iterativeFibonacci(10) //  should return 55
iterativeFibonacci(20) //  should return 6765

function recursiveFibonacci(n) {
  if (n === 0) return 0 // set first two numbers (2 part base case)
  if (n === 1) return 1 // set first two numbers (2 part base case)
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1)
  // recursive case. we get the number 2 before and the number 1 before so we can add them together and get the current fibonacci number.
  // this is more similar to what we see in maths.
}

console.log(recursiveFibonacci(2)) // should return 1
console.log(recursiveFibonacci(6)) // should return 8
console.log(recursiveFibonacci(10)) //  should return 55
console.log(recursiveFibonacci(20)) //  should return 6765

// Once you've implemented both versions, take a moment to consider:

// Which did you find easier to write? Why?

// Comparing performance
// Using the number widget below to set the value of n, try calling your completed iterativeFibonacci() and recursiveFibonacci() functions with higher and higher values for n.

// Do very big numbers create a problem for either version?

// n
// 10
// undefined
// undefined
// Note: If at any point an Observable notebook stops responding (or you get impatient!), you can reload the page in "safe mode" by adding /safe to the end of the URL, e.g. https://observablehq.com/@anjana/exercise-iteration-vs-recursion/safe, revert whatever changes caused the crash/hang, and then reload the page in normal mode.

// => Solutions
// Just one possible way to solve this exercise, not the only way!

// And now, a word from our sponsors...

// Tail Call Optimization

// Appendix
// This cell helps the exercise above run.

// import {number} from @jashkenas/inputs
