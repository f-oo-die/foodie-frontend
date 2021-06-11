import { TypeOfMeal } from 'src/app/interface/enums/typeOfMeal';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/interface/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  constructor(public router: Router){}

  @Input()
  models: Recipe[];

  typeOfMeal = TypeOfMeal;
  
  @Output()
  onSearch = new EventEmitter();

  public searchRecipes(key: String): void {
    this.onSearch.emit(key);
  }
}
