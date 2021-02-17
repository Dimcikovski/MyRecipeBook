export interface Recipe {
  name: string;
  source: string;
  ingredients: Ingredient[];
  preparation: string;
  preparationInstructions: string;
}

export interface Ingredient {
  name: string;
  quantity: number;
}

export enum Ingredients {
  Flour = 'Flour',
  Milk = 'Milk',
  Oil = 'Oil',
  Salt = 'Salt',
  Sugar = 'Sugar',
  Eggs = 'Eggs',
  Tomatoes = 'Tomatoes',
  Peppers = 'Peppers',
  Cheese = 'Cheese',
  Potatoes = 'Potatoes',
  Meat = 'Meat',
}
