import { Recipe } from "./recipe";
import { User } from "./user";

export interface Comment {
  id?: number;
  comment: String;
  datetime: Date;
  user: User;
  recipe: Recipe;
}
