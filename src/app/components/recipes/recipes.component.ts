import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

import {Recipe} from '../../interface/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private service: RecipeService,
    private activatedRoute: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(this.loadRecipes);
    console.log(this.activatedRoute.data);
    // this.service.getRecipes().subscribe(recipes => {
    //   this.recipes = recipes;
    // });

  }

  loadRecipes = (routeData: { recipes: Recipe[] }) => {
    this.recipes = routeData.recipes;
  }
}
