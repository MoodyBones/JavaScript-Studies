// 1. 
// Open some JavaScript code that you have been working on and put console.log(typeof(something)) in it, 
// replacing something with different variables in your code.

// Which value types did you manage to find an example for? Try to “collect” as many types as you can.

Number
Object
function
string
// it surprised me that it said object instead of array :)


// 2.
// Imagine you see some code that checks whether a value is a date: 
// typeof(value) === 'date'

// Will this code work?
// Why or why not?

// no it's false, i think that this is because of the strict equals operator 

// Answer: typeof(value) === "date" is always false.

// This is because "date" is not one of the possible typeof results. 
// Dates are not one of the primitive types (unlike numbers and booleans), and they are also not functions. 
// So typeof for a date is always going to be "object".


// 3.
// One of the values mentioned in this module “lies” about its type. Concretely, typeof will return an incorrect answer for it because of a JavaScript bug that is now too late to fix.

// Do you know which value it is? You can find this value by trying typeof for each example in our list of nine types.


typeof(undefined)
"undefined"
typeof(null)
"object"
typeof(Boolean)
"function"
typeof(Number)
"function"
typeof(1)
"number"
typeof(Symbol)
"function"
typeof(BigInt)
"function"

​
// Answer: null is the value that "lies" about its type.

// Concretely, typeof(null) is "object" even though null is not an object. 
// Null is a primitive value. 
// (Here’s a historical note on how that happened.) This is a very old bug in JavaScript. 
// It cannot be fixed because it would break existing websites.

// You might ask: isn’t typeof([]) === "object" a bug? 
// No. Arrays aren’t primitive, so they are objects! Unlike null, they’re telling the truth.




// 4.
// No matter what value we pick, we know that typeof(value) can only give us one of the several predetermined answers.

// Is there anything similarly interesting that we can say about typeof(typeof(value))?

// it returns a string, but i don't know if thats because its returning 'typeof(value)' or just 'value'

// Answer: typeof(typeof(value)) is always "string".
// Here’s why. We know typeof(value) always gives us one of the predetermined strings: "undefined", "boolean", "number", and so on. Predetermined strings.
// So typeof any of them is "string". Because they’re strings!