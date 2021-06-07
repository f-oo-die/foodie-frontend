import {NutritionIssue} from './nutritionIssue';

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  weight: number;
  height: number;
  nutritionIssues: NutritionIssue[];
}
