import inquirer from "inquirer";
import { Food } from "../modules/guess-food/entities/Food";
import { Foods } from "../modules/guess-food/entities/Foods";
import { guessTheFood } from "../modules/guess-food/use-cases/guessTheFood.usecase";
import { sleep } from "./utils/sleep";

const foods = new Foods([
  new Food("Lasanha", "Massa"),
  new Food("Macarrão", "Massa"),
  new Food("Bolo", "Sobremesa"),
  new Food("Soverte", "Sobremesa"),
  new Food("Batata Frita", "Acompanhamento"),
  new Food("Frango Frito", "Acompanhamento"),
]);

async function startGame(): Promise<void> {
  console.log("Jogo Gourmet \n");
  console.log("Pense em um prato que gosta \n");

  await sleep(2000);
}

async function main(): Promise<void> {
  await startGame();

  while (true) {
    await guessTheFood(foods);

    const wantsToContinue = await inquirer.prompt({
      type: "list",
      name: "continue",
      message: "Deseja continuar?",
      choices: ["s", "n"],
    });

    if (wantsToContinue.continue === "n") {
      console.log("Obrigado por jogar!");

      process.exit(0);
    }
  }
}

main();
