// defining 'person' object in JS
// An object in JS is a collection of key:value pairs, seperated with comma

let person = {

    name : 'Srishty',
    age  :  22

};

console.log(person);
console.log(typeof(person));  // object
console.log(typeof(person.name)); //string
console.log(typeof(person.age));  //number


let obj = person + 's';  // object + string = string value

console.log(obj);  // [object Object]s
console.log(typeof(obj));  //string 

