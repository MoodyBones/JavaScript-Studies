// /////////////
// ESG
// ////////////

// ////
// Differences between var and let
// ////
// One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.
//  A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword. 
// If you were to replace var with let in the variable declarations of the code above, the result would be an error.

let catName
let quote
function catTalk() {
  catName = 'Oliver'
  quote = catName + ' says Meow!'
}
catTalk()


// ////
// Compare Scopes of the var and let Keywords

// var is declared globally
// let scopt is limited to the block, statement or expression

function checkScope() {
  let i = 'function scope'

  if (true) {
    let i = 'block scope'
    console.log('Block scope i is: ', i)
  }
  console.log('Function scope i is: ', i)
  return i
}


// ////
// Declare a Read-Only Variable with the const Keyword

// const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. 
// it's common practice to name const in CAPS

function printManyTimes(str) {

  const SENTENCE = str + ' is cool!'
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE)
  }

}
printManyTimes('freeCodeCamp')


// ////
// Mutate an Array Declared with const

// Objects (incl. arrays and functions) assigned to a varaible usisng const are still mutable
// const only prevents reassignment of the variable identifter

const s = [5, 7, 2]
function editInPlace() {

  s[0] = 2
  s[1] = 5
  s[2] = 7
}
editInPlace()


// ////
//  Prevent Object Mutation

//  use Object.freeze()

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  }
  Object.freeze(MATH_CONSTANTS)

  try {
    MATH_CONSTANTS.PI = 99
  } catch (ex) {
    console.log(ex)
  }
  return MATH_CONSTANTS.PI
}
const PI = freezeObj()




// ////
// Use Arrow Functions to Write Concise Anonymous Functions

const magic = () => {
  return new Date()
}


// ////
// Write Arrow Functions with Parameters

const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2)
}

console.log(myConcat([1, 2], [3, 4, 5]))



// ////
// Set Default Parameters for Your Functions

const increment = (number, value = 1) => number + value



// ////
// Use the Rest Parameter with Function Parameters

// In order to help us create more flexible functions, 
// ES6 introduces the rest parameter for function parameters. 
// With the rest parameter, you can create functions that take a variable number of arguments. 
// These arguments are stored in an array that can be accessed later from inside the function.


// previously
// const sum = (x, y, z) => {
//   const args = [x, y, z]
//   return args.reduce((a, b) => a + b, 0)
// }

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0)
}


// ////
// Use the Spread Operator to Evaluate Arrays In-Place

// ES6 introduces the spread operator, 
// which allows us to expand arrays and other expressions 
// in places where multiple parameters or elements are expected.


// The ES5 code below uses apply() to compute the maximum value in an array:

// var arr = [6, 89, 3, 45];
// var maximus = Math.max.apply(null, arr); // returns 89

// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. 
// Math.max() expects comma-separated arguments, but not an array. 


// The spread operator makes this syntax much better to read and maintain.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

// ...arr returns an unpacked array. In other words, it spreads the array. 
// However, the spread operator only works in-place, like in an argument to a function or in an array literal. 
// The following code will not work:
const spreaded = ...arr; // will throw a syntax error



//  another working example of the Spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  



// ////
// Use Destructuring Assignment to Extract Values from Objects

// Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

// ES5 / OLD
// const user = { name: 'John Doe', age: 34 };

// const name = user.name; // name = 'John Doe'
// const age = user.age; // age = 34

// ES6
const { name, age } = user;
// name = 'John Doe', age = 34


// another example

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES


// ////
// Use Destructuring Assignment to Assign Variables from Objects

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES


// ////
// Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday}} = LOCAL_FORECAST


// ////
// Use Destructuring Assignment to Assign Variables from Arrays

// One key difference between the spread operator and array destructuring 
// is that the spread operator unpacks all contents of an array into a comma-separated list. 
// Consequently, you cannot pick or choose which elements you want to assign to variables.

let a = 8, b = 6;
[b, a] = [a, b]


// ////
// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

// In some situations involving array destructuring, 
// we might want to collect the rest of the elements into a separate array.

// The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]


// Exercise
// Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() 
// so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [,, ...arr] = list; 
  return arr;
}
const arr = removeFirstTwo(source);



// ////
// Use Destructuring Assignment to Pass an Object as a Function's Parameters

// sometimes you don't want to pass in the whole object - only the need fields
// you can use destructuring in a function argument
// and added benefit of not having to manipulate an entire object in a fucntion

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0; 
// Only change code above this line



// ////
// Create strings using Template Literals

// a template literal is a special type of strign that makes creatign complex strings easier
// they allow you to create multi-line strings and to use string interpolation features to create strings

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.

// A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. 
// Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. 

// The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. 
// To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. 

// Similarly, you can include other expressions in your string literal, for example ${a + b}. 
// This new way of creating strings gives you more flexibility to create robust strings.




// Exercise
// Use template literal syntax with backticks to display each entry of the result object's failure array. 
// Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray.

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
// function makeList(arr) {
//   "use strict";

//   const resultDisplayArray = arr.map(x => `<li class="text-warning">${x}</li>`)
//   return resultDisplayArray;
// }

// refactored
function makeList(arr) {
  "use strict";

  return arr.map(x => `<li class="text-warning">${x}</li>`)
}

const resultDisplayArray = makeList(result.failure);



// ////
// Write Concise Object Literal Declarations - using object property shorthand

//before
// const getMousePosition = (x, y) => ({
//   x: x,
//   y: y
// });


// with object literals
const getMousePosition = (x, y) => ({ x, y });


// Write Concise Declarative Functions with ES6

// When defining functions within objects in ES5, we have to use the keyword function as follows:
// const person = {
//   name: "Taylor",
//   sayHello: function() {
//     return `Hello! My name is ${this.name}.`;
//   }
// };

//  in ES6 you can remove the function keyword and colon
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

// exercise
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);



// CLass syntax

// ES6 provides a new syntax to create objects, using the class keyword.

// It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

// In ES5, we usually define a constructor function and use the new keyword to instantiate an object.

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

// The class syntax simply replaces the constructor function creation:

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');

// It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.

// UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.
// The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.


// exercise
class Vegetable {
  constructor(name) {
    this.name = name
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'









