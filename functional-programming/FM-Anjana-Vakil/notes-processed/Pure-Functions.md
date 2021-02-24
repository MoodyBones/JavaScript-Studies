Functional Programming is a progamming paradigm (Worldwiew/mindset) - & there are many others

## Declarative

- this I what I want
- do it however you want
- instead of giving a list of commands (imperative) we tell it what we want and let the computer do the computation for us
- SQL is a declarative query language
- the contrast to is imperative. Object-Oriented is imperative. keeps state. See Notes for more info

### Functional

- one simple idea **Pure Functions**

# Pure functions, what are they?

**[only input in. only output out. no side effects](https://github.com/MoodyBones/JavaScript-Studies/tree/master/functional-programming/FM-Anjana-Vakil#pure-functions-what-are-they).**

& given the same input it should always return the same out put, no matter how many times it's run

## **What is a side effect?**

- When a function has a relation to the outside world, other than through i's input arguments or return value.
- It might be reading things from the outside world to help make it's computation
- things that aren't direct inputs
- a message send out during the computation that is not the return value
- **If it is doing some kind of side effect, and that is what is not allowed in a pure function.**

Examples of side effects:

- reaching out to find the time,
- or what profile picture does this user have stored on their profile,
- log a value to the console,
- or turn on a light if you're working with LEDs,
- or it might update your profile picture on some website.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bee371da-1f90-45f1-ab31-23e991bf75b4/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bee371da-1f90-45f1-ab31-23e991bf75b4/Untitled.png)

## When doing day to day coding try to think more about what paradigm we're using and why?

## **Every paradigm has it's advantages and disadvantages**

- Just like everything in programming, in software development, it's always a matter of trade-offs.
- **Each of these paradigms has something that it can kind of teach us about how to think about the world of a program**,
- and how to conceive of the complex programs that we wanna write,
- how to break them down into smaller entities.

### **Anjana advice:**

> "I think that it is the best thing that we can do as programmers to learn lots of different paradigms, and to think of them as different tools in our mental toolbox, so that we can effortlessly switch between them when we need to."

# Extra Reference Material

- T[he Recurse Center](https://www.recurse.com/)
  - Anjana joined the Recurse Center when she first started learning to code and met Mary & her read her amazing article [Mary Rose Cook "An Introduction to functional programming"](https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming)
  - Mary points out while there are all these scary terminologies and mathematical notations, it all you need to worry about is a single idea.. **Pure Functions-**
- Some functional programming heroes to look up: Alonzo Church and Alan Turing
