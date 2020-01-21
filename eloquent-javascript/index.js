// //////
// 2. Program Structure

// Looping a Triangle

let loopTo7Function = () => {
  let hash = '#'
  let hashArray = []
  let current = ''

  for (let i = 0; i < 7; i++) {
    current = current + hash
    hashArray.push(current)
  }
  return hashArray.forEach(element => console.log(element))
}
loopTo7Function()
