// Question 1: Extract unique objects from array of objects
const testInputs =[
    {
        id:1,
        name:"abubakar",
        role:"engineering manager"
    },
    {
        id:2,
        name:"maham",
        role:"developer"
    },
    {
        id:3,
        name:"shawal",
        role:"developer"
    },
    {
        id:1,
        name:"abubakar",
        role:"engineering manager"
    },
];

// // incase need to compare more keys, instead of only id, just && between them, like (v.id === value.id && v.name === value.name)

// const filteredInputs = testInputs.filter((value, index, self) =>
//     index === self.findIndex((v)=> v.id ===value.id)
// );

// console.log(filteredInputs)

const uniqueObjects = (inputs) => {
    const filteredInputs = inputs.filter((current_value, current_index, self) =>
        // .findIndex(value) finds index of first instance of value
        // if current_index not equal too .findIndex, it means the current_value has already appeared before, therefore is duplicate
        current_index === self.findIndex((v) => v.id === current_value.id)
    );
    return filteredInputs;
};

console.log("Unique objects in array are:", uniqueObjects(testInputs));

// Question 2: find longest word in sentence
let testString = "This is OptimusFox js internship class"
const longestWord = (str) => {
    let words = str.split(" "); //split on whitespace
    let longest = "";

    words.forEach((word) => {
        if (word.length > longest.length){
            longest = word; 
        }
    });
    return longest;
}

console.log(`Longest word in test input ""${testString}"" is ${longestWord(testString)}`);