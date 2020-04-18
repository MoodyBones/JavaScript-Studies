// Higher Order functions
// https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84

// with Higher Order Functions you can write software with less bugs and in less time

// in JavaScript functions are values,
// and you can exploit this by dividing your code into small simple functions
// and composing them together

var triple = function (x) {
  return x * 3
}

var waffle = triple

waffle(30)

// or passed into other functions
// this is good for composition
// compose a bunch of small function and passing them into a bigger one

////////////
// Filter
/////////////
// is a function on the array
// that accepts another function as it's argument,
// which it will use to return a new filtered version of the array

const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
]

// old way wiht for loop
// const dogs = []
// for (let i = 0; i < animals.length; i++ ) {
//   if (animals[i].species === 'dog')
//   dogs.push(animals[i])
// }

// with filter
const dogs = animals.filter((animal) => animal.species === 'dog')

// or
const dogs = animals.filter(function (animal) {
  return animal.species === 'dog'
})

// the reason that we need less logic is that,
// when we write our software in small simple functions,
// they compose together which allows us to reuse functions all over the place

// ok lets break that down further
const isDog = function (animal) {
  return animal.species === 'dog'
}

const dogs = animals.filter(isDog)
// and now we can add another function that rejects all the dogs
const otherAnimals = animals.reject(isDog)

// compared to the  forLoop you can see how it's better,
//  to break the problem down into individual problems,
// first determining if an animal is a dog or not,
// then the problem of creating an array

// this allows us to think and reason and debug these problems separetly,
//  and this is a lot easier than when two solutions are jumbled together

///////////////////
// .map()

// old for loop way

const names = []
for (let i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}

console.log(names)
