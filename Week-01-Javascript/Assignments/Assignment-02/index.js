const students = [
    {
        name: "Alice",
        grade: 90
    },
    {
        name: "Bob",
        grade: 80
    },
    {
        name: "Charlie",
        grade: 95
    },
    {
        name: "Dave",
        grade: 85
    },   
]

// problem #1
const newStudents = [
    {
        name: "Ali",
        grade: 90
    },
    {
        name: "Ayesha",
        grade: 95
    }
]
const allStudents = students.concat(newStudents);
console.log(`Problem#1: ${allStudents}`);

// problem #2
const iterator = students.entries();
for (let [index, student] of iterator) {
    // console.log(`Index: ${index}, Student: ${student}`);
    console.log(index, student);
};

// problem #3
const allPassing = students.every(student => student.grade >= 70);
if (allPassing){
    console.log(`All students passed.`);
}else {
    console.log('Some did not pass.');
}
 
// problem #4
const grade100 = students.map(student => ({ ...student })).fill({ name: "", grade: 100 });
console.log(grade100);

// problem #5
const above90 = students.filter( student => student.grade > 90);
console.log(above90);

// P6
const charlie = students.find(student => student.name === "Charlie");
console.log("Charlie's grade is", charlie.grade);

// P7
const index85 = students.findIndex(student => student.grade === 85);
console.log("Index of first student with grade above ", index85)

// P8
const nestedArr =[[1, 1], [2, 3, 3], [4, 5, 6]];
const flatArr = nestedArr.flat();
console.log("flattened array is: ", flatArr);

// P9
const studentabove70 = students.flatMap(student => ({
    name: student.name,
    grade: student.grade,
    passing: student.grade >= 70
}));
console.log("Students with passing marks: ", studentabove70);

// P10 
students.forEach(student => console.log(student.name));

// P11
const string = "Hello world, Ahmed";
const strArray = Array.froom(string);
console.loog(strArray);

// P12
const includesEve = students.map(student => student.name).includes("Eve");
if (includesEve){
    console.log('Eve is present');
} else {
    console.log('Eve is not present');
};

// P13
const bobIndex = students.map(student => student.name).indexOf("Bob");
console.log("INdex of first student with ",bobIndex);

// P14
const grades = students.map(student => student.grade);
console.log("Grades of student ",grades);

// P15
const newStudent = { name: "Tariq", grade: 70 };
students.push(newStudent);
// console.log(students);


// P16
const lastStudent = students.pop();
console.log(lastStudent);
// console.log(students);

// P17
const reversedStudents = students.reverse();
console.log("Reversed order", reversedStudents);

// P18
const firstStudent = students.shift();
console.log(firstStudent);
console.log(students);

// p19
const avgGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log("The average grade is: ", avgGrade);

