```
    let a = 10
    let b = a
    a = 0

    // returns
    // a = 0
    // b = 10
``

## What's a Mental Model?

how your own brain processes and problem solves

These approximations of how something works in your head are known as “mental models”.

- `let a = 10;`
    - Declare a variable called `a`. Set it to `10`.
- `let b = a;`
    - Declare a variable called `b`. Set it to `a`.
    - Wait, what’s `a` again? Ah, it was `10`. So `b` is `10` too.
- `a = 0;`
    - Set the `a` variable to `0`.
- So `a` is

- But sometimes, our mental models are wrong. Maybe a tutorial we read early on has sacrificed correctness for the ease of explaining.
- Maybe we incorrectly transferred an intuition about a particular language feature, like this, from another language we learned earlier.
- Maybe we inferred a mental model from some piece of code and never really verified if it was accurate.

- Identifying and fixing these problems is what Just JavaScript is all about.
- We will gradually build (or, possibly, rebuild) your mental model of JavaScript to be accurate and useful.
- A good mental model will help you find and fix bugs faster, understand other people’s code better, and feel confident in the code you write.

## Coding, Fast and Slow

“Thinking, Fast and Slow” by Daniel Kahneman is a widely popular non-fiction book. Its central thesis is that humans use two different “systems” when thinking.

Fast system

- is good for pattern matching and gut reactions,
- but it's not good for planning

Slow system

- is repsonsible for complex step-by-step reasoning
- let's us plan future events, engage in arguments, or follow mathematical proofs

Because the slow system is so mentally draining, we tend to default to the fast one - even when dealing with intellectual tasks like coding

Imagine that you;re in the middle of a lot of work, and you wnat to quickly identify what this function does.

    function duplicateSpreadsheet(original) {
    	if (original.hasPendingChanges) {
    		throw new Error ('You need to save the file before you can duplicate it.')
    	}
    	let copy = {
    		created: Date.now(),
    		author: original.author,
    		cells: original.cells,
    		metadata: original.metadata,
    	}
    	copy.metadata.title = 'Copy of ' + original.metadata.title
    return copy
    }

- This function duplicates a spreadsheet
- It throws an error if the original spreadsheet isn't saved
- It prepends 'Copy of' to the new spreadsheet's title

BUT - & here is the bug

- **this function also accidentally changes the title of the original spreadsheet!!!**

Missing bugs like this is something that happens to every programmer, every day. But now that you know a bug exists, will you read the code differently? If you’ve been reading code in the “fast” mode, it’s likely you’ll switch to the more laborious “slow” mode to find it.

In the “fast” mode, we guess what the code does based on naming, comments, and its overall structure. In the “slow” mode, we retrace what the code does step by step.

That’s why having a correct mental model is so important. Simulating a computer in our heads is hard enough — and this effort is wasted with wrong mental models.

Don’t worry if you can’t find the bug at all. This means you’ll get the most out of this course! Over the next modules, we’ll rebuild our mental model of JavaScript together so that you see this bug plain as day.

In the next module, we'll start building mental models for some of the most fundamental JavaScript concepts — values and variables.

Email 20/01/2020

## Code and Values

*In the beginning was the Value.*

What is a value? It's hard to say.

A value is a *thing* in the JavaScript universe

Numbers are values - but so are a few other things, like objects and functions.

However, many things, such as an if statement or a variable declaration are not values.

To distinguish values from everything else in my JavaScript program, I like to imagine this drawing of the Little Prince by Antoine de Saint-Exupéry.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0c46bcad-6459-40e2-8371-5b135fcd3659/unnamed.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0c46bcad-6459-40e2-8371-5b135fcd3659/unnamed.jpg)

I'm standing on a small asteroid - it is the code of my program.

On it's surface, I see the if statements and variables declarations, commas, curly braces, and all the other things one might find in the JavaScript code.

My code contains instructions like "make a function call" or "do this thing many time", or even "throw an error". I walk through these instructions step by step - running errands from my small asteroid.

But every once in a while, I look up.

On a clear night, I see different values in the JavaScript sky: booleans, numbers, strings, symbols, functions and objects, `null` and `undefined` - oh my! I might refer to them in my code, but they don't exist *inside* my code.

In my JavaScript universe, values float in space.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/64d577d4-64b7-468f-b941-f51769a41dfd/unnamed.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/64d577d4-64b7-468f-b941-f51769a41dfd/unnamed.png)

### Primitive Values

- numbers
- strings
- and 5 more (boolean, null, undefined, symbol, BigInt)

    console.log(2);
    console.log("hello");
    console.log(undefined);

All primitive values have something in common. **There's nothing I can do in my code that would affect them.** This sounds a bit vague, so we'll explore what this means concretely in the next module. For now, I'll say that primitive values are like stars - cold and distant, but always there when you need them.

*That's the first kind of values.*

### Objects and Functions

are also values, but they are not primitive. This makes them very special.

    console.log({});
    console.log([]);
    console.log(x => x * 2);

firefox console mmm prettty

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/51b165da-4024-41ef-aa36-64ef29f96899/Screen_Shot_2020-02-03_at_13.52.25.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/51b165da-4024-41ef-aa36-64ef29f96899/Screen_Shot_2020-02-03_at_13.52.25.png)

- Objects and functions are special because **I can manipulate them from my code.**
- for example, I can connect them to other values... (more on this later)
- for now, I can say that if primitive values are like distant stars,
- then objects and function are more like rocks flying nearby my code.
- They're close enough that I can manipulate them.

*And that's the second kind of values.*

### Expressions

Questions in JavaScript are called *expressions*

    // If we “ask” the expression 2 + 2,
    // JavaScript will “answer” with the value 4.

    console.log(2 + 2); // 4

**Expressions are questions that JavaScript can answer. JavaScript answers expressions in the only way it knows how — with values.**

If the word "expression" confuses you, think of it as a piece of code that *expresses* a value.

this is the same as "results in" or "evaluates to"

We ask JavaScript 2 + 2, and it answers with 4. Expressions always result in a single value.

How do we know any particular value’s type?

### Checking a type

Values of the same type behave in similar ways.

If we want to check a value’s type, we can ask it with the typeof operator. JavaScript will answer our question with one of the predetermined string values, such as "number", "string", or "object".

    console.log(typeof(2)); // "number"
    console.log(typeof("hello")); // "string"
    console.log(typeof(undefined)); // "undefined"

Here `typeof(2)` is an expression - and it results in the "number" value.

Strictly saying, using parens isn’t required with typeof. For example, typeof 2 would work just as fine as typeof(2).

However, sometimes parens are required to avoid an ambiguity. One of the cases below would break if we omitted the parens after typeof. Try to guess which one it is:

    console.log(typeof({})); // "object"
    console.log(typeof([])); // "object"
    console.log(typeof(x => x * 2)); // "function"

the function fails without the ()

## Types of Values

As an aspiring astronomer, you might want to know about every type of value that can be observed in the JavaScript sky. After almost twenty five years of studying JavaScript, the scientists have only discovered nine such types:

### Primitive Values

- **Undefined** (`undefined`), used for unintentionally missing values.
- **Null** (`null`), used for intentionally missing values.
- **Booleans** (`true` and `false`), used for logical operations.
- **Numbers** (`-100`, `3.14`, and others), used for math calculations.
- **Strings** (`"hello"`, `"abracadabra"`, and others), used for text.
- **Symbols** (uncommon), used to hide implementation details.
- **BigInts** (uncommon and new), used for math on big numbers.

### Objects and Functions

- **Objects** (`{}` and others), used to group related data and code.
- **Functions** (`x => x * 2` and others), used to refer to code.

### No other types

In JavaScript, there are no other fundamental value types other than the ones we have just enumerated. **The rest are all objects! For example, even arrays, dates, and regular expressions fundamentally are objects in JavaScript:**

    console.log(typeof([])); // "object"
    console.log(typeof(new Date())); // "object"
    console.log(typeof(/(hello|goodbye)/)); // "object"

“I see,” you might reply, “this is because everything is an object!” Alas, this is a popular urban legend, but *it’s not true*.

Although code like "hi".toUpperCase() makes "hi" seem like an object, this is nothing but an illusion.

JavaScript creates a wrapper object when you do this, and then immediately discards it.

It’s fine if this mechanism doesn’t quite click yet. **For now, you only need to remember that primitive values, such as numbers and strings, are not objects.**

## Recap

1. **There are values, and then there’s everything else.** We can think of values as different things “floating” in our JavaScript universe. They don’t exist *inside* our code, but we can refer to them from our code.
2. **There are two categories of values: there are *Primitive Values*, and then there are *Objects and Functions*.** In total, there are nine separate types. Each type serves a specific purpose, but some are rarely used.
3. **Some values are lonely.** For example, `null` is the only value of the Null type, and `undefined` is the only value of the Undefined type. As we will learn later, these two lonely values are quite the troublemakers!
4. **We can ask questions with expressions.** JavaScript will answer to us with values. For example, the `2 + 2` expression is answered with `4`.
5. **We can inspect the type of something by wrapping it in a `typeof` expression.** For example, `typeof(4)` is the string value `"number"`.
```
