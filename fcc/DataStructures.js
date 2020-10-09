// Basic Data Structures

///////////////////////////////////////////////
// Use an Array to Store a Collection of Data
///////////////////////////////////////////////

let yourArray = ['heya', 4, null, true, false, NaN, undefined]

///////////////////////////////////////////////
// Access an Array's Contents Using Bracket Notation
///////////////////////////////////////////////

let myArray = ['a', 'b', 'c', 'd']
myArray[1] = 'Mel'
console.log(myArray)

///////////////////////////////////////////////
// Add Items to an Array with push() and unshift()
///////////////////////////////////////////////

function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three') // unshift adds to beginning
  arr.push(7, 'VIII', 9) // push adds to end
  return arr
}

console.log(mixedNumbers(['IV', 5, 'six']))

///////////////////////////////////////////////
// Remove Items from an Array with pop() and shift()
///////////////////////////////////////////////

function popShift(arr) {
  let popped = arr.pop()
  let shifted = arr.shift()
  return [shifted, popped]
}

console.log(popShift(['challenge', 'is', 'not', 'complete']))

///////////////////////////////////////////////
// Remove Item Usings splice()
///////////////////////////////////////////////

// 1 param where to start splicing
// 2 para how many to splice

const arr = [2, 4, 5, 1, 7, 5, 2, 1]
arr.splice(0, 1)
arr.splice(3, 4)
console.log(arr)

///////////////////////////////////////////////
// Add Items Using splice()
///////////////////////////////////////////////

// 3 params what to add to the array, in it's place, can be one or more items

function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')

  return arr
}

console.log(
  htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick',
  ])
)

///////////////////////////////////////////////
// Copy Array Items Using slice()
///////////////////////////////////////////////

//  2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index)

function forecast(arr) {
  return arr.slice(2, 4)
}

console.log(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])
)

///////////////////////////////////////////////
// Copy an Array with the Spread Operator
///////////////////////////////////////////////

function copyMachine(arr, num) {
  let newArr = []
  while (num >= 1) {
    newArr.push([...arr])
    num--
  }
  return newArr
}

console.log(copyMachine([true, false, true], 2))

///////////////////////////////////////////////
// Combine Arrays with the Spread Operator
///////////////////////////////////////////////

function spreadOut() {
  let fragment = ['to', 'code']
  let sentence = ['learning', ...fragment, 'is', 'fun']
  return sentence
}

console.log(spreadOut())

///////////////////////////////////////////////
// Check For The Presence of an Element With indexOf()
///////////////////////////////////////////////

// return the index of the array,
// or if the element doesn't exist returns -1

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) === -1) {
    return false
  } else {
    return true
  }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'))

///////////////////////////////////////////////
// Iterate Through All an Array's Items Using For Loops
///////////////////////////////////////////////

function filteredArray(arr, elem) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      // console.log(arr[i].indexOf(elem))
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
)

///////////////////////////////////////////////
// Create complex multi-dimensional arrays
///////////////////////////////////////////////

// example
let nestedArray = [
  // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'],
    ['deeper'], // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'],
      ['deepest'], // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'], // an array nested 5 levels deep
      ],
    ],
  ],
]

// we can still very easily access the deepest levels of an array this complex with bracket notation:
console.log(nestedArray[2][1][0][0][0])
// logs: deepest-est?

//exercise
// We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', and on the fifth level, include the string 'deepest'.

let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  [['deep', 'loop', 'shift', 6, 7, 1000, 'method']],
  [[['deeper', 'concat', false, true, 'spread', 'array']]],
  [
    [
      [
        ['deepest', 'mutate', 1327.98, 'splice', 'slice', 'push'],
        ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'],
      ],
    ],
  ],
]

///////////////////////////////////////////////
// Add Key-Value Pairs to JavaScript Objects
///////////////////////////////////////////////

// At their most basic, objects are just collections of key-value pairs.
// In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys)

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
}

