import { Component, OnInit } from '@angular/core';
import {ShoppingList} from '../../../../interface/shoppingList';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-shopping-list-details',
  templateUrl: './shopping-list-details.component.html',
  styleUrls: ['./shopping-list-details.component.css']
})
export class ShoppingListDetailsComponent implements OnInit {

  shoppingList: ShoppingList;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(routeData => {
      this.shoppingList = routeData.shoppingList;
      console.log(this.shoppingList);
    });
  }

}
