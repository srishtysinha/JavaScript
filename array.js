//arrays in JS

let colours = ['red', 'blue'];

console.log(colours);

console.log(typeof(colours));  //object

console.log(colours[0]);  //red



// size of an array in JS is dynamic 
// Unlike in c++ array where array size is static, arrays in JS can be resized at runtime

colours[2]= 'pink';

console.log(colours[2]);  //pink


// type of an array in JS is dynamic 
// Unlike in other languages, an array in JS can hold different values like string, int, floats etc. at a time

colours[3]= 4;

console.log(colours[3]);  // 4


//Since an array is an object, we can access its values using dot notation

console.log(colours.length);  //4

