////////////////////////////////
// 1.
// Vowel Count
// time taken: 15mins??

function getCount(str) {
  if (str.match(/[aeiou]/gi) === null) {
    return 0
  }
  return str.match(/[aeiou]/gi).length
}

console.log(getCount(`hey i'm mel`))
console.log(getCount(`hello arne`))
console.log(getCount(`blak blah blah`))
console.log(getCount(`my pyx`))

//////////////////////////////////////////
// 2.
// Make negative
// time taken: 6mins

function makeNegative(num) {
  return num <= 0 ? num : -num
}

console.log(makeNegative(1)) // return -1
console.log(makeNegative(-5)) // return -5
console.log(makeNegative(0)) // return 0
console.log(makeNegative(0.12)) // return -0.12

// alternative answers
// function makeNegativeV2(num) {
//   if (num <= 0) {
//     return num
//   }
//   return num - num * 2
// }

// function makeNegativeV3(num) {
//   return -Math.abs(num)
// }

// Math.abs reutnr s the absolute valye of a number

// console.log(makeNegativeV3(1)); // return -1
// console.log(makeNegativeV3(-5)); // return -5
// console.log(makeNegativeV3(0)); // return 0
// console.log(makeNegativeV3(0.12)); // return -0.12

//////////////////////////////////////////
// 3.
// Get the Midd
// time taken: 45mins

// function getMiddle(s) {
//   const length = s.length
//   const middle = Math.floor(length / 2) // round down to whole number
//   // console.log(middle)
//   let even = length % 2 === 0
//   // console.log(even)

//   if (even) {
//     return s.slice(middle - 1, middle + 1) // slice 0 index based & end index is not included (hence middle+1)
//   }
//   return s.charAt(middle)
// }

// refactor
function getMiddle(s) {
  const { length: stringLength } = s
  const middle = Math.floor(stringLength / 2)

  if (stringLength % 2 === 0) {
    return s.slice(middle - 1, middle + 1)
  }
  return s.charAt(middle)
}

console.log(getMiddle('test')) // should return "es"
console.log(getMiddle('testing')) // should return "t"
console.log(getMiddle('middle')) // should return "dd"
console.log(getMiddle('A')) // should return "A"
