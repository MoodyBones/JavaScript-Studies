# J A V A S C R I P T

# Study Notes & Exercises by [Mel Jones](https://twitter.com/_moodybones)

## freecodecamp.org

## A methodical walk-through of modern JavaScript features 👩‍💻

- This course features freeCodeCamp's ES6 curriculum recorded as Scrimba screencasts.

- It contains 26 lectures, each of which explains a concept of ES6.

- The lectures are recorded by [Beau Carnes](https://twitter.com/carnesbeau?lang=en).

- Beau Carnes is the man behind freeCodeCamp.

- [Full Course Here](https://scrimba.com/g/ges6)

es6 2015

- new features
- was not fully widely accepted until 2017

## Variables

- we used to have to use var
- since es6 in 2015 we can now use let and const as well

### let

- doesn't allow you to declare/name a variable twice
- you dont want to declare a variable two times in the same scope

what is 'use strict'

strict mode

it catches common coding mistakes and unsafe actions

when/where would be use this?

Var

- when you declare with var
- it is declared GLOBALLY
- or locally if within a function

```jsx
function checkScope() {
"use strict";
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();

----
Block scope i is: ,"block scope"
Function scope i is: ,"block scope"
```

Let

- is limited to the block statement or expression,
- that it was declared in
-

```jsx
function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();

-----
Block scope i is: ,"block scope"
Function scope i is: ,"function scope"
```

**A block is anything inside {}**

People now use let instead of var, to make sure that the variable is only defined in the place they want it

### Const

- it has all the features of let
- but it's also read only
- you can not reassign a const
- some people write the name in CAPS

- you can't reassign a variable with const
- you can mutate the array declared with const

```jsx
const s = [5, 7, 2]
function editInPlace() {
  'use strict'

  //s = [2, 5, 7];
  s[0] = 2
  s[1] = 5
  s[2] = 7
}
editInPlace()

console.log(s)

----[2, 5, 7]
```

**A const declaration alone, doesn't protect your data from MUTATION**

## Prevent Object Mutation

use

### object.freeze

- when you an object and you don't want any of the items in the object to change

```jsx
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);

----
>TypeError: Cannot assign to read only property 'PI' of object '#<Object>' (/index.js:13)
>3.14
```

### Use Arrow functions to Write Concise Anonymous Functions

```jsx
// Anonymous Functon before
var magic = function () {
  return new Date()
}

// Anonymous function ESG - with fat arrow

const magic = () => {
  return new Date()
}

//and shorter
const magic = () => new Date()
```

### Arrow functions with Params

```jsx
// before
var myConcat = function (arr1, arr2) {
  return arr1.concat(arr2)
}

console.log(myConcat([1, 2], [3, 4, 5]))

// after
const myConcat = (arr1, arr2) => arr1.concat(arr2)

console.log(myConcat([1, 2], [3, 4, 5]))
```

## Higher Order Arrow Functions

- They take functions as arguments,
- for processing collections of data.
  - map
  - filter
  - reduce
- whenver one function takes another function as an argument,
- this is a great time to use arrow functions

```jsx
// We want to compute the square of only positive integers

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x)
  // the result of filter() will be an array with integers above 0
  // now we want to the square of all the numbers in that filtered array
  // use map()
  // map takes a function as an argument
  return squaredIntegers
}

const squaredIntegers = squareList(realNumberArray)
console.log(squaredIntegers)

// [16, 1764, 36]
```

## Set Default Parameters for your Functions

- in order to make more flexible functions,
- you can use default parameters
- the default parameter kicks in the when the argument is not specified,
- or is undefined

```jsx
const increment = (function () {
  return function increment(number, value = 1) {
    return number + value
  }
})()

console.log(increment(5, 2)) // 7
console.log(increment(5)) //6
```

## Use the Rest Operator with Function Parameters

- the rest operator allows you to create a function that,
- takes a variable number of arguments

```jsx
// old way
const sum = (function () {
  return function sum(x, y, z) {
    const args = [x, y, z]
    return args.reduce((a, b) => a + b, 0)
  }
})()
console.log(sum(1, 2, 3))
6

// WITH REST OPERATOR
const sum = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0)
  }
})()
console.log(sum(1, 2, 3, 4)) //10
```

- with the rest operator ...
- it will convert everything passed in
- into one array, and the array is called `args`
- now we can pass in any number of arguments
- before we could all sum the 3 numbers passed in

## Use the Spread Operator to Evaluate Arrays In-Place

- the spread operator looks just like the rest operator
- ...
- BUT it expands an already existing array
- or it spreads out an array
- so it takes an array and spreads it out into it's individual parts
- you can only use it in an argument to a function
- or an array literal

```jsx
// this creates a reference not a copy, which means arr2 is arr1 is the same
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
let arr2
;(function () {
  arr2 = arr1 // this only creates a reference, use spread to make a copy
  arr1[0] = 'potato'
})()
console.log(arr2) // ['potato', 'FEB', 'MAR', 'APR', 'MAY'];

// Use the spread operator to spread a copy of arr1 into arr2
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
let arr2
;(function () {
  arr2 = [...arr1] // use must put it in brackets, this spreads a copy of arr1 into arr2
  arr1[0] = 'potato'
})()
console.log(arr2) // ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
```

# Destructuring

## Use Destructing Assignment to Assign Variables from Objects

- this is a special syntax for neatly assigning values,
- taken directly from an **Object** to a variable
-

```jsx
var voxel: { x: 3.6, y: 7.4, z: 6.54 }

//old way
var x = voxel.x // x = 3.6
var y = voxel.y // y = 7.4
var z = voxel.z // z = 6.54

// NEW with destructing, there is a simpler and faster way
const { x: a, y: b, z: c } = voxel // a = 3.6, b = 7.4, c = 6.54

// read it like:
// get value of x and copy it into a
// get value of y and copy it into b
// get value of z and copy it into c

// this is just a quick way of taking values from an objecy and
// and assigning them to a variable
```

```jsx
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79,
}

function getTempOfTmrw(avgTemperatures) {
  'use strict'
  // use object destructuring to get tomorrow from AVG_TEPERA
  const { tomorrow: tempOfTomorrow } = avgTemperatures //
  // here we are saying
  // get the tomorrow field from avgTempratures Object
  // and assign it to tempOfTomorrow variable

  return tempOfTomorrow
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)) // should be 79
```

## Use Destructing Assignment to Assign Variables from Nested Objects

- to assign variables from nested objects
-

```jsx
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
}

function getMaxOfTmrw(forecast) {
  'use strict'

  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast
  // we have set the maxOfTomorrom to the max inside of tomorrow

  return maxOfTomorrow
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)) //84.6
```

## Use Destructing Assignment to Assign Variables from Arrays

- the difference between destructing with arrays vs objects,
- is that you can not specify which element from an array,
- to go into a variable. It just goes in order!
- we can use commas to skip and then reach specific elements

```jsx
const [z, x] = [1, 2, 3, 4, 5, 6] // we are assigning z & x to 1 & 2
console.log(z, x)

// if we wanted to put the 4th element in a variable, we add commas
const [z, x, , y] = [1, 2, 3, 4, 5, 6]
```

- We can also use destructuring of arrays to
- switch the places of variables

```jsx
let a = 8,
  b = 6
;(() => {
  'use strict'
  ;[a, b] = [b, a]
})()
// console.log(a); // 6
// console.log(b); // 8
```

## Use Destructing Assignment with the Rest Operator to Reassign Array Elements

-

```jsx
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function removeFirstTwo(list) {
  const [, , ...arr] = list
  // do nothing for first & second element and assign the,
  // remainder of the array to const list

  // you also assign the first two element to other variables,
  // const [a, b, ...arr] = list;

  return arr
}
const arr = removeFirstTwo(source)

console.log(arr) // [3, 4, 5, 6, 7, 8, 9, 10]
console.log(source) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## Use Destructuring Assingment to Pass an Object as a Function's Parameter

- we dont have to pass the whole object in (stats)
- we can just pass what we need
- this is commonly used for api calls
- when you are getting ajax or api request,
- it will often have a lot for information than what you need
- and you can use destructuring to get it down to exactly what we want to work with

```jsx
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
}
const half = (function () {
  // return function half(stats) { // old way
  // return (stats.max + stats.min) / 2.0;

  return function half({ max, min }) {
    // with destructuring
    return (max + min) / 2.0 // and remove stats
  }
})()
console.log(stats)
console.log(half(stats))
```

- now when stats is passed in
- it's destructed to just the max & min

## Create Strings using Template Literals

- are a special kind of string that makes creating complex strings easier
- use the backtick
- you can put variables right in the string

```jsx
const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['id-blacklist', 'no-dup-keys'],
}
function makeList(arr) {
  const resultDisplayArray = []
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
  }

  return resultDisplayArray
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure)

console.log(resultDisplayArray)
```

## Write Concise Object Literal Declarations Using Simple Fields

- ES6 added some nice support for easily adding object literals
- if you know you want to create an object where,
- the key is name of the variable,
- & the value is the value of the variable

```jsx
// old way
// const createPerson = (name, age, gender) => {
//  return {
//    name: name,
//    age: age,
//    gender: gender
//  };
//};

// with ES6
const createPerson = (name, age, gender) => ({ name, age, gender })
console.log(createPerson('Zodiac Hasbro', 56, 'male'))
```

## Write Concise Declaratie Functions with ES6

```jsx
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear
  },
}

bicycle.setGear(3)
console.log(bicycle.gear)
```

## Use class Syntax to Define a Constructor Function

- ES6 allows you to create objects using the class keyword

```jsx
// old way
// var SpaceShuttle = function(targetPlanet){
//   this.targetPlanet = targetPlanet;
// }

// with class syntax
class SpaceShuttle {
	(targetPlanet){
  this.targetPlanet = targetPlanet;
	}
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)

```

```jsx
function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name
    }
  }
  return Vegetable
}
const Vegetable = makeClass()
const carrot = new Vegetable('carrot')
console.log(carrot.name)
```

##
