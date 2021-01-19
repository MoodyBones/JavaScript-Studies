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

//////////////////////////////////////////
// 2
// Algorithm Scripting: Diff Two Arrays
// time taken: 20 mins
// refactor: 1 min
//////////////////////////////////////////

//  first attempt

// function diffArray(arr1, arr2) {

//     return [...arr1, ...arr2].reduce((a, c) => {
//       if (!arr1.includes(c) && arr2.includes(c)) {
//         a.push(c)
//       } else if (arr1.includes(c) && !arr2.includes(c)) {
//         a.push(c)
//       }
//       return a
//     }, [])
// }

// Refactor

function diffArray(arr1, arr2) {
  return [...arguments].reduce((a, c) => {
    if (!arr1.includes(c) || !arr2.includes(c)) {
      a.push(c)
    }
    return a
  }, [])
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) // [ 4 ]

//////////////////////////////////////////
// 3
// Seek and Destroy
// time taken: 26mins
// refactor: 3 mins
//////////////////////////////////////////

// function destroyer(arr) {
//   const args = [...arguments]
//   const destroyArgs = args.slice(1)

//   return args[0].filter((x) => {
//     // console.log(x)

//     return !destroyArgs.every((e) => {
//       // console.log(e)
//       return e !== x
//     })
//   })
// }

// Refactor

function destroyer(arr) {
  const destroyArgs = [...arguments].slice(1)

  return arguments[0].filter((val) => {
    return !destroyArgs.includes(val)
  })
}

// const destroyer = (arr, ...valsToRemove) => arr.filter(elem => !valsToRemove.includes(elem));

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
