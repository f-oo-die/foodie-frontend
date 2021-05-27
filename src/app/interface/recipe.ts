import {IngredientList} from './ingredientList';
import {NutritionIssue} from './nutrition-issue';

export interface Recipe {
  id?: number;
  title: string;
  preparation: string;
  numOfCalories: number;
  typeOfMeal: number;
  ingredientList: IngredientList[];
  nutritionIssues: NutritionIssue[];
}
