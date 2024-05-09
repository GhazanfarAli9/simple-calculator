import inquirer from "inquirer";

let calculator =await inquirer.prompt([
  {
    name: "num1",
    type: "number",
    message: "Enter the number here ",
  },
  {
    name: "num2",
    type: "number",
    message: "Enter the second number",
  },
  {
    name: "Operations",
    type: "list",
    choices: ["Addition", "Subtraction", "Multiplication", "division"],
  },
]);

//conitional statement!
if (calculator.Operations === "Addition") {
  console.log(
    calculator.num1 + calculator.num2 
  );
} else if (calculator.Operations === "Subraction") {
  console.log(
    calculator.num1 - calculator.num2 
  );
} else if (calculator.Operations === "Multiplication") {
  console.log(
    calculator.num1 * calculator.num2 
  );
} else if (calculator.Operations === "division") {
  console.log(
    calculator.num1 / calculator.num2
  ); 
} 