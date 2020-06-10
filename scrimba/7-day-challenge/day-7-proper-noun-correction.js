// Day 7
// Make Array Consecutive

// time taken: 4 mins

function properNounCorrection(str) {
  return str
    .split('')
    .map((e, i) => (i === 0 ? e.toUpperCase() : e.toLowerCase()))
    .join('')
}

const test1 = 'pARiS'
const test2 = 'John'

console.log(properNounCorrection(test1))
console.log(properNounCorrection(test2))

// alternate using slice()
// function properNounCorrection(str) {
//   return str[0].toUpperCase() + str.slice(1).toLowerCase()
// }
