//////////////////////////////////////////
// 1
// Filling an array (part 1)
// time taken:
// refactor:
//////////////////////////////////////////

const arr = (N) => {
  const result = []
  let test = N
  let i = 0
  while (test > i) {
    test--
    result.unshift(test)
  }
  return result
}

// Refactor
const arr = (N) => Array.from({ length: N }, (_, i) => i)

//////////////////////////////////////////
// 2
// Drawing a Cross!
// time taken: 2 hours :(
// refactor:
//////////////////////////////////////////

function drawACross(n) {
  const blank = ' '
  const char = 'x'
  const grid = Array.from(
    { length: n },
    (v) => (v = Array.from({ length: n }, (v) => (v = blank)))
  )
  const result = []
  let counter = n - 1

  if (n < 3) {
    return 'Not possible to draw cross for grids less than 3x3!'
  } else if (n % 2 === 0) {
    return 'Centered cross not possible!'
  } else {
    grid.reduce((accumulator, current, i) => {
      current.fill(char, i, i + 1)
      current.fill(char, counter, counter + 1)
      counter--
      result.push(current.join(''))
    }, result)
    return result.join('\n')
  }
}
