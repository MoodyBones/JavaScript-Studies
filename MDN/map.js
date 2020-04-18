// Array.prototype.map()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// Mapping an array of numbers to an array of square roots

let numbers = [1, 4, 9]
let roots = numbers.map(function (num) {
  return Math.sqrt(num)
})
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
