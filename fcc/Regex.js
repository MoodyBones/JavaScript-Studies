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
let unRegex = /.un/
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

// use [^]

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
let myRegex = /<.*?>/g
let result = text.match(myRegex)

// ////
// ////
// Find One or More Criminals in a Hunt

// Exercise
// A group of criminals escaped from jail and ran away, but you don't know how many.
// However, you do know that they stay close together when they are around other people.
// You are responsible for finding all of the criminals at once.

let reCriminals = /C+/g

// ////
// ////
// Match Beginning String Patterns

// Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.

// use ^
// at the beginning

// In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched].
// Outside of a character set, the caret is used to search for patterns at the beginning of strings.

let firstString = 'Ricky is first and can be found.'
let firstRegex = /^Ricky/
firstRegex.test(firstString)
// Returns true
let notFirst = "You can't find Ricky now."
firstRegex.test(notFirst)
// Returns false

// /////
// /////
// Match Ending String Patterns

// use $
// at the end

let theEnding = 'This is a never ending story'
let storyRegex = /story$/
storyRegex.test(theEnding)
// Returns true
let noEnding = 'Sometimes a story will have to end'
storyRegex.test(noEnding)
// Returns false

// ////
// ////
// Match All Letters and Numbers

// use \w

// The closest character class in JavaScript to match the alphabet is \w.
// This shortcut is equal to [A-Za-z0-9_].
// This character class matches upper and lowercase letters plus numbers.

// Note, this character class also includes the underscore character (_).

let longHand = /[A-Za-z0-9_]+/
let shortHand = /\w+/
let numbers = '42'
let varNames = 'important_var'
longHand.test(numbers) // Returns true
shortHand.test(numbers) // Returns true
longHand.test(varNames) // Returns true
shortHand.test(varNames) // Returns true

// exercise

let quoteSample = 'The five boxing wizards jump quickly.'
let alphabetRegexV2 = /\w/g
let result = quoteSample.match(alphabetRegexV2).length

// ////
// ////
// Match Everything But Letters and Numbers

// use \W

// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter.
// This shortcut is the same as [^A-Za-z0-9_].

let shortHand = /\W/
let numbers = '42%'
let sentence = 'Coding!'
numbers.match(shortHand) // Returns ["%"]
sentence.match(shortHand) // Returns ["!"]

// ////
// ////
// Match All Numbers

// use \d

// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

let movieName = '2001: A Space Odyssey'
let numRegex = /\d/g // Change this line
let result = movieName.match(numRegex).length

// ////
// ////
// Match All Non-Numbers

// use \D

// which the same as [^0-9]

let movieName = '2001: A Space Odyssey'
let noNumRegex = /\D/g // Change this line
let result = movieName.match(noNumRegex).length

// ////
// ////
// Restrict Possible Usernames

// Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

// 1) Usernames can only use alpha-numeric characters.

// 2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

// 3) Username letters can be lowercase and uppercase.

// 4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// Change the regex userCheck to fit the constraints listed above.

let username = 'JackOfAllTrades'
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d$/i // Change this line
let result = userCheck.test(username)
console.log(result)

// ////
// ////
// Match Whitespace

// use \s

// This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.
// You can think of it as similar to the character class [ \r\t\f\n\v].

let whiteSpace = 'Whitespace. Whitespace everywhere!'
let spaceRegex = /\s/g
whiteSpace.match(spaceRegex)
// Returns [" ", " "]

// ////
// ////
// Match Non-Whitespace Characters

// use \S

let whiteSpace = 'Whitespace. Whitespace everywhere!'
let nonSpaceRegex = /\S/g
whiteSpace.match(nonSpaceRegex).length // Returns 32

// ////
// ////
// Specify Upper and Lower Number of Matches

// use {3,5}
// quantity specifiers

// For example, to match only the letter a appearing between 3 and 5 times in the string
let A4 = 'aaaah'
let A2 = 'aah'
let multipleA = /a{3,5}h/
multipleA.test(A4) // Returns true
multipleA.test(A2) // Returns false

// exercise
// Change the regex ohRegex to match the entire phrase "Oh no" only when it has 3 to 6 letter h's.

