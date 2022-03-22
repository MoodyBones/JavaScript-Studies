// what is?
// control the creation process of an object
// in JS
// Class, Constructor, Factory, Singleton

// Classes should be capitalized

// /////////
// Class Design Pattern

// set up car blueprint
class Car {
  constructor(doors, engine, color) {
    this.doors = doors
    this.engine = engine
    this.color = color
  }
}

// create a new object called civic
const civic = new Car(4, 'V6', 'grey')

console.log(civic) // Car {doors: 4, engine: 'V6', color: 'grey'}

// /////////
// Constructor Pattern

// leverage a class
// that already has a constructor
// and extend it (e.g. add new properties)

// we will use it to creaat an SUV

class SUV extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color) // in react is super(props)!! woah mind blown :)
    this.wheels = 4 // this sets the default for wheels to 4
  }
}

const cx5 = new SUV(4, 'V6', 'grey')
console.log(cx5) // SUV {doors: 4, engine: 'V6', color: 'grey', wheels: 4}

// you can keen extending a class

// example from react docs https://reactjs.org/docs/render-props.html#gatsby-focus-wrapper
// class MouseTracker extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleMouseMove = this.handleMouseMove.bind(this)
//     this.state = { x: 0, y: 0 }
//   }

//   handleMouseMove(event) {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY,
//     })
//   }

//   render() {
//     return (
//       <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
//         <h1>Move the mouse around!</h1>
//         <p>
//           The current mouse position is ({this.state.x}, {this.state.y})
//         </p>
//       </div>
//     )
//   }
// }

// /////////
// Singleton Pattern
// stops our class from creating multiple instances
// only one instance of the class will be created

let instance = null

class CarSingleton {
  constructor(doors, engine, color) {
    // if its try create a new object
    if (!instance) {
      this.doors = doors
      this.engine = engine
      this.color = color
      instance = this
    } else {
      return instance
    }
  }
}

const civicSingleton = new CarSingleton(4, 'V6', 'grey')
const hondaSingleton = new CarSingleton(4, 'V8', 'red')

console.log(civicSingleton)
console.log(hondaSingleton) // this won't be created because an instance of carSingleton already exists

// /////////
// Factory Pattern
// when you want create a mechanism to create other objects
// very efficient in large applications
// e.g. you could build a factory that creates types of users or game with different types of characters

// e.g. a factory to create cars

class Car2 {
  constructor(doors, engine, color) {
    this.doors = doors
    this.engine = engine
    this.color = color
  }
}

// a function that will create new cars for us automatically

class CarFactory {
  createCar(type) {
    switch (type) {
      case 'civic':
        return new Car2(4, 'V6', 'grey')
      case 'honda':
        return new Car2(2, 'V8', 'red')
    }
    // if (type === 'civic') {
    //   return new Car2(4, 'V6', 'grey')
    // } else if (type === 'honda') {
    //   return new Car2(2, 'V8', 'red')
    // }
  }
}

const factory = new CarFactory()
const myHonda = factory.createCar('honda')
console.log(myHonda)

// /////////
// Abstract Factory Pattern
// a factory that creates other factories

// e.g. a car company that oversees multiple factories

class SUV2 {
  constructor(doors, engine, color) {
    this.doors = doors
    this.engine = engine
    this.color = color
  }
}

class SuvFactory {
  createSuv(type) {
    switch (type) {
      case 'cx5':
        return new SUV2(4, 'V6', 'grey')
      case 'mazda':
        return new SUV2(2, 'V8', 'red')
    }
  }
}

const myCarFactory = new CarFactory()
const mySuvFactory = new SuvFactory()

const autoManufacturer = (type, model) => {
  switch (type) {
    case 'car':
      return myCarFactory.createCar(model)
    case 'suv':
      return mySuvFactory.createSuv(model)
  }
}

const newCx5 = autoManufacturer('suv', 'cx5')
console.log(newCx5) // SUV2 {doors: 4, engine: 'V6', color: 'grey'});
