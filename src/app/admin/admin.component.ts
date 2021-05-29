import { Component, OnInit } from '@angular/core';
import {RoutesConstant} from '../constants/routes-constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  template: `
      <div class="d-flex" id="wrapper">
        <div class="border-end bg-white" id="sidebar-wrapper">
          <!-- Sidebar navigation -->
          <div class="sidebar-heading border-bottom bg-light">Foodie Admin Panel</div>
          <div class="list-group list-group-flush">
            <a class="list-group-item list-group-item-action list-group-item-light p-3" (click)="openRecipesList()">Recipes</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" (click)="openNutritionIssuesList()">Nutrition issues</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" (click)="openIngredientsList()">Ingredients</a>
          </div>
        </div>
        <!-- Page content wrapper-->
      <div id="page-content-wrapper">
        <!-- Top navigation-->
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                <li class="nav-item active"><a class="nav-link" href="#">Log out</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- Page content-->
        <div class="container-fluid">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./admin.component.css', '../../assets/css/admin.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  openRecipesList(): void {
    this.router.navigateByUrl(`/${RoutesConstant.ADMIN_RECIPES_LIST}`);
  }

  openNutritionIssuesList(): void {
    this.router.navigateByUrl(`/${RoutesConstant.ADMIN_NUTRITION_ISSUES_LIST}`);
  }

  openIngredientsList(): void {
    this.router.navigateByUrl(`/${RoutesConstant.ADMIN_INGREDIENTS_LIST}`);
  }
}
