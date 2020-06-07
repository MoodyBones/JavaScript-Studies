// Day 5
// Even Digits Only

// Check if all digits in the string are even

function evenDigitsOnly(number) {
  return number
    .toString()
    .split('')
    .every((e) => parseInt(e) % 2 === 0)
}

const nums1 = 248622
const nums2 = 642386

console.log(evenDigitsOnly(nums1))
console.log(evenDigitsOnly(nums2))
