// Closure
// - Closure is the most esoteric of JavaScript concepts
// - Enables powerful pro-level functions like ‘once’ and ‘memoize’
// - Many JavaScript design patterns including the module pattern use closure
// - Build iterators, handle partial application and maintain state in an
// asynchronous world

function createFunction() {
  function multiplyBy2(num) {
    return num * 2
  }
  return multiplyBy2
}

const generatedFunc = createFunction()
const result = generatedFunc(3)

// - in our global memory we save a function labelled `createFunction`
// - define a constant labelled `generatedFunc` and assign it the output of running `createFunc`
//     - run `createFunc` and add it to the callstack
//     - create a new executing context
//     - in local memory we will save a function labelled `multiplyBy2` with a parameter labelled `num`
//     - then we will return `mutlitplyBy2` to global (we do not run it!!)
//     - `createFunc` pops off the callstack
// - define a constant labelled `result` and assign it the output of running `generatedFunc` with an argument of 3, (`generatedFunc` is just a new label for `multiplyBy2)` and so the output will equal 6! :)
