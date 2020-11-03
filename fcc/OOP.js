// ///////////////////////////////////
// Understand Own Properties
// ///////////////////////////////////

// CONSTRUCTOR
function Bird(name) {
  this.name = name
  this.numLegs = 2
}

// INSTANCES
let duck = new Bird('Donald')
let canary = new Bird('Tweety')

// function that lists all properties from an instance
let ownProps = []

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property)
  }
}

console.log(ownProps) // prints [ "name", "numLegs" ]

// ///////////////////////////////////
// Use Prototype Properties to Reduce Duplicate Code
// ///////////////////////////////////

// Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.

// Imagine if there are millions of instances. That would be a lot of duplicated variables.

// A better way is to use Bird’s prototype.
// Properties in the prototype are shared among ALL instances

Bird.prototype.numLegs = 2

// ///////////////////////////////////
// Iterate Over All Properties
// ///////////////////////////////////

// There are two types of properties

// OWN
// Own properties are defined directly on the object instance itself.

// PROTOTYPE
// Prototype properties are defined on the prototype.

function Bird(name) {
  this.name = name //own property
}

Bird.prototype.numLegs = 2 // prototype property

let duck = new Bird('Donald')

// Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

let ownProps = []
let prototypeProps = []

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property)
  } else {
    prototypeProps.push(property)
  }
}

console.log(ownProps) // prints ["name"]
console.log(prototypeProps) // prints ["numLegs"]

// ///////////////////////////////////
// Change the Prototype to a New Object
// ///////////////////////////////////

Bird.prototype = {
  numLegs: 2,
  eat: function () {
    console.log('nom nom nom')
  },
  describe: function () {
    console.log('My name is ' + this.name)
  },
}

// ///////////////////////////////////
// Remember to Set the Constructor Property when Changing the Prototype
// /////////////////////////////////

// There is one crucial side effect of manually setting the prototype to a new object.
// It erases the constructor property!

duck.constructor === Bird // false -- Oops
duck.constructor === Object // true, all objects inherit from Object.prototype
duck instanceof Bird // true, still works

// To fix remember to define the constructor!!
Bird.prototype = {
  constructor: Bird, // define the constructor property
  numLegs: 2,
  eat: function () {
    console.log('nom nom nom')
  },
  describe: function () {
    console.log('My name is ' + this.name)
  },
}

// /////////////////////////////////
// Understand Where an Object’s Prototype Comes From
// //////////////////////////////////

function Bird(name) {
  this.name = name
}

let duck = new Bird('Donald')
// duck inherits its prototype from the Bird constructor function.
// You can show this relationship with the isPrototypeOf method:

Bird.prototype.isPrototypeOf(duck)
// returns true

// /////////////////////////////////
// Understand the Prototype Chain
// /////////////////////////////////

// All objects in JavaScript (with a few exceptions) have a prototype.
// Also, an object’s prototype itself is an object.

function Bird(name) {
  this.name = name
}

typeof Bird.prototype // yields 'object'

Object.prototype.isPrototypeOf(Bird.prototype) // returns true

let duck = new Bird('Donald')
duck.hasOwnProperty('name') // yields true

// The hasOwnProperty method is defined in Object.prototype,
// which can be accessed by Bird.prototype,
// which can then be accessed by duck.
// This is an example of the prototype chain.

// In this prototype chain,
// Bird is the supertype for duck,
// while duck is the subtype.
// Object is a supertype for both Bird and duck.
// Object is a supertype for all objects in JavaScript.
// Therefore, any object can use the hasOwnProperty method.
