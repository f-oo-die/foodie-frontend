import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';
import {Recipe} from '../../interface/recipe';
import {RoutesConstant} from '../../constants/routes-constant';
import {TypeOfMeal} from '../../interface/enums/typeOfMeal';
import {IngredientList} from '../../interface/ingredientList';
import {Ingredient} from '../../interface/ingredient';
import {NutritionIssue} from '../../interface/nutritionIssue';

@Component({
  selector: 'app-admin-recipes-add',
  templateUrl: './admin-recipes-add.component.html',
  styleUrls: ['./admin-recipes-add.component.css', '../../../assets/css/admin.css']
})
export class AdminRecipesAddComponent implements OnInit {
  typeOfMeal = TypeOfMeal;

  nutritionIssues: NutritionIssue[];
  ingredients: Ingredient[];

  ingredientLists: IngredientList[] = [];
  ingredientList: IngredientList = {ingredient: undefined, amount: 0, amountLabel: ''};

  recipeModel: Recipe = {
    ingredientList: this.ingredientLists,
    nutritionIssues: undefined,
    numOfCalories: 0,
    preparation: '',
    title: '',
    typeOfMeal: 0
  };

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

  addIngredient(): void {
    this.ingredientLists.push(this.ingredientList);
    console.log(this.ingredientLists);
    this.ingredientList = {ingredient: undefined, amount: 0, amountLabel: ''};
  }
}
