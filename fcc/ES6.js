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

// ////
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


// ////
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



// /////
// Gets & Setters

// Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

// Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. 
// This change could involve calculations, or even overwriting the previous value completely.

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut

// Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details. Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.


class Thermostat {
  constructor(tempInF) {
    this._tempInF = tempInF
  }

  get temperature() {
    return 5/9 * (this._tempInF - 32) //when getting temp return the C
  }

  set temperature(newTemp) {
    this._tempInF = newTemp * 9.0 / 5 + 32 // when setting covert back to F
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(thermos.temperature)

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp)



// ////
// Create a Module Script

// JavaScript started with a small role to play on an otherwise mostly HTML web. 
// Today, it’s huge, and some websites are built almost entirely with JavaScript. 
// In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. 
// This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. 
// In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module.

<script type="module" src="filename.js"></script>
// A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.




// ////
// Use export to Share a Code Block

//  if you want to use a function in several different JavaScript files..
// you must import it!

export const add = (x , y) => {
  return x + y
}

// above is a common way, but you can also achieve the same thing like this:

const add = (x , y) => {
  return x + y
}

export { add }

// When you export a variable or function, you can import it in another file and use it without having to rewrite the code. 
// You can export multiple things like:

export { add, subtract }

// exercise
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString }



// ////
// Import - to reuse JavaScript code

import { add } from './math_functions.js'
// Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest. 
// The relative file path (./) and file extension (.js) are required when using import in this way.

// you can import more than one function at a time, seperate with a comma

import { uppercaseString, lowercaseString } from './string_functions.js'

uppercaseString("hello");
lowercaseString("WORLD!");



// ////
// Use * to Import Everything from a file (named export)

import * as myMathModule from "./math_functions.js";

// The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. 

// This is just a variable name, you can name it anything. 

myMathModule.add(2,3);
myMathModule.subtract(5,3);

// exercise
import * as stringFunctions from './string_functions.js'

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");



// Create an Export Fallback with (export default) 

// In the export lesson, you learned about the syntax referred to as a named export. 

// There is another export syntax you need to know, known as export default.
// Usually you will use this syntax if only one value is being exported from a file. 
// It is also used to create a fallback value for a file or module.

// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function(x, y) {
  return x + y;
}

// Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. 
// Additionally, you cannot use export default with var, let, or const



// ////
// Import a Default Export

// To import a default export, you need to use a different import syntax.

import add from "./math_functions.js";
// add is the default export in math_functions.js



// ////
// Create a JavaScript Promise

// A promise in JavaScript is exactly what it sounds like - 
// you use it to make a promise to do something, usually asynchronously.

// When the task completes, you either fulfill your promise or fail to do so.

// Promise is a constructor function, so you need to use the new keyword to create one. 

//  It takes a function, as its argument, with two parameters - resolve and reject.
// These are methods used to determine the outcome of the promise.


const myPromise = new Promise((resolve, reject) = {

})



// ////
// Complete a Promise with resolve and reject

// A promise has three states: pending, fulfilled, and rejected.

// The promise you created in the last challenge is forever stuck in the pending state 
// because you did not add a way to complete the promise. 
// Params resolve & reject are used to do this

// Resolve is used when you want your promise to succeed, and 
// Reject is used when you want it to fail. 

// These are methods that take an argument, as seen below.



const myPromise = new Promise((resolve, reject) => {
  if (conditionHere) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected")
  }
});

// The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.



// Promise exercise

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data")
  } else {  
    reject("Data not received")
  }
});



// ////
// Handle a Fulfilled Promise with then

// Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request.

//  When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. 

// This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. 

myPromise.then(result => {
  // do something with the result
})

// result comes from the argumnet given to the resolve method


const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});


makeServerRequest.then(result => {
  console.log(result)
})




// Handle a Rejected Promise with catch 




