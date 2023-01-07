import { expect, describe, it } from "vitest";
import { Food } from "./Food";

describe("Food", () => {
  const params = {
    name: "apple",
    category: "fruit",
  };

  it("should have a name and a category", () => {
    const food = new Food(params.name, params.category);

    expect(food.name).toEqual("apple");
    expect(food.category).toEqual("fruit");
  });

  it("should return the name of the food", () => {
    const food = new Food(params.name, params.category);

    expect(food.getFoodName()).toEqual("apple");
  });

  it("should return the category of the food", () => {
    const food = new Food(params.name, params.category);

    expect(food.getFoodCategory()).toEqual("fruit");
  });

  it("should set the name of the food", () => {
    const food = new Food(params.name, params.category);

    food.setFoodName("banana");

    expect(food.name).toEqual("banana");
  });

  it("should set the category of the food", () => {
    const food = new Food(params.name, params.category);

    food.setFoodCategory("vegetable");

    expect(food.category).toEqual("vegetable");
  });
});
