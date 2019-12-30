// 3. Functions

// - give us a way to structure larger programs
// - to reduce repeition
// - to associate names with subprograms
// - and to isolate these subprograms from each other

// Define f to hold a function value
const f = function(a) {
  console.log(a + 2)
}

// Define g to be a function
function g(a, b) {
  return a * b * 3.5
}

// A less verbose function value
let h = a => a % 3

// ### key aspect to understanding functions is understand scopes!

// - each block creates a new scope
// - Params and bindings declared in a given scope are local and not visible from the outside
// -
// - Bindings declared with var behave differently,
// - they end up in the nearest function scope or the global scope

// ### separating the tasks your program performs into different tasks is helpful

// - you won't have to repeat yourself
// - functions can help organise a program by grouping code into pieces that do specific things
//
