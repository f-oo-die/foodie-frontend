import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/interface/ingredient';
import { IngredientList } from 'src/app/interface/ingredientList';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  @Input()
  models: IngredientList[];

  constructor() {}

  ngOnInit(): void {
    
  }

}
