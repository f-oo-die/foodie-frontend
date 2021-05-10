import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/interface/ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.ingredientService.getIngredients().subscribe(ingredients => {
      this.ingredients = ingredients;
    });
  }

}
