// let price = 10
// let quantity = 2
// let total = price * quantity

// console.log(total)

// price = 20

// console.log(total)
// // it doesn't change because total hasn't be rerun and doesnt know that price has changed
// // we need to make it reactive

// example 2
// let price = 10
// let quantity = 2
// let total = 0
// let target = null // target is the code that we are targeting

// let storage = [] // to store the code

// target = () => {
//   total = price * quantity
// }

// function record() { storage.push(target) } // push target into storage
// function replay() { storage.forEach(f => f()) } // for each function in storage, run it

// record() // save the code inside the target
// target() // run the code
// // .. & later when a variable has changed
// price = 30
// console.log(total)  // 20 - no change until we replay/rerun all the functions in storage
// replay() // run all the code we've saved in storage
// console.log(total)  // 60 - it works! total was return

// example 3
// a more scalable solution, using observer pattern

// Dep = dependency
// (Vue has a dep class that mimics this dep class)

class Dep {
  // instantiate storage
  constructor() {
    this.subs = [] // this is our storage
  }

  // save our target
  depend() {
    if (target && !this.subs.includes(target)) {
      // if target is not null and target is not in storage
      this.subs.push(target) // add it to storage/subs
    }
  }

  // run all the functions in storage/subs
  notify() {
    this.subs.forEach((sub) => sub()) // for each function in storage/subs, run it
  }
}

const dep = new Dep()

let price = 10
let quantity = 2
let total = 0

let target = () => {
  total = price * quantity
}

dep.depend() // record target
target()

console.log(price)
console.log(total)
price = 30
dep.notify()
console.log(total)
