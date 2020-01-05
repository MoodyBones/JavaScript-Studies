// Lesson 1
// Started Jan 5 2020
// time spent 1:06

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  // loop through each argument
  for (let i = 1; i < arguments.length; i++) {
    // check it is a postive integer
    if (N >= 0) {
      // convert n into binary
      let result = N.toString(2)
      // return result
      return result

      // find longest binary gap
      // maybe convert into an array
    }

    // if doesn't contain a binary gap
    return 0
  }
}

solution(-256)
