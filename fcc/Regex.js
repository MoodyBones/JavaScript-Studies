//  Regular Expressions

// Regular expressions are used in programming languages to match parts of strings.

// ////
//////
// Using the Test Method

// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

let testStr = 'freeCodeCamp'
let testRegex = /Code/
testRegex.test(testStr)
// Returns true

// exercise
let myString = 'Hello, World!'
let myRegex = /Hello/
let result = myRegex.test(myString)

// ////
// ////
// Match Literal Strings

// meaning it is case sensitive

let waldoIsHiding = 'Somewhere Waldo is hiding in this text.'
let waldoRegex = /Waldo/ // returns true
// let waldoRegex = /waldo/; //  returns false
// let waldoRegex = /WALDO/; //  returns false
let result = waldoRegex.test(waldoIsHiding)

// ////
// ////
// Match a Literal String with Different Possibilities

// use the or operator |
// to search for more than one at time

let petString = 'James has a pet cat.'
let petRegex = /dog|cat|bird|fish/
let result = petRegex.test(petString)
console.log(result)

// ////
// ////
// Ignore Case While Matching

// use i flag
// to ignore case

let fccString = 'freeCodeCamp'
let fccRegex = /freecodecamp/i
let result = fccRegex.test(myString)

// ////
// ////
// Extract Matches

// So far, you have only been checking if a pattern exists or not within a string.
// You can also extract the actual matches you found with the .match() method.

// pass the regex into the .match() method

let extractStr = "Extract the word 'coding' from this string."
let codingRegex = /coding/
let result = extractStr.match(codingRegex)

// ////
// ////
// Find More Than the First Match

// use g flag

let twinkleStar = 'Twinkle, twinkle, little star'
let starRegex = /twinkle/gi
let result = twinkleStar.match(starRegex)

// ////
// ////
// Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!"
let unRegex = /.un/ // Change this line
let result = unRegex.test(exampleStr)

// ////
// ////
// Match Single Character with Multiple Possibilities

// You can search for a literal pattern with some flexibility with character classes.
// Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
let bigStr = 'big'
let bagStr = 'bag'
let bugStr = 'bug'
let bogStr = 'bog'
let bgRegex = /b[aiu]g/
bigStr.match(bgRegex) // Returns ["big"]
bagStr.match(bgRegex) // Returns ["bag"]
bugStr.match(bgRegex) // Returns ["bug"]
bogStr.match(bgRegex) // Returns null

// exercise

let quoteSample =
  'Beware of bugs in the above code; I have only proved it correct, not tried it.'
let vowelRegex = /[aeiou]/gi
let result = quoteSample.match(vowelRegex)

// ////
// ////
// Match Letters of the Alphabet

// use - the hyphen character to select a range of letters

let quoteSample = 'The quick brown fox jumps over the lazy dog.'
let alphabetRegex = /[a-z]/gi
let result = quoteSample.match(alphabetRegex)

// ////
// ////
// Match Numbers and Letters of the Alphabet

// use - also for a range of numbers

let quoteSample = 'Blueberry 3.141592653s are delicious.'
let myRegex = /[h-s2-6]/gi
let result = quoteSample.match(myRegex)

// ////
// ////
// Match Single Characters Not Specified

// These types of character sets are called negated character sets.

// To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

let quoteSample = '3 blind mice.'
let myRegex = /[^3aeiou]/gi
let result = quoteSample.match(myRegex)

// ////
// ////
// Match Characters that Occur One or More Times

// You can use the + character to check if that is the case.

// Remember, the character or pattern has to be present consecutively.
// That is, the character has to repeat one after the other.

let difficultSpelling = 'Mississippi'
let myRegex = /s+/g
let result = difficultSpelling.match(myRegex)

// ////
// ////
// Match Characters that Occur Zero or More Times

// use *

let chewieRegex = /Aa*/

let result = chewieQuote.match(chewieRegex)

// ////
// ////
// Find Characters with Lazy Matching

// In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match.
// The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

// Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

// use ? to make it lazy match

let text = '<h1>Winter is coming</h1>'
let myRegex = /<.*?>/g // Change this line
let result = text.match(myRegex)

// ////
// ////
// Find One or More Criminals in a Hunt

// Exercise
// A group of criminals escaped from jail and ran away, but you don't know how many.
// However, you do know that they stay close together when they are around other people.
// You are responsible for finding all of the criminals at once.

let reCriminals = /C+/g
