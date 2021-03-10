// //////////////////////////////////
// Find The Mammals

const animals = [
  {
    type: 'Dog',
    mammal: true,
  },
  {
    type: 'Snake',
    mammal: false,
  },
  {
    type: 'Cheetah',
    mammal: true,
  },
]

// const getMammals = (arr) => {
//   return arr.filter((e) => e.mammal)
// }

// /////////////////////////////
// refactor with destructuring
// each animal is a mammal but de-structure mammal out of animal
const getMammals = (arr) => {
  return arr.filter(({ mammal }) => mammal)
}

console.log(getMammals(animals))
