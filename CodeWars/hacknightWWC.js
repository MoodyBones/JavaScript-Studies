//////////////////////////////////////////
// Women Who Code Hack Night Kata
// 7
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
