// Day 2
// Add Two Digits

// function addTwoDigits(num) {
//   return num.toString()
//             .split('')
//             .map(e => parseInt(e))
//             .reduce((a, c) => a + c)
// }

// Refactored and removed map could remove the map
function addTwoDigits(num) {
  return num
    .toString()
    .split('')
    .reduce((total, current) => parseInt(total) + parseInt(current))
}

const test = 23
const test2 = 2356

console.log(addTwoDigits(test))
console.log(addTwoDigits(test2))
