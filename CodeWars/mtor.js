//////////////////////////////////////////
// 1
// Filling an array (part 1)
// time taken:
// refactor:
//////////////////////////////////////////

// const arr = (N) => {
//   const result = []
//   let test = N
//   let i = 0
//   while (test > i) {
//     test--
//     result.unshift(test)
//   }
//   return result
// }

// Refactor
const arr = (N) => Array.from({ length: N }, (_, i) => i)

//////////////////////////////////////////
// 2
// Drawing a Cross!
// time taken: 2 hours :(
// refactor:
//////////////////////////////////////////

function drawACross(n) {
  const blank = ' '
  const char = 'x'
  const grid = Array.from(
    { length: n },
    (v) => (v = Array.from({ length: n }, (v) => (v = blank)))
  )
  const result = []
  let counter = n - 1

  if (n < 3) {
    return 'Not possible to draw cross for grids less than 3x3!'
  } else if (n % 2 === 0) {
    return 'Centered cross not possible!'
  } else {
    grid.reduce((accumulator, current, i) => {
      current.fill(char, i, i + 1)
      current.fill(char, counter, counter + 1)
      counter--
      result.push(current.join(''))
    }, result)
    return result.join('\n')
  }
}

//////////////////////////////////////////
// 3
// isReallyNaN
// time taken:
// refactor:
//////////////////////////////////////////
const isReallyNaN = (val) => {
  return Number.isNaN(val)
}

console.log(isReallyNaN(37)) // false
console.log(isReallyNaN('37')) // false
console.log(isReallyNaN(NaN)) //  true
console.log(isReallyNaN(undefined)) // false

// **What the isNaN() function for?**

// - To determine if a value is NaN or not.
// - But take care because coercion inside the function has weird rules, so you may need to use `Number.isNaN()`

// **Why use the isNaN function?**

// - Unlike all other possible values in JavaScript, it is not possible to use the equality operators (== and ===) to compare a value against `[NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)`
// - Both `NaN == NaN` and `NaN === NaN` evaluate to `false`.

// **Wait what's being coerced?**

// - The way it coerces **non-numeric** arguments can be confusing.
// - Because if the value is **not** of type Number, the value is first coerced to a Number and the resulting value is **then** tested to determine whether it is NaN.
// - For more info, I read about this at [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) :)
