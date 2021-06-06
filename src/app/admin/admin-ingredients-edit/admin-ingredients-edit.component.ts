import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../interface/ingredient';
import {ActivatedRoute, Router} from '@angular/router';
import {IngredientService} from '../../services/ingredient.service';
import {RoutesConstant} from '../../constants/routes-constant';

@Component({
  selector: 'app-admin-ingredients-edit',
  templateUrl: './admin-ingredients-edit.component.html',
  styleUrls: ['./admin-ingredients-edit.component.css']
})
export class AdminIngredientsEditComponent implements OnInit {

  ingredientModel: Ingredient;

  constructor(private ingredientService: IngredientService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(routeData => {
      this.ingredientModel = routeData.ingredient;
    });
  }

  onSubmit(): void {
    this.ingredientService.updateIngredient(this.ingredientModel.id, this.ingredientModel).subscribe(() => {
      this.router.navigateByUrl(`/${RoutesConstant.ADMIN_INGREDIENTS_LIST}`);
    });
  }

}
