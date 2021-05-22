import { Component, Input } from '@angular/core';
import { TypeOfMeal } from 'src/app/interface/enums/typeOfMeal';
import { Recipe } from 'src/app/interface/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {

  @Input()
  models: Recipe[];

  typeOfMeal = TypeOfMeal;
}
