// JavaScript
// Function.prototype.apply()
// Function.prototype.call()
// Function.prototype.bind()
// The arguments object
// Array.prototype.slice()


//////////
// apply()
// to chain constructors for an object

function Product(name, price) {
  this.name = name
  this.price = price
}

function Food(name, price) {
  Product.call(this, name, price)
  this.category = 'food'
}

function Toy(name, price) {
  Product.call(this, name, price)
  this.category = 'toy'
}

console.log(new Food('cheese', 5).name)
console.log(new Toy('truck', 7).name)


// apply()
// to invoke an anonymous function

var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
]

for (var i = 0; i < animals.length; i++) {
  ;(function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species + ': ' + this.name)
    }
    this.print()
  }.call(animals[i], i))
}

/////////
// call()
// to append an array to another

var array = ['a', 'b']
var elements = [0, 1, 2]
array.push.apply(array, elements)
console.log(array)

// call()
// with Math.max & Math.min

const numbers = [2, 1, 4, 3]

const max = Math.max.apply(null, numbers)
console.log(max)

const min = Math.min.apply(null, numbers)
console.log(min)


/////////
// bind()
// creating a bound Function

this.firstName = 'Jane'
this.lastName = 'Smith' 
// this refers to global "window" object here in the browser

const person = {
  firstName: 'Mel',
  lastName: 'Jones',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.getFullName()) 
// returns Mel Jones

const retrieveFullName = person.getFullName
console.log(retrieveFullName())
// returns Jane Smith - The function gets invoked at the global scope


// Create a new function with 'this' bound to person
var boundGetFullName = retrieveFullName.bind(person)
console.log(boundGetFullName()) 
// returns Mel Jones



//////
// arguments
// concat several strings

function myConcat(seperator) {
    var args = Array.prototype.slice.call(arguments, 1)
    // slice() array method, returns a shallow copy of a portion of an array into a new array object    
    return args.join(seperator)
}

myConcat('!', 'Mel', 'loves', 'Arne')
// returns "Mel!loves!Arne"

