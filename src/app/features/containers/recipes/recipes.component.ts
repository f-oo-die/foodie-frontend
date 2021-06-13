import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/interface/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private activatedRoute: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  public getRecipes(): void {
    this.activatedRoute.data.subscribe((routeData: { recipes: Recipe[] }) => {
      this.recipes = routeData.recipes;
    });
  }

  public searchRecipes(key: String): void {
    const result: Recipe[] = [];
    for (const recipe of this.recipes){
      if (recipe.title.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        result.push(recipe);
      }
    }
    this.recipes = result;
    if (result.length === 0 || !key) this.getRecipes();
  }
}
