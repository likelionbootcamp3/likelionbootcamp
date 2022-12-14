// Variables
const $person1232 = "Abc";

// Data types

// const x = "10";
// const y = 20;
// const z = 30;

// If/else statement
const today = "rainy";

// if (today == "rainy") {
//   console.log("Stay home");
// } else {
//   console.log("Go to cinema");
// }

// ==, ===
// == : so sanh gia tri thoi, khong quan tam toi data types
// ===: quan tam ca 2 luon

// Operator Precedence
// console.log((10 + 20) * 2);

// Template string (ES6)
const myName = "Huy";
const age = 25;

// My name is Huy and 25 years old
// console.log(`My name is ${myName} and ${age} years old`);

// backtick (``)
// ${variable}

const greeting = `Hello ${myName}`;

// Type conversion and coercion
const x = false;
let y = 20; // number

console.log(x + y);

// Truthy and Falsy
// true/ false

// const number = -0;
// const names = null;

// if (names) {
//   console.log("OK");
// } else {
//   console.log("KO");
// }

// Conditional Ternary
const myAge = 16;

// let result;
// if (myAge >= 18) {
//   result = "Can drink";
// } else {
//   result = "Cannot drink";
// }

// let result = myAge >= 18 ? "Can drink" : "Cannot drink";
// condition ? result1 : result2

// console.log(result);

const gpa = 5;

// let result;
// if (gpa >= 8) {
//   result = "Excellent";
// } else if (gpa >= 6.5) {
//   result = "Good";
// } else {
//   result = "Average";
// }

// let result = gpa >= 8 ? "Excellent" : gpa >= 6.5 ? "Good" : "Average";

// console.log(result);

// function

// declaration function
function sayHi() {
  console.log("Hi");
}

// expression function
// anonymous function
const sayHi2 = function () {
  console.log("Hi");
};

sayHi2();

// arrow function (ES6)
const sayHi3 = () => {
  console.log("hi");
};

function sumTwoNumber(num1, num2) {
  return num1 + num2;
}

// const sumTwoNumber2 = (num1, num2) => num1 + num2;

// const nums = [1, 2, 3, 4];

// const result = nums.map(num => num * 2);

// console.log(result);

// Array

