// generate hint / score the guess
// 0 wrong, 1 right letter wrong place, 2 right letter right place

function generateHint(word: string, guess: string): string {
  
  // spread word into array
  const source = [...word]

  // map guess
  return [...guess].map((letter, i) => {
    // if correct letter remove from source & return true
    if (letter === source[i]) {
      source[i] = null
      return true
    }
    // otherwise return false
    return false

    // map the array again (which is now an array of booleans)
  }).map((exact, i) => {
    // console.log(exact) // true or false
    // if true it means its a correct guess so return '2'
    if (exact) return '2'

    // if the letter is in the source return '1'
    if (source.includes(guess[i])) return '1'

    // otherwise return '0'
    return '0'
  }).join('')
}

console.log(generateHint('apple', 'label'))

// learnt from https://www.youtube.com/watch?v=-U8NWGTGNVw Daniel Roe N3rdle