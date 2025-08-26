
// Part 1: Variable Declarations & Conditionals

let userName = "Isaiah";
const isLoggedIn = true;
var age = 22;

if (isLoggedIn && age >= 18) {
  console.log(userName + " is logged in and is an adult.");
} else {
  console.log("Access denied.");
}


// Part 2: Custom Functions

function greetUser(name) {
  return "Hello, " + name + "! Welcome!";
}

function calculateSquare(number) {
  return number * number;
}

console.log(greetUser(userName)); // Example function call
console.log("Square of 4: " + calculateSquare(4));


// Part 3: Loops


// For loop example
for (let i = 1; i <= 5; i++) {
  console.log("For Loop count: " + i);
}

// While loop example
let counter = 1;
while (counter <= 3) {
  console.log("While Loop count: " + counter);
  counter++;
}


// Part 4: DOM Interactions


// 1. Change text content when button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "You clicked the button! 🎉";
});

// 2. Change the title color dynamically
document.getElementById("title").style.color = "purple";

// 3. Add a new list item when button is clicked
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.getElementById("myList").children.length + 1);
  document.getElementById("myList").appendChild(newItem);
});
