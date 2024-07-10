console.log("Hello world!");

const name = 'Wyne';
const age = 23;
const rating = 4.5;
const isCool = true;
// const x = null; // data type will be Object, this is bogus, its actually just null
const y = undefined; // data type will be undefined



//Concatenation
// console.log('My name is ' + name + " and I am of age " + age);
//Template String, better way to concat
const hello = `My name is ${name} and I am of age ${age}`;
console.log(hello);

//substring0
const s = 'HelloWorld';
console.log(s.substring(0, 5)); //.substring(start_index, subLength), returned string is of length = subLength - 1

//splitting string
const list_words = 'tech, computers, it, code';
console.log(list_words.split(', '));

//ARRAYS- variables that hold multiple values
const fruits = ['apples', 'oranges', 'peers'];
console.log(fruits[1]); //prints 'oranges'
fruits[3] = 'grapes';
//fruits is array, we can manipulate const arrays but we cannot reassign array
//its not recommended to use index, since we might not know size of array, better to use .push
//adds element to end of array
fruits.push('mangoes');
//adds element to start of array
fruits.unshift('strawberry');
//pops/removes the last element
fruits.pop();
//find out if something is of type array
//Array.isArray(variable_name) returns true if <variable_name> is array
//return index of element
console.log(fruits.indexOf('oranges'));//returns '-1' if element is not found in array


//OBJECTS - key-value pair literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }// nested object, object address within object person
}
 
//destructuring - pulling the values out of a object, using keys in {keys} = object
const {firstName, lastName} = person;
const {address:{city}} = person; // pull out nested objects, so use {nested_key:{key}} = object
//creates new property (key-value pair)
person.email = 'john@gmail.com';
//can create array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos[1].text);
// need to convert data to json string to communicate b/w serevers
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//LOOPS
//FOR loop
// for(let i = 0; i < 10; i++){
//     console.log(`For loop number: ${i}`);
// }
// //WHILE loop
// let i = 0;
// while (i < 10){
//     console.log(`While loop number: ${i}`);
//     i++; //i = i + 1;
// }
//Loop through array // for (let x of array_var) {body};
for(let todo of todos) {
    console.log(todo.text);
}
//other methods are called high-order array method, forEach, map, filter
//forEach
todos.forEach(function(todo) {
    console.log(todo.text);
});
//map, returns values
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);
//filter
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// });
// console.log(todoCompleted);
//Can also chain array methods
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
});
console.log(todoCompleted); // first filters todos array, based on which isCompleted is true, then extracts text property of each object that was returned

// double = (==) only matches value itself, not the data type
// triple = (===) matches both value and data type
const x = 20;
if(x == 10){ 
    console.log('x is 10');
} else if (x > 10){
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
};
const z = 10;
const color = z > 10 ? 'red' : 'blue';
// console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is neither red nor blue');
        break;
}

//Functions
// function addNums(num1, num2) {
//     return (num1 + num2);
// }
// // addNums(); //returns NaN, as no argument was passed to parameters
// console.log(addNums(5, 5));
//arrow function
const addNums = (num1, num2) => {
    return num1 + num2;
}
todos.forEach((todo) => console.log(todo));

// //Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     //Date object instantiated
//     this.dob = new Date(dob);
//     //methods, functions attached to Person obect
//     // this.getBirthYear = (() => {return this.dob.getFullYear});
//     // this.getFullName = (() => {return `${this.firstName} ${this.lastName}`});
// }
// // each Object has a prototype, to which we can attach methods instead, to clean up object Consctructor itself, because not every object might need each of methods
// Person.prototype.getBirthYear = (() => {return this.dob.getFullYear});
// Person.prototype.getFullName = (() => {return `${this.firstName} ${this.lastName}`});
// //Instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// console.log(person1.getBirthYear());

//Classes
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        //Date object instantiated
        this.dob = new Date(dob);
    }
    getBirthYear = () => {return this.dob.getFullYear()};
    getFullName = () => {return `${this.firstName} ${this.lastName}`};
}
const person1 = new Person('John', 'Doe', '4-3-1980');
console.log(person1.getBirthYear());



