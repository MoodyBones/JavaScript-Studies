// //////
// 2. Program Structure

// Looping a Triangle

const loopTo7Function = () => {
  let hashString = '#'
  let hashArray = []
  let current = ''

  for (let i = 0; i < 7; i++) {
    current = current + hashString
    hashArray.push(current)
  }
  return hashArray.forEach(element => console.log(element))
}
loopTo7Function()

// FizzBuzz

// print numbers from 1 to 100
// any number divisible by 3 print Fizz
// any number divisible by 5 print Buzz
// any number divisible by both 3 & 5 print FizzBuzz

// lets write the math functions

function divisionFunction(number) {
  let check3 = number / 3
  let check5 = number / 5
  if (
    check3 === parseInt(check3, 10) &&
    check3 >= 1 &&
    check5 === parseInt(check5, 10) &&
    check5 >= 1
  ) {
    return 'FizzBuzz'
  } else if (check3 === parseInt(check3, 10) && check3 >= 1) {
    return 'Fizz'
  } else if (check5 === parseInt(check5, 10) && check5 >= 1) {
    return 'Buzz'
  }
  return number
}

function getNumbers(array) {
  array.forEach(number => divisionFunction(number))
  return
}

function FizzBuzzFunction() {
  let hundredArray = [1]

  for (let i = 0; i < 99; i++) {
    hundredArray.push(Number(hundredArray.slice(-1)) + hundredArray[0])
  }
  getNumbers(hundredArray)

  console.log(hundredArray)
}

// Ideas..
// I think I need to save the index together with the number,
// so i can update the array to fizz/buzz

// change loop function, so that it checks the numbers as it goes
// if it's fizz or buzz or fizzbuzz check slice(-2) + 2
