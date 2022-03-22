// functions as first class citizens
// can be treated as variables
// can be passed as arguments
// or return in a function

const calc = () => {
  return 4 * 3
}

let aNumber = calc()

console.log(aNumber) // 12

// ///////////////////////////////////////////////
// callback
// a function thats called inside another function

const calc2 = () => {
  return 4 * 4
}

const printCalc2 = (callback) => {
  console.log(callback())
}

printCalc2(calc2)

// we've created a function that takes a function as an argument
