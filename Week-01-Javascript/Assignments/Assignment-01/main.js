// question 1
const multiply = (a, b) => {
    return a * b;
};
console.log(`Question 1: ${multiply(10, 4)}`);

// question 2
const greeting = (name) => {
    return `Hello ${name}`;
};
console.log(`Question 2: ${greeting('Ahmed')}`);

// question 3 // reduce ((sum, current_value) => sum + current_value, starting_Value), where sum is given starting_value
const sumArray = (numbers) => {
    return numbers.reduce((sum, current) => sum + current,0);
};
console.log(`Question 3: ${sumArray([1, 2, 3, 4, 5])}`);

// question 4
const calculateBMI = (height, weight) => {
    return weight / (height * height);
};
console.log(`Question 4: ${calculateBMI(70, 1.53)}`);

// question 5
const getStrLen = (str) => str.length;
console.log(`Question 5: ${getStrLen('Muhammad Ahmed Hussain Wyne')}`);

// question 6
const reverseStr = (str) => {
    return str.split('').reverse().join('');
}
console.log(`Question 6: ${reverseStr("Ahmed")}`);

// question 7
const greetPerson = (person) => {
    return `Hello, ${person.firstName} ${person.lastName}`;
}
console.log(`Question 7: ${greetPerson({firstName: "Ahmed", lastName: "Wyne"})}`);

// question 8
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(`Question 8: ${capitalize('ahmed')}`);

// question 9
const capitalizeArr = (strings) => strings.map(str => str.charAt(0).toUpperCase()+ str.slice(1));
console.log(`Question 9: ${capitalizeArr(['apple', 'orange', 'mango'])}`);

// question 10
const isPalindrome = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(`Question 10: ${isPalindrome('hannah')}`);