# Learn modern JavaScript

## A methodical walk-through of modern JavaScript features 👩‍💻
- This course features freeCodeCamp's ES6 curriculum recorded as Scrimba screencasts. 
- It contains 26 lectures, each of which explains a concept of ES6. 
- The lectures are recorded by [Beau Carnes](https://twitter.com/carnesbeau?lang=en). 
- Beau is the man behind freeCodeCamp.
- [Full Course Here](https://scrimba.com/g/ges6)

es6 2015

was not fully widely accepted until 2017

## Variables

since es6 in 2015 we can now use let and const as well

### let

- doesn't allow you to declare/name a variable twice
- you dont want to declare a variable two times in the same scope

what is 'use strict'

strict mode

it catches common coding mistakes and unsafe actions

when/where would be use this?

Var

- when you declare with var
- it is declared GLOBALLY
- or locally if within a function
```

    function checkScope() {
    "use strict";
      var i = "function scope";
      if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);
      }
      console.log("Function scope i is: ", i);
      return i;
    }
    
    checkScope();
    
    ----
    Block scope i is: ,"block scope"
    Function scope i is: ,"block scope"
```


Let 

- is limited to the block statement or expression,
- that it was declared in
```
    function checkScope() {
    "use strict";
      let i = "function scope";
      if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
      }
      console.log("Function scope i is: ", i);
      return i;
    }
    
    checkScope();
    
    -----
    Block scope i is: ,"block scope"
    Function scope i is: ,"function scope"
```

**A block is anything inside {}**

People now use let instead of var, to make sure that the variable is only defined in the place they want it

### Const

- it has all the features of let
- but it's also read only
- you can not reassign a const
- some people write the name in CAPS

- you can mutate the array declared with const
```
     const s = [5, 7, 2];
    function editInPlace() {
      "use strict";
    
      //s = [2, 5, 7];
      s[0] = 2;
      s[1] = 5;
      s[2] = 7;
    
    }
    editInPlace();
    
    console.log(s)
    
    ----
    [2,5,7]
```

**A const declaration alone, doesn't protect your data from MUTATION**

use 

### object.freeze

- when you an object and you don't want any of the items in the object to change
```
    function freezeObj() {
      "use strict";
      const MATH_CONSTANTS = {
        PI: 3.14
      };
      
      Object.freeze(MATH_CONSTANTS);
    
      try {
        MATH_CONSTANTS.PI = 99;
      } catch( ex ) {
        console.log(ex);
      }
      return MATH_CONSTANTS.PI;
    }
    
    const PI = freezeObj();
    
    console.log(PI); 
    
    ----
    >TypeError: Cannot assign to read only property 'PI' of object '#<Object>' (/index.js:13)
    >3.14
```

## Use Arrow functions to Write Concise Anonymous Functions
```
    // Anonymous Functon before
    var magic = function() {
    	return new Date()
    }
    
    // Anonymous function ESG - with fat arrow
    
    const magic = () => {
    	return new Date
    }
    
    //and shorter
    const magic = () => new Date
```

### Arrow functions with Params
```
    // before
    var myConcat = function(arr1, arr2) {
    	return arr1.concat(arr2)
    }
    
    console.log(myConcat([1, 2], [3,4,5]))
    
    
    
    // after
    const myConcat = (arr1, arr2) => arr1.concat(arr2)
    
    console.log(myConcat([1, 2], [3,4,5]))
```    

