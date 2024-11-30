import inquirer, { Answers } from "inquirer";
const questions: any = [
  {
    name: "Name",
    type: "input",
    message: "Enter your Name:",
  },
  {
    name: "age",
    type: "number",
    message: "Enter your age:",
  },
  {
    name: "N1",
    type: "number",
    message: "Enter any number N1:",
  },
  {
    name: "N2",
    type: "number",
    message: "Enter any number N2:",
  },
  {
    name: "operations",
    type: "list",
    message: "Choose one of the following operations:",
    choices: ["*", "+", "-", "/"],
  },
];

const answer: Promise<Answers> = inquirer.prompt(questions);

answer
  .then((response: Answers) => {
    const { N1, N2, operations } = response; //destruction here

    switch (operations) {
      case "*":
        console.log(`Result: ${N1 * N2}`);
        break;
      case "+":
        console.log(`Result: ${N1 + N2}`);
        break;
      case "-":
        console.log(`Result: ${N1 - N2}`);
        break;
      case "/":
        if (N2 !== 0) {
          console.log(`Result: ${N1 / N2}`);
        } else {
          console.log("Error: Division by zero is not allowed.");
        }
        break;
      default:
        console.log("Invalid operation.");
        break;
    }
  })
  .catch((err) => {
    console.error("Error:", err);
  });
