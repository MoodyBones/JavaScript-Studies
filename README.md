# J A V A S C R I P T

# Study Notes & Exercises by [Mel Jones](https://twitter.com/_moodybones)

## Books

### Object-Oriented JavaScript by Stoyan Stefanov

Current Page 81

### Eloquent JavaScript by Marijn Haverbeke

Current Page 56

# Functions

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

- Generally speaking, a function is a "subprogram" that can be *called* by code external (or internal in the case of recursion) to the function.
- Like the program itself, a function is composed of a sequence of statements called the *function body*.
- Values can be *passed* to a function, and the function will *return* a value.

first-class objects

- In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object.
- What distinguishes them from other objects is that functions can be called. In brief, they are `[Function](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function)` objects.

give us a way to

- structure larger programs
- reduce repetition
- associate names with subprograms
- isolate these subprograms from each other

## Parameters

- JavaScript is not picky at all when it comes to parameters.
- If you pass more parameters than the function expects,
- the extra parameters will be silently ignored:

```
    sum(1,2,3,4,5)
    ---
    3
```

- you can also create fucntions that are flexible about the number of parameters they accept.
- this possiblye thats to the the:
- arguments array
- that is create automatically inside each function.

```
    function args() { return arguments }
    args()

    args(1,2,3,4, true, 'ninja')
    ----
    [1,2,3,4, true, 'ninja']
```

# MDN - Functions Guide

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

# Functions - Chapter 3 - Eloquent JavaScript

- give us a way to structure larger programs
- to reduce repeition
- to associate names with subprograms
- and to isolate these subprograms from each other

```
    // Define f to hold a function value
    const f = function(a) {
    	console.log(a + 2)
    }

    // Define g to be a function declaration
    function g(a, b) {
    	return a * b * 3.5
    }


    // A less verbose function value
    let h = a => a % 3
```

## Declaring functions

### Function declaration vs Function Expression(value) vs Arrow

[Function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

```
    console.log("The future says:", future())

    function future() {
    	return "You'll never have flying cars"
    }
```

- shorter
- are not part of the regular top to bottom flow of control
- are conceptually moved to the top of their scope,
- and can be used by all the code un that scope
- this is sometimes useful because it offfers the freedom to order code in a way that seems meaningful, without worrying abut having to define all functions before they are used
- ask maja about this

[Function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)(value)

```
    let launchMissiles = function() {
    	missileSystem.lanch("now")
    }
    if (safeMode) {
    	launchMissiles = function() {/* do nothing */}
    }
```

- A function expression is very similar to and has almost the same syntax as a function declaration.
- The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.
- A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.
- Function expressions are not hoisted, unlike function declarations. Meaning, you can not use a function expression before you define them;

```
    console.log(notHoisted) // undefined
    //even though the variable name is hoisted, the definition isn't. so it's undefined.
    notHoisted(); // TypeError: notHoisted is not a function

    var notHoisted = function() {
       console.log('bar');
    };
```

- a function expression/value can do all the things that other values can do
  - use it in arbitrary expressions
  - call it
  - it is possible to store s function value in a new binding
  - pass it in as an argument
  - and so on
- note that a binding that holds a function is still just a regular binding and can if not constant, be assigned a new value!!

- it is commonly used as a callback

  button.addEventListener('click', function(event) {
  console.log('button is clicked!')
  })

Arrow Functions

- added in 2015
- make it possible to write small functions in a less verbose way
-

### key aspect to understanding functions is understand scopes!

- each block creates a new scope
- Params and bindings declared in a given scope are local and not visible from the outside
-
- Bindings declared with var behave differently,
- they end up in the nearest function scope or the global scope

### separating the tasks your program performs into different tasks is helpful

- you won't have to repeat yourself
- functions can help organise a program by grouping code into pieces that do specific things
-

## Function Scope

a function defined inside another function can also access all variables in it's parent function

a function can access all variable and functions defined inside the scope in which is it defined

Variables deifned inside a function cannot be accessed from anywhere outside the function, because the variable is defined in the scope of the function

- Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function.
- However, a function can access all variables and functions defined inside the scope in which it is defined.

- In other words, a function defined in the global scope can access all variables defined in the global scope.
- A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.
