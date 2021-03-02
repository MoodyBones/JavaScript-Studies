// Exercise: Pure Functions
//
// A pure function has two characteristics:
// No Side Effects: A pure function has no effect on the program or the world besides outputting its return value
// Deterministic: Given the same input values, a pure function will always return the same output. This is because its return value depends only on its input parameters, and not on any other information (e.g. global program state)
//
// Pure or not?
// Decide whether each of the following functions is pure or impure, and why. Use the characteristics described above to decide.

function getDate() {
  return new Date().toDateString()
}

// not pure
// no inputs
// side effect - calling out to Date()
// not deteminstic the output will differ everytime

function getWorkshopDate() {
  return new Date(2020, 11, 4).toDateString()
}

// pure
// deterministic it always returns the same value because we are passing the same arg into Date()
// A function is pure if its output depends on nothing but its inputs, and it always returns the same output if called with the same inputs (in this case, no inputs).

function toHex(n) {
  let hex = n.toString(16)
  return hex.padStart(2, '0')
}

// pure
// it has an input and returns
// it's not reaching out to any global variables but it is using inbuilt methods
// which is ok I guess???
// but now I'm unsure about the Date object

function rgbToHex(R, G, B) {
  return '#' + [toHex(R), toHex(G), toHex(B)].join('')
}

// pure
// i thought that reaching out to for toHex() was problematic, but it's not changing it, so i guess it's ok
// because we know that toHex() is deterministice & pure and we are not introducing any other impurities then we know this is a pure function

function setColor(R, G, B) {
  const hex = rgbToHex(R, G, B)
  const colorMe = document.getElementById('color-me')
  colorMe.setAttribute('style', 'color: ' + hex)
}

// not pure
// it's not returning anything
// colorMe should have been passed in and then a new versions returned
// side effect: changing the properties of an HTML element on the page (it's accessing the DOM )

async function readJsonFile(filename) {
  const file = await fetch(
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'
  )
  return await file.json()
}

// pure, but should't the filename be used?
// this function would always return the same site no matter what filename was passed in

// wrong
// inpure
// it's fetching data from the outside world (not determinstic)
// stuff in the outside world is always changing so if that file changes or gets deleted we will get a different result
// A function is not pure if its output depends on the state of the world (in this case, the contents of web-hosted file), or if calling the function at different times with the same inputs can give different outputs.

function writeJsonString(object) {
  return JSON.stringify(object, null, 2)
}

// pure
// all inputs & outputs look fine and no side effects
//
// note it could be not pure
// becuase objects are mutable, so they can change
// so someone could change the data in the object and this function would become impure
// **in functional programming we should always work with immutable data!!**

function exclusiveOr(A, B) {
  return (A || B) && !(A && B)
}

// Pure
// logical operators in javascript will always give the same result

function computeTruthTable(operator) {
  const truthValues = [true, false]
  const table = []
  for (const A of truthValues) {
    for (const B of truthValues) {
      const value = operator(A, B)
      table.push({ A, B, value })
    }
  }
  return table
}

// pure
// input operator
// returns table
// operator seems to be function which confused me a bit
// but whatever you get when you call operator(true, false) it is saved in value
// this is not a function style of writing code (it's more imperative). we look at rewriting this

function showTruthTable(operator) {
  console.table(computeTruthTable(operator))
}

// impure
// console
//  no output
