import {IngredientList} from './ingredientList';
import {NutritionIssue} from './nutritionIssue';

export interface Recipe {
  id?: number;
  title: string;
  preparation: string;
  numOfCalories: number;
  typeOfMeal: number;
  ingredientList: IngredientList[];
  nutritionIssues: NutritionIssue[];
}
