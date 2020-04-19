//  What are Iterators?
// for..of loop
// does the for of loop know how to iterate arrays?
// no. it had no idea what an array is.

// the reason it know how to iterate over an array,
// is because the array provides an iterator, that tells the for..of loop how to iterate over it

const dragons = ['Peter the dragon', 'Francois the dragon', 'Ivan the dragon']

// how does a for of loop work?...
const iterator = dragons[Symbol.iterator]() // it calls the Symbol.iterator method on the dragons array
// Symbols are unique keys, they help stop naming conflicts, you use as a property on objects
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

for (dragon of dragons) {
  dragon
}

// we can iterator over anything
for (char of dragons[0]) {
  char
}

// we can make our own custom objects iterable
