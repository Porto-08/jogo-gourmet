import inquirer from "inquirer";
import { Foods } from "../entities/Foods";
import { Food } from "../entities/Food";

export async function addNewFoodAndCategory(foods: Foods) {
  const newCategory = await inquirer.prompt({
    type: "input",
    name: "category",
    message: "Qual a categoria do prato?",
  });

  const newFood = await inquirer.prompt({
    type: "input",
    name: "food",
    message: "Qual prato você pensou?",
  });

  foods.addFood(new Food(newFood.food, newCategory.category));

  console.log("Obrigado por me ensinar! ");
}
