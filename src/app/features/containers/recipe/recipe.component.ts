import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../../interface/recipe';
import { IngredientList } from 'src/app/interface/ingredientList';
import { NutritionIssue } from 'src/app/interface/nutritionIssue';
import { ShoppingList } from '../../../interface/shoppingList';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;
  ingredientsList: IngredientList[] = [];
  nutritionIssues: NutritionIssue[] = [];
  shoppingListsModel: ShoppingList[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.recipe = routeData.recipe;
      this.ingredientsList = routeData.recipe.ingredientList;
      this.nutritionIssues = routeData.recipe.nutritionIssues;
    });

    this.route.data.subscribe(routeData => {
      this.shoppingListsModel = routeData.shoppingLists;
    });
  }

  onAdd() {
    console.log("clicked");
  }
}
