import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';
import {Recipe} from '../../interface/recipe';
import {RoutesConstant} from '../../constants/routes-constant';
import {TypeOfMeal} from '../../interface/enums/typeOfMeal';
import {IngredientList} from '../../interface/ingredientList';
import {Ingredient} from '../../interface/ingredient';
import {NutritionIssue} from '../../interface/nutrition-issue';

@Component({
  selector: 'app-admin-recipes-add',
  templateUrl: './admin-recipes-add.component.html',
  styleUrls: ['./admin-recipes-add.component.css', '../../../assets/css/admin.css']
})
export class AdminRecipesAddComponent implements OnInit {
  // todo: find a way to implement adding recipes fully

  ingredient1: Ingredient = {caloricValue: 1.0, id: 1, ingredientName: '2', nutritionalValue: 3.0};
  ingredientList1: IngredientList = {amount: 192, amountLabel: 'XX', ingredient: this.ingredient1};

  recipeModel: Recipe = {ingredientList: [this.ingredientList1], nutritionIssues: [], numOfCalories: 0, preparation: '', title: '', typeOfMeal: 0};
  typeOfMeal = TypeOfMeal;

  nutritionIssues: NutritionIssue[];
  ingredients: Ingredient[];

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((routeData: { nutritionIssues: NutritionIssue[] }) => {
      this.nutritionIssues = routeData.nutritionIssues;
    });

    this.activatedRoute.data.subscribe((routeData: { ingredients: Ingredient[] }) => {
      this.ingredients = routeData.ingredients;
    });
  }

  onSubmit(): void {
    this.recipeService.createRecipe(this.recipeModel).subscribe(() => {
      this.router.navigateByUrl(`/${RoutesConstant.ADMIN_RECIPES_LIST}`);
    });
  }
}
