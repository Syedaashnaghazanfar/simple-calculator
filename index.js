#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "kindly enter first number", type: "number", name: "firstNumber" },
    {
        message: "kindly enter second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "please select one of the following operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
//conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    ("please select valid operation");
}
