


let firstName = 'Ahmed';
// console.log("First Name:",firstName);

let lastName = 'Wyne';
// console.log("Last Name:",lastName);

// primitives/value types
let age = 10;
let isTrue = true;
let colorType = null;

//reference types (objects, array, function)

//{} is object literal
//object= {key:value}, can have multiple key-value pairs for each obj
let person = {
    firstName: 'Ahmed',
    age: 10
};
console.log(person);

//Dot Notation
person.firstName = 'Wyne';
//Bracket Notation
person[firstName] = 'Wyne';
console.log("Person name:", person.firstName )


// Array, [] is array literal
let selectedColors = ['red', 'blue'];
console.log(selectedColors);

//function is last type of Reference type
//function declared, with parameter "name"
// performing a task function
function greet(name) {
    console.log("Hello there, " + name);
}

//function called. passing argument to it
greet(person.firstName);


// calculating function 
function square (number) {
    return number * number;
}

let number = square(2);

console.log("Square of 2 is " + number) 