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
    this.activatedRoute.data.subscribe(this.loadRecipes);
  }

  loadRecipes = (routeData: { recipes: Recipe[] }) => {
    this.recipes = routeData.recipes;
  }
}