let ohStr = 'Ohhh no'
let ohRegex = /Oh{3,6}\sno/ // Change this line
let result = ohRegex.test(ohStr)

// ////
// ////
// Specify Only the Lower Number of Matches

// use {3,}
// keep the first number followed by a coma

let A4 = 'haaaah'
let A2 = 'haah'
let A100 = 'h' + 'a'.repeat(100) + 'h'
let multipleA = /ha{3,}h/
multipleA.test(A4) // Returns true
multipleA.test(A2) // Returns false
multipleA.test(A100) // Returns true

// ////
// ////
// Specify Exact Number of Matches

// use {3}

// Change the regex timRegex to match the word "Timber" only when it has four letter m's.
let timStr = 'Timmmmber'
let timRegex = /Tim{4}ber/ // Change this line
let result = timRegex.test(timStr)

// ////
// ////
// Check for All or None

// use ?

let american = 'color'
let british = 'colour'
let rainbowRegex = /colou?r/
rainbowRegex.test(american) // Returns true
rainbowRegex.test(british) // Returns true

// ////
// ////
// Positive and Negative Lookahead

// Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

// There are two kinds of lookaheads: positive lookahead and negative lookahead.

// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

//  A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

let quit = 'qu'
let noquit = 'qt'
let quRegex = /q(?=u)/
let qRegex = /q(?!u)/
quit.match(quRegex) // Returns ["q"]
noquit.match(qRegex) // Returns ["q"]

// A more practical use of lookaheads is to check two or more patterns in one string.
// Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

let password = 'abc123'
let checkPass = /(?=\w{3,6})(?=\D*\d)/
checkPass.test(password) // Returns true

// exercise
// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.

let sampleWord = 'astronaut'
let pwRegex = /^\D(?=\w{5,})(?=\w+\d{2})/ // Change this line
let result = pwRegex.test(sampleWord)

// ////
// ////
// Check For Mixed Grouping of Characters

// use ()

// if wanna test for penguin or pumpkin
let testStr = 'Pumpkin'
let testRegex = /P(engu|umpk)in/
testRegex.test(testStr)
// Returns true

// should match Eleanor or Franklin and made concessions for the middle name
let myString = 'Eleanor Roosevelt'
let myRegex = /(Eleanor|Franklin).*Roosevelt/ // Change this line
let result = myRegex.test(myString)

// ////
// ////
// Reuse Patterns Using Capture Groups

// To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.

// The example below matches any word that occurs twice separated by a space:

let repeatStr = 'regex regex'
let repeatRegex = /(\w+)\s\1/
repeatRegex.test(repeatStr) // Returns true
repeatStr.match(repeatRegex) // Returns ["regex regex",

// Using the .match() method on a string will return an array with the string it matches, along with its capture group.

// exercise
// Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.

let repeatNum = '42 42 42'
let reRegex = /^(\d+)\s\1\s\1$/ // Change this line
let result = reRegex.test(repeatNum)
console.log(repeatNum.match(reRegex))

// ////
// ////
// Use Capture Groups to Search and Replace

// Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

// You can search and replace text in a string using .replace() on a string.
// The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

let wrongText = 'The sky is silver.'
let silverRegex = /silver/
wrongText.replace(silverRegex, 'blue')
// Returns "The sky is blue."

// You can also access capture groups in the replacement string with dollar signs ($).

'Code Camp'.replace(/(\w+)\s(\w+)/, '$2 $1')
// Returns "Camp Code"

// exercise
// use 3 capture groups
// that will search for each word in "one two three"
// replace with "three two one"

let str = 'one two three'
let fixRegex = /(\w+)\s(\w+)\s(\w+)/ // Change this line
let replaceText = '$3 $2 $1' // Change this line
let result = str.replace(fixRegex, replaceText)

console.log(result)

// ////
// ////
// Remove Whitespace from Start and End

// Typical processing of strings is to remove the whitespace at the start and end of it.

// exercise
// remove white space from beginning and end

let hello = '   Hello, World!  '
let wsRegex = /^\s+|\s+$/g // Change this line
let result = hello.replace(wsRegex, '') // Change this line
