//Functions in JS


// Function is not ended with a ';'

function greet(fname, lname)   //parameters of 'greet' function
{

    console.log('Hello ' + fname + " " + lname + " !!");  //concatenation of 2 strings

}

greet('Srishty', 'Sinha');  //arguments of 'greet' function

greet ('srishty');  // Hello srishty undefined !! ; only 1 arg passed , value of a variable is 'undefined' by default





function square(number)
{

    return number*number;
}


console.log(square(11));