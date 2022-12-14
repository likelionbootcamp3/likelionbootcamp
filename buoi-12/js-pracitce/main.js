// Spread opertor
// rest: ...
// spread: ...

const friends = ["A", "B", "C"];

const enemies = ["D", "E", "F"];

const all = ["Huy", ...friends, ...enemies];

console.log(all);

let name = { firstName: "John", lastName: "Doe" };
let hobbies = { hobby1: "singing", hobby2: "dancing" };

let info = {
  ...name,
  ...hobbies,
  age: 25,
};

console.log(info);

// Optional chaining; ?.

const adventurer = {
  name: "Alice",
  //   cat: {
  //     name: "Dinah",
  //   },
};

// console.log(adventurer.cat.name); // undefined

console.log(adventurer.cat?.name);
