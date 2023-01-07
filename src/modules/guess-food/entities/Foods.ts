import { Food } from "./Food";

export class Foods {
  foods: Food[];

  constructor(foods: Food[]) {
    this.foods = foods;
  }

  getFoods() {
    return this.foods;
  }

  setFoods(foods: Food[]) {
    this.foods = foods;
  }

  addFood(food: Food) {
    this.foods.unshift(food);
  }

  getFoodByCategory(category: string) {
    return this.foods.filter(food => food.getFoodCategory() === category);
  }
}
