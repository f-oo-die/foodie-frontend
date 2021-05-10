import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Recipe } from '../../interface/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.recipe = routeData.recipe;
    });
  }
}
