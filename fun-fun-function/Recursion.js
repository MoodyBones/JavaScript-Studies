// ////////////////////////////////////
// RECURSION??
// https://www.youtube.com/watch?v=k7-N8R0-KY4
// when a function calls it's self until it doesn't

// Should output
// 10, 9, 8, ... 1

// written in ECMA script 6
// const countDownFrom = (num) => {
//   countDownFrom(num -1)
// }
// the above will crash/ exceed the maximum callstack size !!
//  because we MUST INCLUDE a STOP CONDITION
// otherwise it will just keep counting into negatives until it exceeds the the max call stack size

const countDownFrom = (num) => {
  if (num === 0) return
  console.log(num)
  countDownFrom(num - 1)
}
console.log(countDownFrom(10))
// when it reaches 0 the function will return/end
// and that's recursion a function that calls it's self until it doesn't :)

// WHY USE RECURSION??
// when you could use a loop?
// because there are things that recursion can do that loops cannot

const categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'chihuahua', parent: 'dogs' },
  { id: 'labrador', parent: 'dogs' },
  { id: 'persian', parent: 'cats' },
  { id: 'siamese', parent: 'cats' },
]

// we want take the above database and output in the following tree structure like..
// {
//   animals: {
//     mammals: {
//       dogs: {
//         chihuahua: null,
//         labrador: null
//       },
//       cats: {
//         persian: null,
//         siamese: null
//       },
//     },
//   },
// }

// PROGRAMMING TIP
// think about the end goal
// one of the biggest mistakes in programming is,
// starting to code too early,
// TAKE SOME TIME TO THINK ABOUT YOUR PROBLEM
// AND WHERE YOU ARE GOING
// this will SAVE YOU A LOT OF TIME

let makeTree = (categories, parent) => {
  let node = {} // parts of a tree are called nodes in computer science
  categories
    .filter((c) => c.parent === parent) // filter out any objects that have a parent === null(or the value of the parent we based in, which is null in this case)
    .forEach(
      (c) => (node[c.id] = makeTree(categories, c.id)) // assign the id to the node
    ) // & then call the function again, but instead of parent pass in id
  return node
}

console.log(JSON.stringify(makeTree(categories, null), null, 2))

// so again how does the above work??

// in the first loop, when we call makeTree() we are passing in categories
// categories will be all of the categories, and
// we're going to filter them,
// we will filter out the ones that have the same parent as,
// the ones we passed in (e.g. null)

// and then forEach catergory (e.g animals will be the first),
// we will assign a property on the node with the same c.id (animals) of each category,
// with the return value of ourselves,
// BUT this time we are not passing in null as the parent category,
// we are passing in c.id (e.g animals)

// so now we are making a tree with categories that have animals as a parent
// and they in turn will call makeTree
// and make trees that have mammals as the parent category,
// and they will call makeTree with cats and dogs,
// making trees that include Chihuahua and labrador
// and this could on  and on and on, but it ends because it run out of things to make trees of

// and you could do this with loops
// like nested forLoops :(
// but this only works if it's a very limited ammount of nesting
// sometimes you need to make trees that are a hundred levels deep,
// and so you cannot use loops

// WHAT HAVE WE LEARNT?
// that recursion is just a function that calls itself until it doesn't
// we looked at an example of how to use it to count down from 10
// and an example of why you need recursion
// and why you can't solve everything with loops
