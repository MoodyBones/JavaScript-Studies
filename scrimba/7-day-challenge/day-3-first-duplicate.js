// Day 3
// First Duplicate

// return first duplicate, if none found, return -1

function firstDuplicate(nums) {
  const seen = []
  for (num of nums) {
    if (seen.includes(num)) {
      return num
    } else {
      seen.push(num)
    }
  }
  return -1
}

const test1 = [2, 1, 3, 5, 3, 2]
const test2 = [2, 1, 3, 5, 4, 6]

console.log(firstDuplicate(test1))
console.log(firstDuplicate(test2))

// ////
// Notes / Musings / Pseudo Code

// findIndex()
// The findIndex() method returns the index of the first element in the array
// that satisfies the provided testing function.
// Otherwise, it returns -1, indicating that no element passed the test.

const array1 = [5, 12, 8, 130, 44]

const isLargeNumber = (element) => element > 13

console.log(array1.findIndex(isLargeNumber))

// expected output: 3

// Array.from()
// can have a map function

// Quickly remove Duplicates using Set

function removeDuplicates(arr) {
  const newSet = new Set(arr)
  return Array.from(newSet)
}

console.log(removeDuplicates(test1))

// Use Set & flat() to remove duplicates from a array with sub arrays

function uniteUnique(...arr) {
  let flatArray = arr.flat()
  const set = new Set(flatArray)
  return Array.from(set)
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

// const longestStreakReducer = (positiveStreaks, currentDay) => {
//   if (currentDay) {
//     positiveStreaks[positiveStreaks.length - 1]++
//   } else {
//     positiveStreaks.push(0)
//   }
//   return positiveStreaks
// }
// return Math.max(...arr.reduce(longestStreakReducer, [0]))

// function firstDuplicate(nums) {
//   const singlesArray = []
//   const duplicatesArray = []

//   return nums.reduce(
//     (acc, currenValue) => {
//       if (!singlesArray[currenValue]) {
//         return singlesArray.push(currenValue)
//       }

//       if (singlesArray[currenValue]) {
//         duplicatesArray.push(currenValue)
//       }
//       console.log(singlesArray)
//       console.log(duplicatesArray)
//       return duplicatesArray.length ? duplicatesArray[0] : -1
//     },
//     [0]
//   )
// }
