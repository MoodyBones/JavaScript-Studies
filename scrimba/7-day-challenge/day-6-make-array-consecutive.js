// Day 6
// Make Array Consecutive

// time taken: 1 hour

function makeArrayConsecutive(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b)

  const firstNum = sortedNums[0]
  const lastNum = sortedNums[sortedNums.length - 1]
  const lastNumIndex = sortedNums.indexOf(lastNum)

  return lastNum - (lastNumIndex + firstNum)
}

const nums1 = [6, 2, 3, 8, 10] // 4
const nums2 = [1, 3, 6, 4, 8, 5, 12] // 5

console.log(makeArrayConsecutive(nums1))
console.log(makeArrayConsecutive(nums2))

// ////
// Notes / Musings / Pseudo Code

// hints
// sort()
// indexOf()

// to make a count as the last item in the array
// total[total.length - 1]++

// if the current is total plus 1
//

// ////
// the following returns the wrong result
// but it was fun to write

// it returns the total difference between the index and the currentvalue
// it made me realise that i just need to at the last time in the array

// function makeArrayConsecutive(nums) {
//   const sorted = nums.sort()
//   const reducer = (total, currentValue, currentIndex) => {
//     console.log(currentValue)
//     console.log(currentIndex)
//     if (currentValue === currentIndex + sorted[0]) {
//       total.push(0)
//       console.log(total)
//     } else {
//       let temp = currentValue - (currentIndex + sorted[0])
//       console.log(temp)
//       total[total.length - 1] += temp
//     }

//     return total
//   }

//   return Math.max(...sorted.reduce(reducer, [0]))
// }

// const nums1 = [6, 2, 3, 8] // 3
// const nums2 = [1, 3, 6, 4, 8, 5]

// console.log(makeArrayConsecutive(nums1))
