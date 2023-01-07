export class Food {
  name: string;
  category: string;

  constructor(name: string, category: string) {
    this.name = name;
    this.category = category;
  }

  getFoodName() {
    return this.name;
  }

  getFoodCategory() {
    return this.category;
  }

  setFoodName(name: string) {
    this.name = name;
  }

  setFoodCategory(category: string) {
    this.category = category;
  }
}
