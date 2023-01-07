import inquirer from "inquirer";
import { Foods } from "../entities/Foods";
import { addNewFoodAndCategory } from "../utils/addNewFoodAndCategory";
import { ask } from "../utils/ask";
import { Food } from "../entities/Food";
import { sleep } from "../../../shared/utils/sleep";
import { giveUp } from "../utils/giveUp";

export async function guessTheFood(foods: Foods) {
  const categories = foods.getFoods().map(food => food.getFoodCategory());
  categories.push("Outro");

  const anwserCategoryName = await ask(
    "category",
    "Qual a categoria do prato que você pensou? \n",
    [...new Set(categories)]
  );

  if (anwserCategoryName.category === "Outro") {
    await addNewFoodAndCategory(foods);

    return;
  }

  const getFoods = foods.getFoodByCategory(anwserCategoryName.category);

  const firstTry = await ask(
    "food",
    `O prato que você pensou é ${getFoods[0].getFoodName()}? \n`,
    ["s", "n"]
  );

  await sleep(2000);

  if (firstTry.food === "s") {
    console.log("Acertei! \n");

    return;
  }

  if (getFoods.length === 1) {
    await giveUp(foods, anwserCategoryName.category);

    return;
  }

  console.log("Não acertei, mas vou tentar de novo! \n");

  const secondTry = await ask(
    "food",
    `O prato que você pensou é ${getFoods[1].getFoodName()}? \n`,
    ["s", "n"]
  );

  await sleep(2000);

  if (secondTry.food === "s") {
    console.log("Acertei! \n");

    return;
  }

  await giveUp(foods, anwserCategoryName.category);

  return;
}
