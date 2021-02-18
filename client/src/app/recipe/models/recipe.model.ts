export interface Recipe {
  name: string;
  source: string;
  ingredients: Ingredient[];
  preparation: string;
  preparationInstructions: string;
}

export interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  metrics: string;
}

export const INGREDIENTS = [
  { id: 1, name: 'Flour', metrics: 'gr' },
  { id: 2, name: 'Milk', metrics: 'ml' },
  { id: 3, name: 'Oil', metrics: 'tb' },
  { id: 4, name: 'Salt', metrics: 'tb' },
  { id: 5, name: 'Sugar', metrics: 'tb' },
  { id: 6, name: 'Eggs', metrics: '' },
  { id: 7, name: 'Tomatoes', metrics: '' },
  { id: 8, name: 'Cheese', metrics: 'gr' },
  { id: 9, name: 'Potatoes', metrics: '' },
  { id: 10, name: 'Meat', metrics: 'gr' },
];
