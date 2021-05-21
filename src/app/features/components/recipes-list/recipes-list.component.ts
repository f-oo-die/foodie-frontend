import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/interface/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {

  @Input()
  models: Recipe[];

  @Output()
  onSearch = new EventEmitter();

  public searchRecipes(key: String): void {
    this.onSearch.emit(key);
  }
}
