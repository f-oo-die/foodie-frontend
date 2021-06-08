import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/interface/ingredient';
import { IngredientList } from 'src/app/interface/ingredientList';
import {ShoppingList} from '../../../interface/shoppingList';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  @Input()
  ingredientListModel: IngredientList[];

  @Input()
  shoppingListsModel: ShoppingList[];

  constructor() {}

  ngOnInit(): void {

  }

}
