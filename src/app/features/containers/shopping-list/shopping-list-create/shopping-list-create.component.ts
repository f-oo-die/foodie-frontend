import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from '../../../../services/shoppingList.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-list-create',
  templateUrl: './shopping-list-create.component.html',
  styleUrls: ['./shopping-list-create.component.css']
})
export class ShoppingListCreateComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService, private router: Router) { }

  ngOnInit(): void { }

  onCreate(): void {
    this.shoppingListService.createShoppingList().subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/shopping-lists']);
      });
    });
  }
}
