import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interface/recipe';
import {ActivatedRoute, Router} from '@angular/router';
import {RoutesConstant} from '../../constants/routes-constant';

@Component({
  selector: 'app-admin-recipes',
  templateUrl: './admin-recipes.component.html',
  styleUrls: ['./admin-recipes.component.css']
})
export class AdminRecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((routeData: { recipes: Recipe[] }) => {
      this.recipes = routeData.recipes;
    });
  }

  openAddRecipe(): void {
    this.router.navigateByUrl(`/${RoutesConstant.ADMIN_RECIPES_NEW}`);
  }

}
