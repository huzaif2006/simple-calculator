#! /usr/bin/env node

// Simple calculator by using inqirer and typscript.

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "Enter one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//Conditional Statement

if (answer.operator === "Addition") {
  console.log(answer.firstnumber + answer.secondnumber)
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstnumber - answer.secondnumber)
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber)
} else if (answer.operator === "Division") {
  console.log(answer.firstnumber / answer.secondnumber)
} else {
  console.log("Select the correct operator")
};

console.log(answer);