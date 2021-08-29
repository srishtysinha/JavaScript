// Variable names are case-sensitive in JS

let x;    // defining a variable named 'name' using let keyword

//concatenation of 2 strings
console.log("name = "+ x);  // name = undefined

x = "tree";
console.log("name = "+ x);  // name = tree



/*
 JS is a Dynamic Language => since the datatype 
 of a defined variable can change at runtime

 */

let a= "string";
console.log(typeof(a));   // returns 'string'
 
a= 1;  //same variable 'a' which is of string type is now holding int value; which is valid in JS

console.log(typeof(a));   // returns 'number'



// In JS, all numbers : integer, decimal etc. are considered as "number"

let b = 2;
let c = 3.2;

console.log(typeof(b));  // returns 'number'
console.log(typeof(c));  // returns 'number'


 let p = true;
 let q = undefined;
 let r = null;

 console.log("p = " + typeof(p));  //  p = boolean
 console.log("q = " + typeof(q));  //  q = undefined
 console.log("r = " + typeof(r));  //  r = object