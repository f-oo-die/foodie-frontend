import { TypeOfMeal } from 'src/app/interface/enums/typeOfMeal';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/interface/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  ngOnInit(): void {}

  @Input()
  models: Recipe[];

  typeOfMeal = TypeOfMeal;
  
  @Output()
  onSearch = new EventEmitter();

  public searchRecipes(key: String): void {
    this.onSearch.emit(key);
  }
}
