//LEVEL 1: JS BASICS (React Foundation)
//Exercise 1: Variables & Conditions

/*const age = 25;

1. Print "Adult" if age >= 18 else "Minor"
if (age >= 18) {
  console.log ("Adult");
} else {
  console.log ("Minor");
}
// 2. Use ternary operator
const person = age >= 18 ? "Adult" : "Minor";
console.log(person);
// 3. Rewrite using logical && instead of if
const person2 = age >=18 && "adult";
console.log(person2);
*/

//Exercise 2: Functions & Arrow Functions
// 1. Write a function that takes a name and returns greeting
function greeting(name) {
    return `greeting ${name}`;
}
console.log(greeting("Bob"));
// 2. Convert it to arrow function
const greeting2 = (name) => { return `greeting ${name}` }
console.log(greeting2("Bob2"));
// 3. Make it one-line implicit return
const greeting3 = (name) => `greeting ${name}`
console.log(greeting2("Bob3"));

//Exercise 3: Default Parameters

function createUser(name, role = "user") {
    return "the user " + name + "is " + role;
}
console.log(createUser("John", "Admin"));


//LEVEL 2: OBJECTS & ARRAYS (MOST IMPORTANT)
//Exercise 4: Object Manipulation
const user = {
    id: 1,
    name: "Alex",
    address: {
        city: "Dallas",
        zip: "75001"
    }
};

// 1. Destructure name & city
//const {name, address :{city:userC, zip} }= user;
//console.log (name);
//console.log (userC);
//console.log (zip);
// 2. Rename city to userCity
// 3. Clone user and change city without mutation
const user1 = {
    ...user,
    address: { ...user.address, city: "Austin" }
};

const { name: name1, address: { city: city1, zip } } = user1;
console.log(name1);
console.log(city1);
