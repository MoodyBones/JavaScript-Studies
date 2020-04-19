// Find the longest word in the a string
// 1

function fn1(str) {
  return str.split(' ').reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord
  }, '')
}

console.log(fn1('The quick brown fox jumped over the lazy dog'))

// 2

function fn2(str) {
  const defaultWord = '' // 0 length word
  const reducer = function (longestWord, currentWord) {
    // If the length of the new word is greater than the length of current longest word,
    //than update the longest word. Otherwise return the current longest work to keep it.
    return currentWord.length > longestWord.length ? currentWord : longestWord
  }

  return str.split(' ').reduce(reducer, defaultWord)
}

console.log(fn2('The quick brown fox jumped over the lazy dog'))

// 3
// if you want to find the length, just add .length()

function fn3(str) {
  return str.split(' ').reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord
  }, '').length
}

console.log(fn3('The quick brown fox jumped over the lazy dog'))
