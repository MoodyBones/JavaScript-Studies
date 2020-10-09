/////////////////////////////////////////////////
// 2. Program Structure

// ///
// Looping a Triangle

const loopTo7Function = () => {
  let hashString = '#'
  let hashArray = []
  let current = ''

  for (let i = 0; i < 7; i++) {
    current = current + hashString
    hashArray.push(current)
  }
  return hashArray.forEach((element) => console.log(element))
}
loopTo7Function()

///////////////////////////////////////////////
// FizzBuzz

// print numbers from 1 to 100
// any number divisible by 3 print Fizz
// any number divisible by 5 print Buzz
// any number divisible by both 3 & 5 print FizzBuzz

/////////////////////////////////////////////// Workings...

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

// this loops through the array pushes each element out
function getNumbers(array) {
  array.forEach((number) => divisionFunction(number))
  return
}

// the loop
function FizzBuzzFunction() {
  let hundredArray = [1]

  for (let i = 1; i < 100; i++) {
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

///////////////////////////////////////////////////////
// FIZZBUZZ SOLUTION

// no need for index or slice or seperating the function into 3
// the for loop checks for fizzbuzz/fizz/buzz at each iteration :)
// before saving it into the array and moving on to the next

function FizzBuzz() {
  let arr = []

  for (let i = 1; arr.length < 100; i++) {
    let check3 = i / 3
    let check5 = i / 5

    if (
      check3 === parseInt(check3, 10) &&
      check3 >= 1 &&
      check5 === parseInt(check5, 10) &&
      check5 >= 1
    ) {
      arr.push('FizzBuzz')
    } else if (check3 === parseInt(check3, 10)) {
      arr.push('Fizz')
    } else if (check5 === parseInt(check5, 10)) {
      arr.push('Buzz')
    } else {
      arr.push(i)
    }
  }
  return arr.forEach((e) => console.log(e))
}

FizzBuzz()
