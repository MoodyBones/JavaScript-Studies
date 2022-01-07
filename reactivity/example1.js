// Q: How can we save the total calculation, so we can run it again when price or quanity updates?

// //////////////////////////////////////////////////////////////////////////////
// Example 1
// it doesn't change because total hasn't be rerun and doesnt know that price has changed
// //////////////////////////////////////////////////////////////////////////////

function example1() {
  let price = 10
  let quantity = 2
  let total = price * quantity

  console.log(total)

  price = 20

  console.log(total)
}

console.log(example1())

// //////////////////////////////////////////////////////////////////////////////
// Example 2
// make it reactive
// //////////////////////////////////////////////////////////////////////////////

function example2() {
  let price = 10
  let quantity = 2
  let total = 0
  let target = null // target is the code that we are targeting

  let storage = [] // to store the code

  target = () => {
    total = price * quantity
  }

  function record() {
    storage.push(target)
  } // push target into storage

  function replay() {
    storage.forEach((f) => f())
  } // for each function in storage, run it

  record() // save the code inside the target
  target() // run the code

  // .. & later when a variable has changed
  price = 30
  console.log(total) // 20 // no change. until we replay/rerun all the functions in storage
  replay() // run all the code we've saved in storage
  console.log(total) // 60 // it works! updated total (w price change) was returned
}

console.log(example2())

// //////////////////////////////////////////////////////////////////////////////
// Example 3
// How can we create a more scalable soluting, a class to store our dependencies?
// a more scalable solution, using observer pattern

function example3() {
  // Dep = dependency
  // (Vue has a dep class that mimics this dep class)

  class Dep {
    // instantiate storage
    constructor() {
      this.subs = [] // this is our storage, we are calling it subs (subscribers) because we are using the observer pattern
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
}

console.log(example3())

// //////////////////////////////////////////////////////////////////////////////
// Example 4
// in our reactivity system each of our variables willl have different dependencies
// Q: how can we encapsulate the code thats needs to be watched or recorded?
// a watcher function, that takes an anonymous function as its argument

// define a watcher function
// set the target
// call dep depend
// run the target
// clear it

function example4() {
  // constructor
  class Dep {
    constructor() {
      this.sub = []
    }

    // depend
    depend() {
      if (target && !this.sub.includes(target)) {
        this.sub.push(target)
      }
    }

    // notify
    notify() {
      this.sub.forEach((sub) => sub())
    }
  }

  // define a new dep
  let dep = new Dep()
  let price = 10
  let quantity = 2
  let total = 0
  let target = null

  function watcher(fn) {
    target = fn
    dep.depend()
    target()
    target = null
  }

  watcher(() => {
    total = price * quantity
  })

  // to test
  //   console.log(total)
  //   price = 30
  //   console.log(total)
  //   dep.notify()
  //   console.log(total)
}
console.log(example4())

// Each of our variables will have it's own Dep instance
// so when it;s updated it can rerun all the functios it needs to

// //////////////////////////////////////////////////////////////////////////////
// Example 5
// Q: How do we identify which prop are acceseed inside each watcher?
// how to figure out which dep instance to call?

function example5() {
  let data = { price: 5, quantity: 2 }

  watcher(() => {
    total = data.price * data.quantity
    // price accesed
    // call dep.depend on price
    // quantity accesed
    // call dep.depend() on quantity
  })

  watcher(() => {
    salePrice = data.price * 0.9
    // price accesed
    // call dep.depend() on price
  })

  // If we can identify which prop is updated (or set)
  // we can trigger dep.notify() on it's de class

  // price set
  // call dep.notify() on price's dep instance
}

// //////////////////////////////////////////////////////////////////////////////
// Example 6
// Object.defineProperty()
// allows us to define getter and setter functions on a property

function example6() {
  let data = { price: 5, quantity: 2 }

  Object.defineProperty(data, 'price', {
    get() {
      console.log('getting value')
    },

    set(newVal) {
      console.log('setting value')
    },
  })

  // to test
  // console.log(data.price)
  // data.price = 10
  // console.log(data.price)
}

console.log(example6())

// //////////////////////////////////////////////////////////////////////////////
// Example 7
// Object.defineProperty()
// with get and set functionality added

function example7() {
  let data = { price: 5, quantity: 2 }
  let internalValue = data.price

  Object.defineProperty(data, 'price', {
    get() {
      console.log(`getting price ${internalValue}`)
      return internalValue
    },

    set(newVal) {
      console.log(`setting price to ${newVal}`)
      // if (newVal > 0) {
      internalValue = newVal
      // }
    },
  })
  // to test
  // console.log(data.price)
  // data.price = 10
  // console.log(data.price)
}

console.log(example7())

// //////////////////////////////////////////////////////////////////////////////
// Example 8
// get the keys and iterate over them

function example8() {
  let data = { price: 5, quantity: 2 }

  // get the keys and iterate over them
  Object.keys(data).forEach((key) => {
    //  set interal value to the intial value of the key
    let internalValue = data[key]

    //  call defineProperty for the current key
    Object.defineProperty(data, key, {
      get() {
        console.log(`getting ${key}: ${internalValue}`)
        return internalValue
      },

      set(newVal) {
        console.log(`setting ${key}: ${newVal}`)
        // if (newVal > 0) {
        internalValue = newVal
        // }
      },
    })
  })
  // to test
  total = data.price * data.quantity
  data.price = 10
}

console.log(example8())

// //////////////////////////////////////////////////////////////////////////////
// REVIEW

function example9() {
  class Dep {
    constructor() {
      this.sub = []
    }

    depend() {
      if (target && !this.sub.includes(target)) {
        this.sub.push(target)
      }
    }

    notify() {
      this.sub.forEach((sub) => sub())
    }
  }

  let data = { price: 5, quantity: 2 }

  Object.keys(data).forEach((key) => {
    let internalValue = data[key]
    let dep = new Dep() // each key needs its own dep instance (storage)

    Object.defineProperty(data, key, {
      get() {
        dep.depend() // Remember the target we are running
        return internalValue
      },

      set(newVal) {
        if (newVal > 0) {
          internalValue = newVal
          dep.notify() // rerun saved targets
        }
      },
    })
  })

  function watcher(fn) {
    target = fn // set
    target() // run
    target = null // clear
  }

  watcher(() => {
    total = data.price * data.quantity
  })

  watcher(() => {
    salePrice = data.price * 0.9
  })

  // to test
  total
  salePrice
  data.price = 20
  total // whoop it's reactive!!
  salePrice // sale price also updated!
}

console.log(example9())

// //////////////////////////////////////////////////////////////////////////////
// Example 10
//  How  would this work in Vue?

// Vue Data’s getter and setter
// - Uses `Object.defineProperty()`

// When get is run on a reactive property we collect it as a dependency
// - run `dep.depend()` on the **Dep class**

// When a property is set
// - run `dep.notify()` on the **Dep class**
