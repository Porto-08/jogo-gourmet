import inquirer from "inquirer";

export const ask = (name: string, message: string, choices: string[]) => {
  return inquirer.prompt({
    type: "list",
    name,
    message,
    choices,
  });
};
