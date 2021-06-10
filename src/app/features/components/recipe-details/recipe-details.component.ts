import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../interface/recipe';
import { IngredientList } from '../../../interface/ingredientList';
import { TypeOfMeal } from 'src/app/interface/enums/typeOfMeal';
import { NutritionIssue } from 'src/app/interface/nutritionIssue';
import { ShoppingList } from '../../../interface/shoppingList';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.isFavorite);
    console.log(this.isFavoriteMessage);
  }

  @Input()
  model: Recipe;

  typeOfMeal = TypeOfMeal;

  @Input()
  ingredientModel: IngredientList[];

  @Input()
  nutritionIssues: NutritionIssue[];

  @Input()
  shoppingListsModel: ShoppingList[];

  @Input()
  isFavoriteMessage: string;

  @Input()
  isFavorite: boolean;

  @Output()
  onAdd = new EventEmitter();

  public addToFavorite(): void {
    this.onAdd.emit();
  }

  onClick(){
    let x = document.querySelector("#directions");
    if (x){
        x.scrollIntoView();
    }
}
}
