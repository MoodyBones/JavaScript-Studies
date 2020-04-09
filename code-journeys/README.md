# JavaScript "this" keyword

## Lesson by [Raffaele Pizzari](https://twitter.com/pixari) together with [Code Journeys](https://codejourneys.org/)

### [Slides](https://slides.com/raffaelepizzari/this#/)

## What is not "this"?

- this doesn't refer to the function itself
- this doesn't represent the state of the function
- this isn't pointing to the function object

### it's not the functions state

    function hello(name) {
    	console.log(`Hello ${name}`);
    	this.counter++;
    }

    hello.counter = 0

    console.log(hello.counter); // 0

    hello('Jack'); // Hello Jack
    hello('Mary'); // Hello Mary
    hello('John'); // Hello John

    console.log(hello.counter); // 0
    // see this counter doesnt increment :(

we have to use the scope

scope in JS is called lexical scope

### Lexical way

    function hello(name) {
    	console.log(`Hello ${name}`);
    	hello.counter++;
    }

    hello.counter = 0

    console.log(hello.counter); // 0

    hello('Jack'); // Hello Jack
    hello('Mary'); // Hello Mary
    hello('John'); // Hello John

    console.log(hello.counter); // 3
    // YAY the counter increments!

### It doesn't represent the functions scope

- "this" doesnt refer to the functions lexical scope
- We consider the scope like an object because it's a good abstraction and allows us to easily work with a complex concept, but it's not accurate.

## What is "this"??

### Everytime a function is invoked an "execution context" is created

### One of the properties of the execution context is the "this" reference which exists during the functions execution.

## Call-Site and Call-stack

    function foo() {
    	console.log('foo');
    	bar() //this is the call-site for bar()
    }

    function bar() {
    	console.log('bar');
    	baz()
    }

    function baz() {
    	console.log('baz');
    }

    foo() // foo baz bar

## It's all about the Call-Site

### The Call-site determines where "this" will point during the execution of a function.

[Check out this & object prototypes from "You-don't-know-JS" by Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)

There are Four rules

- Default binding
- Implicit binding
- Explicit binding
- new binding

## Rule 1: Default Binding

- foo() is called with a plain function reference
- The default binding rule applies to the function call and so points "this" at the global object

  function foo() {
  console.log(this.bar)
  }

  var bar = 2

  foo() // 2

- in strict mode the global object isn't eligible for the default binding, so the "this" is instead set to undefined
- in node js you will never use default binding (because it runs with strict mode by default, most stuff does these days)

## Rule 2: Implicit Binding

- We must consider if the call-site has a context object
- Regardless of whether foo() is intially declared on obj, or is added as a reference later, in neither case is the function really "owned" or "contained" by the obj object

  function foo() {
  console.log(this.bar);
  }

  var obj = {
  bar: 2,
  foo: foo,
  }

  obj.foo() // 2

- when an implicity bound function loses that binding it falls back to the default binding of either the global object or undefined, in strict mode

  function foo() {
  console.log(this.bar);
  }

  var obj = {
  bar: 2,
  foo: foo,
  }

  var fn = obj.foo
  var bar = '3';

  fn() // 3

## Rule 3: Explicit Binding

- We can **force a function call to use a particular object for the "this" binding,** without putting a property function reference on the object.

### call()

The **call()** method calls a function with a given this value and arguments provided individually

    function foo(a, b, c) {
    	console.log(this.bar, a, b, c)
    }

    var obj = {
    	bar: `hello`
    }

    foo.call(obj, 1, 2, 3) // hello 1 2 3

### apply()

The **apply()** method calls a function with a given this value and arguments provided as an **array** (or an array-like object)

    function foo(a, b, c) {
    	console.log(this.bar, a, b, c)
    }

    var obj = {
    	bar: `hello`
    }

    foo.apply(obj, [1, 2, 3]) // hello 1 2 3

## Rule 3: Hard Binding Pattern!!!

    function foo(something) {
    	console.log(this.a, something)
    	return this.a + something
    }

    function bind(fn, obj) {
    	return function() {
    		return fn.apply(obj, arguments) // arguments is an array-like object
    	}
    }

    var obj = {
    	a: 2,
    }

    var bar = bind(foo, obj)

    var b = bar(3) // 2, 3
    console.log(b) // 5

    var obj2 = {
    	a: 10,
    	foo: bar,
    }

    console.log(obj2.foo(2)) // 2, 2 and then 4

## Rule 4: new Binding

- JS has a "new" operator and the code pattern to use it looks like what we see in many class-oriented languages.
- but **"new" in JS doesn't provide any class-oriented functionality**

### What is a constructor?

- A constructor is a function that gets called with the new operator in front of it
- It's a **normal function and has nothing to with classes**
- Actually constructors don't exist but they are **"construction calls of functions"**

### What happens when a function is invoked with "new"?

    function foo(a) {
    	this.counter = a
    }

    const bar = new foo(10)

    console.log(bar.counter) // 10

### What does "prototype-linked" mean?

    function foo() {
    	this.counter = 10
    }

    const bar = new foo()

    foo.prototype.incrementCounter = function () {
    	this.counter++
    }

    bar.incrementCounter()
    console.log(bar.counter)

## Arrow functions & Lexical "this"

- The lexical binding of an arrow function cannot be overidden!!
- ES6 introduced arrow functions, and they use different rules
- **Instead of using the four standard "this" rules,**
- they adopt the "this" binding from the enclosing (function or global) scope
- **you can't force an arrow function to adopt this**

  function foo() {
  // return an arrow function
  return (a) => {
  // "this" is lexically inherited from foo()
  console.log(this.a)
  }
  }

  var obj1 = {
  a: 2,
  }

  var obj2 = {
  a: 3,
  }

  var bar = foo.call(obj1)
  bar.call(obj2) // 2 not 3

### Common use for arrow functions

    function foo() {
    	setTimeout(() => {
    	// "this" is lexically inherited from foo()
    	console.log(this.a)
    	}, 100)
    }

    var obj = {
    	a: 2,
    }

    foo.call(obj)
