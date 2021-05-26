import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';
import {Recipe} from '../../interface/recipe';
import {RoutesConstant} from '../../constants/routes-constant';
import {TypeOfMeal} from '../../interface/enums/typeOfMeal';

@Component({
  selector: 'app-admin-recipes-add',
  templateUrl: './admin-recipes-add.component.html',
  styleUrls: ['./admin-recipes-add.component.css', '../../../assets/css/admin.css']
})
export class AdminRecipesAddComponent implements OnInit {

  recipeModel: Recipe = {numOfCalories: 0, preparation: '', title: '', typeOfMeal: 0};
  typeOfMeal = TypeOfMeal;

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.recipeService.createRecipe(this.recipeModel).subscribe(() => {
      this.router.navigateByUrl(`/${RoutesConstant.ADMIN_RECIPES_LIST}`);
    });
  }
}
