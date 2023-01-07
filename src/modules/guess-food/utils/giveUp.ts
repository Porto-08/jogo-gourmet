import inquirer from "inquirer";
import { Foods } from "../entities/Foods";
import { Food } from "../entities/Food";

export async function giveUp(foods: Foods, categoryName: string) {
  console.log("Desisto :( \n");

  const newFood = await inquirer.prompt({
    type: "input",
    name: "food",
    message: "Qual prato você pensou? \n",
  });

  foods.addFood(new Food(newFood.food, categoryName));

  console.log("Obrigado por me ensinar! \n");

  return;
}
