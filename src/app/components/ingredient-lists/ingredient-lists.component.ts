import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/interface/ingredient';
import { IngredientList } from 'src/app/interface/ingredientList';

@Component({
  selector: 'app-ingredient-lists',
  templateUrl: './ingredient-lists.component.html',
  styleUrls: ['./ingredient-lists.component.css']
})
export class IngredientListsComponent implements OnInit {

  @Input()
  ingredientLists: IngredientList[];

  constructor() {}

  ngOnInit(): void {
    
  }

}
