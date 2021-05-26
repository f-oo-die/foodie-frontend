import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Ingredient} from '../../interface/ingredient';
import {RoutesConstant} from '../../constants/routes-constant';

@Component({
  selector: 'app-admin-ingredients',
  templateUrl: './admin-ingredients.component.html',
  styleUrls: ['./admin-ingredients.component.css', '../../../assets/css/admin.css']
})
export class AdminIngredientsComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((routeData: { ingredients: Ingredient[] }) => {
      this.ingredients = routeData.ingredients;
    });
  }

  openAddIngredients(): void {
    this.router.navigateByUrl(`/${RoutesConstant.ADMIN_INGREDIENTS_NEW}`);
  }
}