// to add a new property, use dot or bracket notation

// dot
tekkenCharacter.origin = 'South Korea'

// bracket
tekkenCharacter['hair color'] = 'dyed orange'

// bracket notation must be used if the property has a space in it or,
// if you want to use a variable to name the property
const eyes = 'eye color'

tekkenCharacter[eyes] = 'brown'

// now the object looks like
// {
//   player: 'Hwoarang',
//   fightingStyle: 'Tae Kwon Doe',
//   human: true,
//   origin: 'South Korea',
//   'hair color': 'dyed orange',
//   'eye color': 'brown'
// };

// exercise

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
}

foods.bananas = 13
foods['grapes'] = 35
const favourite = 'strawberries'
foods[favourite] = 27

console.log(foods)

///////////////////////////////////////////////
// Modify an Object Nested Within an Object with dot notation
///////////////////////////////////////////////

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42,
  },
}

userActivity.data.online = 45

console.log(userActivity)

///////////////////////////////////////////////
// Access Property Names with Bracket Notation
///////////////////////////////////////////////

// let selectedFood = getCurrentFood(scannedItem)
// let inventory = foods[selectedFood]

// This code will evaluate the value stored in the selectedFood variable
// and return the value of that key in the foods object,
// or undefined if it is not present.

// Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.

// exercise
let foods2 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
}

function checkInventory(scannedItem) {
  return foods2[scannedItem]
}

console.log(checkInventory('apples'))

///////////////////////////////////////////////
// Use the delete Keyword to Remove Object Properties
///////////////////////////////////////////////

let foods3 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
}

delete foods3.oranges
delete foods3.plums
delete foods3.strawberries

console.log(foods3)

///////////////////////////////////////////////
// Check if an Object has a Property
///////////////////////////////////////////////

// 2 ways
// hasOwnProperty() method
// in keyword

// users.hasOwnProperty('Alan')
// 'Alan' in users
// both return true

// exercise

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
}

function isEveryoneHere(obj) {
  const names = ['Alan', 'Jeff', 'Sarah', 'Ryan']
  return names.every((name) => obj.hasOwnProperty(name))
}

console.log(isEveryoneHere(users))

// solution 2

function isEveryoneHere2(obj) {
  if (
    obj.hasOwnProperty('Alan') &&
    obj.hasOwnProperty('Jeff') &&
    obj.hasOwnProperty('Sarah') &&
    obj.hasOwnProperty('Ryan')
  ) {
    return true
  }
  return false
}

console.log(isEveryoneHere2(users))

///////////////////////////////////////////////
// Iterate Through the Keys of an Object with a for...in Statement
///////////////////////////////////////////////

for (let user in users) {
  console.log(user)
}

// for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
// NOTE: Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

function countOnline(usersObj) {
  // use for..in
  // return the number of users
  // that are online
  let result = 0
  for (let user in usersObj) {
    if (usersObj[user].online) {
      result++
    }
  }
  return result
}

const someUsers = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
}

console.log(countOnline(someUsers))

///////////////////////////////////////////////
// Generate an Array of All Object Keys with Object.keys()
///////////////////////////////////////////////

const users2 = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
}

function getArrayOfUsers(obj) {
  return Object.keys(obj)
}

console.log(getArrayOfUsers(users2))

///////////////////////////////////////////////
// Modify an Array Stored in an Object
///////////////////////////////////////////////

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: ['Sam', 'Kira', 'Tomo'],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
    },
  },
}

function addFriend(userObj, friend) {
  // adds the name of the friend argumnet to the array stored in user.data.friends
  // and reutnr that array
  userObj.data.friends.push(friend)
  return userObj.data.friends
}

console.log(addFriend(user, 'Pete'))

// Additionally, the Data Structures lessons located in the Coding Interview Prep section of the curriculum also cover the ES6 Map and Set objects, both of which are similar to ordinary objects but provide some additional features.
