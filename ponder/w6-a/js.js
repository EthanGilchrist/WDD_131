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