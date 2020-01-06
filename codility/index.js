// Lesson 1
// Started Jan 5 2020
// time spent 1:06 + 1:56
// total time 3 hours
// extra help (1:56) from https://medium.com/@mannycodes/how-to-solve-binary-gap-cda3c3e980b8


function getGaps(binaryArray, gapsArray) {
  // find the first 1
  const firstOne = binaryArray.indexOf('1') // 0 (index of firstOne)

  if (firstOne > -1) {
    // create new array using slice of original array
    // new array should start with firstOne index + 1
    const newBinaryArray = binaryArray.slice(firstOne + 1) // ['0', '0', '1']

    // search for second 1
    const secondOne = newBinaryArray.indexOf('1') // 2 (index, and also the binary gap!!)

    // accounting for no zeros
    if (secondOne > 0) {
      // now push the secondOnes index / binary gap into a new array
      gapsArray.push(secondOne) // [2]
    }

    return getGaps(newBinaryArray, gapsArray)
  }

  // find longest binary gap
  // console.log(binaryGapArray)
  // if gaps array is empty return 0
  // otherwise return the largest number in an array
  return gapsArray.length > 0 ? Math.max.apply(Math, gapsArray) : 0
}

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  // loop through each argument
  // for (let i = 0; i < arguments.length; i++) {
  // delete above loop, not needed

    // check it is a postive integer N === parseInt(N, 10)
    if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
      // for testing
      // let N = 9
      // delete above after testing

      // convert n into binary
      const binary = N.toString(2) // 1001
      // convert into an array
      const binaryArray = binary.split('') // ['1', '0', '0', '1']

      return getGaps(binaryArray, [])
    }

    // if doesn't contain a binary gap
    return 0
  // }
}

solution(1610612737)
