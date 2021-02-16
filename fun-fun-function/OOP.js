// /////////////////////////////////
// Bind
// /////////////////////////////////
let dog = {
  sound: 'woof',
  talk: function () {
    console.log(this.sound)
  },
}

dog.talk() // woof

let talkFunction = dog.talk
talkFunction() // undefined // this doesn't work because of `this`
// OOP & FP clash here because FP doesn't know what `this` is

//  In JS you can assign a method to a variable
//  which is kinda of odd comapared to other languages

// JS is an OOP & FP language --weird, read more on this below!

// the above talkFunction doesn't work,
// because its OOP clashing with FP
// in FP there is no such thing as `this`

// when you save it as a variable,
// it stops being a method connected to an object,
// and becomes a function - and so when you call it, `this` no longer references the dog
// it's lost it's connection to the dog object

// this refers to the context where the function is being called
// not where the function was defined

// we can use bind

let boundFunction = talkFunction.bind(dog)
boundFunction()

let button = document.getElementById('myNiceButton')

button.addEventListener(
  'click',
  dog.talk // this will call the window and not the dog
)
button.addEventListener('click', dog.talk.bind(dog))

// /////////////////////////////////
// Some History of JavaScript
// it was original written as a schema (OOP) language,
// but then the builder boss asked him to make it more like Java (FP)

// Because JavaScript is not just OOP languages
// it's also a functional programming language

// /////////////////////////////////
// JS is an OOP & FP language --weird!
// /////////////////////////////

// Higher Order Functions are thanks to Functional programming

// ////////////////////////////////
// If you save a method to a variable you must bind!!
// ////////////////////////////////

// JS  is special compared to other languages because you can assign a method to a variable
// but then it loses the contest of `this`

// see above talkFunction, it doesn't work,
// because its OOP clashing with FP
// in FP there is no such thing as `this`

// ////////////////////////////////
// What happens when you save it as a variable?
// //////////////////
// it stops being a method connected to an object,
// and becomes a function - and so when you call it, `this` no longer references the dog
// it's lost it's connection to the dog object

// ////////////////////////////////
// `this` refers to the context where the function is being called
// not where the function was defined
// //////////////////////////////

// ////////////////////////////////
// ////////////////////////////////
// Class
// ////////////////////////////////
// //////////////////////////

// 1
// How does 'class' work in JavaScript?

// 2
// JavaScript does not have classes

// 3
// When in Rome, learn JavaScript
