import { expect, describe, it } from "vitest";
import { Foods } from "./Foods";
import { Food } from "./Food";

describe("Foods", () => {
  it("should have a list of foods", () => {
    const foodsArray = new Foods([
      new Food("Rice", "Grain"),
      new Food("Cake", "Dessert"),
    ]);

    const getFoods = foodsArray.getFoods();

    getFoods.forEach((food, index) => {
      expect(food.name).toEqual(foodsArray.foods[index].name);
      expect(food.category).toEqual(foodsArray.foods[index].category);
    });
  });

  it("should set the list of foods", () => {
    const foodsArray = new Foods([
      new Food("Rice", "Grain"),
      new Food("Cake", "Dessert"),
    ]);

    foodsArray.setFoods([new Food("Apple", "Fruit")]);

    expect(foodsArray.foods.length).toEqual(1);
    expect(foodsArray.foods[0].name).toEqual("Apple");
    expect(foodsArray.foods[0].category).toEqual("Fruit");
  });

  it("should add a food to the list of foods", () => {
    const foodsArray = new Foods([
      new Food("Rice", "Grain"),
      new Food("Cake", "Dessert"),
    ]);

    foodsArray.addFood(new Food("Apple", "Fruit"));

    expect(foodsArray.foods.length).toEqual(3);
    expect(foodsArray.foods[0].name).toEqual("Apple");
    expect(foodsArray.foods[0].category).toEqual("Fruit");
  });

  it("should return a list of foods by category", () => {
    const foodsArray = new Foods([
      new Food("Rice", "Grain"),
      new Food("Cake", "Dessert"),
      new Food("Apple", "Fruit"),
    ]);

    const getFoodsByCategory = foodsArray.getFoodByCategory("Grain");

    getFoodsByCategory.forEach((food, index) => {
      expect(food.category).toEqual("Grain");
    });
  });
});
