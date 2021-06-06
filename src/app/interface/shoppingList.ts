import {Ingredient} from './ingredient';

export interface ShoppingList {
  id?: number;
  ingredients: Ingredient[];
}
