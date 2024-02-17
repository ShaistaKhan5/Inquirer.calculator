import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        type: "number",
        name: "No1",
        message: "write your No1:"
    },
    {
        type: "number",
        name: "No2",
        message: "write your No2:"
    }, {
        type: "list",
        name: "operater",
        message: "select your operater",
        choices: ["+", "-", "*", "/"]
    }
]);
const { No1, No2, operator } = answers;
if (No1 && No2 && operator) {
    let result = 0;
    if (operator === "+") {
        result = No1 + No2;
    }
    else if (operator === "+") {
        result = No1 + No2;
    }
    else if (operator === "-") {
        result = No1 - No2;
    }
    else if (operator === "*") {
        result = No1 * No2;
    }
    else if (operator === "/") {
        result = No1 / No2;
    }
    console.log("your result is: " + result);
}
else {
    console.log("please select a valid operator");
}
