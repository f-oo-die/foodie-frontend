import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../interface/recipe';
import { IngredientList } from '../../../interface/ingredientList';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

  @Input()
  model: Recipe;

  @Input()
  ingredientModel: IngredientList[];
}
