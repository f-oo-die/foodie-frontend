import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeService.getRecipe(this.route.snapshot.paramMap.get('id')).subscribe(recipe => {
      this.recipe = recipe;
    });
  }
}
