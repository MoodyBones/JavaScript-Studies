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

console.log(addTwoDigits(23))
