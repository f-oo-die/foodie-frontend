import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../../interface/recipe';
import { IngredientList } from 'src/app/interface/ingredientList';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;
  ingredientsList: IngredientList[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.recipe = routeData.recipe;
      this.ingredientsList = routeData.recipe.ingredientList;
    });
  }
}
