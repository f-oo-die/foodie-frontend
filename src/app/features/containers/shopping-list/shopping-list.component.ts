import {Component, OnInit} from '@angular/core';
import {ShoppingList} from '../../../interface/shoppingList';
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../../auth/shared/auth.service';
import {RoutesConstant} from '../../../constants/routes-constant';
import {ShoppingListService} from '../../../services/shoppingList.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingLists: ShoppingList[];
  userId: number;
  faTrashAlt = faTrashAlt;
  faHamburger = faHamburger;
  hasClicked;

  constructor(private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private shoppingListService: ShoppingListService,
              private router: Router,
              private actRoute: ActivatedRoute) {
    this.userId = this.authService.getId();
    this.hasClicked = false;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(routeData => {
      this.shoppingLists = routeData.shoppingLists;
    });
    if (this.actRoute.snapshot.params.id) {
      this.hasClicked = true;
    }
  }

  onDelete(id: number): void {
    if (confirm(`Are you sure you want to delete shopping list # ${id}`)) {
      this.shoppingListService.deleteShoppingList(id).subscribe(() => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/shopping-lists']);
        });
      });
    }
  }
}
