import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../../interface/recipe';
import { IngredientList } from 'src/app/interface/ingredientList';
import { NutritionIssue } from 'src/app/interface/nutritionIssue';
import { ShoppingList } from '../../../interface/shoppingList';
import { FavoriteRecipeService } from 'src/app/services/favorite-recipe.service';

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
  isFavorite: boolean;
  isFavoriteMessage: string;

  constructor(private route: ActivatedRoute, private favoriteRecipeService: FavoriteRecipeService, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.recipe = routeData.recipe;
      this.ingredientsList = routeData.recipe.ingredientList;
      this.nutritionIssues = routeData.recipe.nutritionIssues;
    });

    this.route.data.subscribe(routeData => {
      this.shoppingListsModel = routeData.shoppingLists;
    });
    this.route.queryParams
      .subscribe(params => {
        if(params.addedToFavorites !== undefined && params.addedToFavorites=== 'true') {
            this.isFavoriteMessage = 'Successfully added to favorite recipes!';
            this.isFavorite = true;
        }
      });
  }

  onAdd() {
    this.favoriteRecipeService.addToFavoriteRecipe(this.recipe.id+"").subscribe();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/recipes/${this.recipe.id}`], {queryParams: { addedToFavorites: 'true' } });
    });
  }
}
