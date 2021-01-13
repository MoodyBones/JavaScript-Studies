//////////////////////////////////////////
// 1
// Sum All Numbers in a Range
// time taken: 10 mins
// refactor:
//////////////////////////////////////////

// First try

// function sumAll(arr) {
//   const sorted = [...arr.sort((a, b) => a - b)]

//   while (sorted[0] < sorted[1] - 1) {
//     sorted[0]++
//     arr.push(sorted[0])
//   }
//   return arr.reduce((a, c) => a + c, 0)
// }

// sumAll([1, 4])

// ////
// Refactor with Math.max & Math.min

function sumAll(arr) {
  let counter = Math.min(...arr)

  while (counter < Math.max(...arr) - 1) {
    counter++
    arr.push(counter)
  }
  return arr.reduce((a, c) => a + c, 0)
}

sumAll([1, 4])
