import {Ingredient} from './ingredient';
import {User} from './user';

export interface ShoppingList {
  id?: number;
  user: User;
  ingredients: Ingredient[];
}
