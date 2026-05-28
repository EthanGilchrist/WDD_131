// 1. 
const names = ['Ethan', 'Anna', 'Zach', 'Amanda', 'Ben', 'Jackson'];
console.log(names);
console.log(names[1]);
console.log(names[3]);
names[4] = 'David';
console.log(names[4]);
let ages = [8, 6, 2];

let mixArray = ["Olive", 8, "Charles", 6, "Eliza"]
console.log(mixArray);

// 2. Javascript objects
let studentName = "Bob";
let studentClass = "WDD131";

// literal objects
let student = {
    // key/value pairs
    name: "Bob",
    class: "WDD131",
    grade: "A",
    age: 27
}

console.log(student);
console.log(student.class);

// 3. Array methods
names.forEach(() => {
    // this code executes once per each item in the array
    console.log("hey");

})

// Map function returns a NEW array with values returned from function
let newNameArray = names.map((name) => {
    return name + " Gilchrist"
})

console.log(newNameArray);

// Filter function returns a new array with filtered values
let filteredArray = names.filter((name) => {
    // filter returns boolean. True keep, false don't keep.
    return name.includes('e');
})

let num = 0;
for (let i = 0; i < 'cheese'.length; i++)
{
    num *= 256;
    num += 'cheese'.charCodeAt(i);
}
console.log(num); 

console.log('array.reduce: ' + [42, 1337, 16, 28, 7, 5, 3, 187].reduce((total, item) => total + item));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const index = fruits.indexOf("Apple");
console.log('Index of Apple: ' + index);


const movie = {type:"Fiat", model:"500", color:"white", title:"Cars 2", genre:"Too many", stars:"Star Star Star Star"};
const movieSummary = `
  <div class="movie-summary">
    <h2>${movie.title}</h2>
    <p>${movie.genre} - ${movie.stars}</p>
  </div>
`;

document.body.innerHTML += movieSummary;




function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

function convertAcc(total, grade) {
    if (typeof total == 'string')
    {
        total = convert(total);
    }
    return total + convert(grade);
}


letterGrades = ['A', 'A', 'C', 'A', 'A', 'A', 'A', 'C', 'B'];
numberGrades = letterGrades.map((grade) => {return convert(grade)})
console.log('Grade total: ' + ['A', 'A', 'C', 'A', 'A', 'A', 'A', 'C', 'B'].reduce(convertAcc));

// let newNameArray = names.map((name) => {
//     return name + " Gilchrist"
// })


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];


const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}];

students.forEach((student) =>
    console.log(student.first + ' ' + student.last)
);