//////////////////////////////////////////
// Women Who Code Hack Night Kata
// Loose Change
// time taken: 20 mins
// refactor:
//////////////////////////////////////////

function looseChange(cents) {
  const denominations = {
    Quarters: 25,
    Dimes: 10,
    Nickels: 5,
    Pennies: 1,
  }

  let remainder = Object.assign(cents)
  const dictionary = Object.create(denominations)
  console.log(dictionary)

  if (cents < 0) {
    dictionary.Quarters = 0
    dictionary.Dimes = 0
    dictionary.Nickels = 0
    dictionary.Pennies = 0
    return dictionary
  } else {
    dictionary.Quarters = Math.floor(remainder / denominations.Quarters)
    remainder = remainder - denominations.Quarters * dictionary.Quarters

    dictionary.Dimes = Math.floor(remainder / denominations.Dimes)
    remainder = remainder - denominations.Dimes * dictionary.Dimes

    dictionary.Nickels = Math.floor(remainder / denominations.Nickels)
    remainder = remainder - denominations.Nickels * dictionary.Nickels

    dictionary.Pennies = Math.floor(remainder / denominations.Pennies)
    remainder = remainder - denominations.Pennies * dictionary.Pennies

    return dictionary
  }
}

console.log(looseChange(56))
console.log(looseChange(-3))

// solution from code_wars
// const currency = [
//   { label: 'Quarters', amount: 25 },
//   { label: 'Dimes', amount: 10 },
//   { label: 'Nickels', amount: 5 },
//   { label: 'Pennies', amount: 1 },
// ]

// function looseChange(cents) {
//   const wallet = {
//     Quarters: 0,
//     Dimes: 0,
//     Nickels: 0,
//     Pennies: 0,
//   }

//   let balance = cents

//   for (const { label, amount } of currency) {
//     while (balance >= amount) {
//       balance -= amount
//       wallet[label] += 1
//     }
//   }

//   return wallet
// }

//////////////////////////////////////////
// Women Who Code Hack Night Kata
//
// time taken: 20 mins
// refactor:
//////////////////////////////////////////

const n = parseInt(readline()) // the number of temperatures to analyse
var inputs = readline().split(' ')
for (let i = 0; i < n; i++) {
  const t = parseInt(inputs[i]) // a temperature expressed as an integer ranging from -273 to 5526
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

const closestToZero = (temps) => {
  const middle = 0
  if (temps.length === 1) return middle // no temp
  const sortedTemps = [...temps, middle].sort((a, b) => a - b)

  if (sortedTemps[0] === middle) {
    return sortedTemps[1]
  } else if (sortedTemps.indexOf(middle) === sortedTemps.length - 1) {
    // only negatives or positives
    return sortedTemps[sortedTemps.length - 2]
  } else if (sortedTemps.indexOf(middle) > 0) {
    // get negative & positive and compare
    const negative = sortedTemps.indexOf(middle) - 1
    const positive = sortedTemps.indexOf(middle) + 1
    return sortedTemps[negative] > sortedTemps[positive]
      ? sortedTemps[negative]
      : sortedTemps[positive]
  }
}

console.log(closestToZero(inputs))

//////////////////////////////////////////
// Women Who Code Hack Night Kata
// Bit Counting
// time taken: 12 mins
// refactor: incl. above
//////////////////////////////////////////

const countBits = (n) =>
  n
    .toString(2)
    .split('')
    .filter((e) => e === '1').length
