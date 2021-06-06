import {Component, OnInit} from '@angular/core';
import {ShoppingList} from '../../../interface/shoppingList';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingLists: ShoppingList[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(routeData => {
      this.shoppingLists = routeData.shoppingLists;
      console.log(this.shoppingLists);
    });
  }

}
