import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../interface/recipe';
import { IngredientList } from '../../../interface/ingredientList';
import { TypeOfMeal } from 'src/app/interface/enums/typeOfMeal';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

  @Input()
  model: Recipe;

  typeOfMeal = TypeOfMeal;

  @Input()
  ingredientModel: IngredientList[];
}
