Function.prototype represents the Function prototype object

Function objects inherit from Function.prototype.

Function.prototype cannot be modified.

As functions are also Objects in JavaScript, these 3 methods are used to control the invocation of the function. call() and apply() were introduced in ECMAScript 3 while bind() was added as part of ECMAScript 5.

### Properties

Function.prototype.length

- Specifies the number of arguments expected by the function

Function.prototype.name

- the name of the function

Function.prototype.constructor

- Specifies the function that creates an object's prototype. See Object.prototype.constructor

Function.prototype.arguments

- Deprecated
- an array corresponding to the arguments passed to a function. Use the argiments object available within the function instead.

## Methods

apply(), bind(), call()

call() and apply are similar, they both call a function and take arguments

apply(), takes an array or you can use **arguments** (if you don't know)

bind() returns a new function, and changes ***this***

You can use call()/apply() to invoke the function immediately. bind() returns a bound function that, when executed later, will have the correct context ("this") for calling the original function. 

So bind() can be used when the function needs to be called later in certain events when it's useful.

more details below...

## Function.prototype.call()

- Calls a function and sets its ***this*** to the provided value (same as apply())
- Arguments can be passed as they are. this is called an **arguments list**

**Syntax**

    ```function.call(thisArg, arg1, arg2, ...)```

**Parameters**

**`thisArg`**

Optional. The value of `this` provided for the call to a *`function`*. Note that `this` may not be the actual value seen by the method: if the method is a function in [non-strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), `[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)` and `[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)` will be replaced with the global object and primitive values will be converted to objects.

**`arg1, arg2, ...`**

Optional. Arguments for the function.

**Return value**

The result of calling the function with the specified this value and arguments.
```
    function Product(name, price) {
    	this.name = name;
    	this.price = price;
    }
    
    function Food(name, price) {
    	Product.call(this, name, price)
    	this.category = 'food'
    }
    
    console.log(new Food('cheese', 5).name);
    // expected output: "cheese"
```    

- The call() allows for a function/method belonging to one object to be assigned and called for a different object.
- call() provides a new value of this to the function/method. With call, you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.

### Using call to chain constructors for an object
```
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }
    
    function Food(name, price) {
      Product.call(this, name, price);
      this.category = 'food';
    }
    
    function Toy(name, price) {
      Product.call(this, name, price);
      this.category = 'toy';
    }
    
    var cheese = new Food('feta', 5);
    var fun = new Toy('robot', 40);
```

### Using call to invoke an anonymous function
```
    var animals = [
      { species: 'Lion', name: 'King' },
      { species: 'Whale', name: 'Fail' }
    ];
    
    for (var i = 0; i < animals.length; i++) {
      (function(i) {
        this.print = function() {
          console.log('#' + i + ' ' + this.species
                      + ': ' + this.name);
        }
        this.print();
      }).call(animals[i], i);
    }
    
    // ----
    // #0 Lion: King
    // #1 Whale: Fail
```
- the purpose of the anonymous function is to add a print function to every object,
- which is able to print the right index of the object in the array
- Passing the object as this value was not strictly necessary, but is done for explanatory purpose

### call without passing in first argument
```
    var sData = 'Wisen';
    
    function display() {
      console.log('sData value is %s ', this.sData);
    }
    
    display.call();  // sData value is Wisen
```

- If the first argument is not passed, the value of this is bound to the global object.

## Function.prototype.apply()

- calls a function and sets its ***this*** to the provided value (same as call())
- Arguments can be passed as an Array Object, (or an array like object)

**Syntax**

    ```function.apply(thisArg, [argsArray])```

**Parameters**

**`thisArg`**

The value of `this` provided for the call to *`func`*. 

Note that `this` may not be the actual value seen by the method: if the method is a function in [non-strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) code, `[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)` and `[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)` will be replaced with the global object, and primitive values will be boxed. 

This argument is not optional

**`argsArray`**

Optional. An array-like object, specifying the arguments with which *`func`* should be called, or `[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)` or `[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)` if no arguments should be provided to the function. Starting with ECMAScript 5 these arguments can be a generic array-like object instead of an array.

**Return value**

The result of calling the function with the specified this value and arguments.
```
    const numbers = [5, 6, 2, 3, 7];
    
    const max = Math.max.apply(null, numbers);
    
    console.log(max);
    // expected output: 7
    
    const min = Math.min.apply(null, numbers);
    
    console.log(min);
    // expected output: 2
```

- apply is very similar to call(), except for the type of arguments it supports
- you use an arguments array instead of a list of arguments (parameters)

- with apply you can also use an array literal
```
    function.apply(this, ['eat', 'bananas'])
    
    //or an array-like object
    
    function.apply(this, new Array('eat', 'bananas'))
```

- you can also use arguments for the argsArray parameter
- arguments is a local variable of a function.
- it can be used for all unspecified aruguments of the called object.
- Thus you do not need to know the arguments of the called object when you use the apply method.
- You can use arguments to pass all the arguments to the called object.
- The called object is then responsible for handling the arguments

### Using apply to append an array to another
```
    var array = ['a', 'b'];
    var elements = [0, 1, 2];
    array.push.apply(array, elements)
    console.info(array)
    
    ---
    // (5) ["a", "b", 0, 1, 2]
```

- we can use **push** to append an element to an array,
- because push accepts a variable number of arguments, we can also push multiple elements at once
- **concat**  has the behaviour we want, BUT it creates and returns a new array, instead of appending and we want to append our existing array
- **apply** to the rescue!

## Function.prototype.bind()

- changes **this**
- Creates a new function which, when called, has its ***this*** set to the provided value,
- with a given sequence of arguments preceding any provided when the new function was called

**Syntax**

    ```function.bind(thisArg[, arg1[, arg2[, ...]]])```

**Parameters**

**`thisArg`**

The value to be passed as the `this` parameter to the target function when the bound function is called. 

The value is ignored if the bound function is constructed using the `[new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)` operator. 

When using `bind` to create a function(supplied as a callback) inside a `setTimeout`, any primitive value passed as `thisArg` is converted to object. 

If no arguments are provided to `bind`, the `this` of the executing scope is treated as the `thisArg` for the new function.

**`arg1, arg2, ...`**

Arguments to prepend to arguments provided to the bound function when invoking the target function.

**Return value**

A copy of the given function with the specified this value and initial arguments.
```
    const module = {
      x: 42,
      getX: function() {
        return this.x;
      }
    }
    
    const unboundGetX = module.getX;
    console.log(unboundGetX()); // The function gets invoked at the global scope
    // expected output: undefined
    
    const boundGetX = unboundGetX.bind(module);
    console.log(boundGetX());
    // expected output: 42
```

**Description**

- The bind() function creates a new bound function, which is an exotic function object (a term from ECMAScript 2015) that wraps the original function object.
- Calling the bound function generally results in the execution of its wrapped function.

A ****bound function has the following internal properties:

- **`[[BoundTargetFunction]]`** - the wrapped function object;
- **`[[BoundThis]]`** - the value that is always passed as this value when calling the wrapped function.
- **`[[BoundArguments]]`** - a list of values whose elements are used as the first arguments to any call to the wrapped function.
- **`[[Call]]`** - executes code associated with this object. Invoked via a function call expression. The arguments to the internal method are a **this** value and a list containing the arguments passed to the function by a call expression.

When a bound function is called, it calls internal method ****`[[Call]]` on `[[BoundTargetFunction]]`**,** with following arguments `Call(*boundThis*, *args*)`. Where, *`boundThis` *****is `[[BoundThis]]`, *`args` *****is `[[BoundArguments]]` followed by the arguments passed by the function call.

### Creating a bound Function
```
    this.x = 9;    // this refers to global "window" object here in the browser
    var module = {
      x: 81,
      getX: function() { return this.x; }
    };
    
    module.getX(); // 81
    
    var retrieveX = module.getX;
    retrieveX();   
    // returns 9 - The function gets invoked at the global scope
    
    // Create a new function with 'this' bound to module
    // New programmers might confuse the
    // global var x with module's property x
    var boundGetX = retrieveX.bind(module);
    boundGetX(); // 81
```

- The simplest use of bind() is to make a function that, no matter how it is called, is called with a particular this value.
- **A common mistake for new JavaScript programmers** is to extract a method from an object, then to later call that function and expect it to use the original object as its this (e.g. by using that method in callback-based code).
- Without special care, however, the original object is usually lost.
- Creating a bound function from the function, using the original object, neatly solves this problem

### Partially applied functions
```
    function list() {
      return Array.prototype.slice.call(arguments);
    }
    
    function addArguments(arg1, arg2) {
        return arg1 + arg2
    }
    
    var list1 = list(1, 2, 3); // [1, 2, 3]
    
    var result1 = addArguments(1, 2); // 3
    
    // Create a function with a preset leading argument
    var leadingThirtysevenList = list.bind(null, 37);
    
    // Create a function with a preset first argument.
    var addThirtySeven = addArguments.bind(null, 37); 
    
    var list2 = leadingThirtysevenList(); 
    // [37]
    
    var list3 = leadingThirtysevenList(1, 2, 3); 
    // [37, 1, 2, 3]
    
    var result2 = addThirtySeven(5); 
    // 37 + 5 = 42 
    
    var result3 = addThirtySeven(5, 10);
    // 37 + 5 = 42 , second argument is ignored
```

- The next simplest use of bind() is to make a function with pre-specified initial arguments.
- These arguments (if any) follow the provided this value and are then inserted at the start of the arguments passed to the target function,
- followed by the arguments passed to the bound function, whenever the bound function is called.

### Creating shortcuts

- bind() is also helpful in cases where you want to create a shortcut to a function which requires a specific this value.
- Take Array.prototype.slice, for example, which you want to use for converting an array-like object to a real array. You could create a shortcut like this:
```
    var slice = Array.prototype.slice
    
    //....
    
    
    slice.apply(arguments)
```

- with bind() this can be simplified. In the following piece of code, slice is a bound function to the apply() function of the Function.prototype, with the this value set to the slice() function of the Array.prototype.
- This means the additional apply() calls can be eliminated:
```
    // same as "slice" in the previous example
    var unboundSlice = Array.prototype.slice;
    var slice = Function.prototype.apply.bind(unboundSlice);
    
    // ...
    
    slice(arguments);
```

[https://www.codementor.io/@niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp](https://www.codementor.io/@niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp)
```
    // call()
    
    var obj = {name:"Mel"};
    
    var greeting = function(a,b,c){
        return "welcome "+this.name+" to "+a+" "+b+" in "+c;
    };
    
    console.log(greeting.call(obj,"Newtown","KOLKATA","WB"));
    
    

    // apply()
    
    var obj = {name:"Mel"};
    
    var greeting = function(a,b,c){
        return "welcome "+this.name+" to "+a+" "+b+" in "+c;
    };
    
    // array of arguments to the actual function
    var args = ["Newtown","KOLKATA","WB"];  
    console.log(greeting.apply(obj,args));

    // bind()
    
    var obj = {name:"Mel"};
    
    var greeting = function(a,b,c){
        return "welcome "+this.name+" to "+a+" "+b+" in "+c;
    };
    
    //creates a bound function that has same body and parameters 
    var bound = greeting.bind(obj); 
    
    console.dir(bound); ///returns a function
    console.log(bound("Newtown","KOLKATA","WB")); //call the bound function
```