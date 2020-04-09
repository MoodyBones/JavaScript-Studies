//  Exercises
// "this" keyword

// 1
// --------------------------

function sayHello() {
  console.log(`Hello ${this.name}!`)
}

// TODO: Fix it. Expected output: "Hello Raf!"
var name = 'Raf'

sayHello() //  "Hello Raf!"

// 2
// --------------------------

function sayHello(name, job) {
  console.log(`${name} is a ${job} and lives in ${this.city}`)
}

// TODO: Fix it. Expected output: "Raf is a software developer and lives in Munich"
// Use: apply();

var obj = {
  city: `Munich`,
}

sayHello.apply(obj, ['Raf', 'software developer'])

// 3
// --------------------------
function Book(title, pages) {
  this.title = title
  this.pages = pages
}

const fooBook = new Book('Foo', 10)
const barBook = new Book('Bar', 20)

//TODO: You can declare 1 function and assign it once

Book.prototype.getLongTitle = function () {
  return `${this.title}, ${this.pages} pages`
}

console.log(fooBook.getLongTitle()) // TODO: expected result "Foo, 10 pages";
console.log(barBook.getLongTitle()) // TODO: expected result "Bar, 20 pages";
