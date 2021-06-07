import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { RecipesComponent } from './features/containers/recipes/recipes.component';
import { RecipeComponent } from './features/containers/recipe/recipe.component';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { RoutesConstant } from './constants/routes-constant';
import { RecipesResolver } from './resolvers/recipes.resolver';
import { AdminComponent } from './admin/admin.component';
import { AdminRecipesComponent } from './admin/admin-recipes/admin-recipes.component';
import {AdminRecipesAddComponent} from './admin/admin-recipes-add/admin-recipes-add.component';
import {AdminNutritionIssuesComponent} from './admin/admin-nutrition-issues/admin-nutrition-issues.component';
import {NutritionIssuesResolver} from './resolvers/nutrition-issues.resolver';
import {AdminNutritionIssuesAddComponent} from './admin/admin-nutrition-issues-add/admin-nutrition-issues-add.component';
import {IngredientsResolver} from './resolvers/ingredients.resolver';
import {AdminIngredientsComponent} from './admin/admin-ingredients/admin-ingredients.component';
import {AdminIngredientsAddComponent} from './admin/admin-ingredients-add/admin-ingredients-add.component';
import {AdminNutritionIssuesEditComponent} from './admin/admin-nutrition-issues-edit/admin-nutrition-issues-edit.component';
import {NutritionIssueResolver} from './resolvers/nutrition-issue.resolver';
import {AdminIngredientsEditComponent} from './admin/admin-ingredients-edit/admin-ingredients-edit.component';
import {IngredientResolver} from './resolvers/ingredient.resolver';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from "./auth/login/login.component";
import {ProfileComponent} from './features/containers/profile/profile.component';
import {ProfileNutritionIssuesEditComponent} from './features/containers/profile/profile-nutrition-issues-edit/profile-nutrition-issues-edit.component';
import {ShoppingListComponent} from './features/containers/shopping-list/shopping-list.component';
import {ShoppingListsResolver} from './resolvers/shopping-lists.resolver';
import {ShoppingListDetailsComponent} from './features/containers/shopping-list/shopping-list-details/shopping-list-details.component';
import {UserResolver} from './resolvers/user.resolver';
import {ShoppingListResolver} from './resolvers/shopping-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { recipes: RecipesResolver }
  },
  {
    path: RoutesConstant.RECIPES_LIST,
    component: RecipesComponent,
    resolve: { recipes: RecipesResolver }
  },
  {
    path: RoutesConstant.RECIPES_DETAILS,
    component: RecipeComponent,
    resolve: { recipe: RecipeResolver }
  },
  {
    path: RoutesConstant.ADMIN_ROUTE,
    component: AdminComponent,
  },
  {
    path: RoutesConstant.ADMIN_RECIPES_LIST,
    component: AdminRecipesComponent,
    resolve: { recipes: RecipesResolver },
  },
  {
    path: RoutesConstant.ADMIN_RECIPES_NEW,
    component: AdminRecipesAddComponent,
    resolve: { nutritionIssues: NutritionIssuesResolver, ingredients: IngredientsResolver },
  },
  {
    path: RoutesConstant.ADMIN_NUTRITION_ISSUES_LIST,
    component: AdminNutritionIssuesComponent,
    resolve: { nutritionIssues: NutritionIssuesResolver },
  },
  {
    path: RoutesConstant.ADMIN_NUTRITION_ISSUES_NEW,
    component: AdminNutritionIssuesAddComponent,
  },
  {
    path: RoutesConstant.ADMIN_NUTRITION_ISSUES_EDIT,
    component: AdminNutritionIssuesEditComponent,
    resolve: { nutritionIssue: NutritionIssueResolver },
  },
  {
    path: RoutesConstant.ADMIN_INGREDIENTS_LIST,
    component: AdminIngredientsComponent,
    resolve: { ingredients: IngredientsResolver },
  },
  {
    path: RoutesConstant.ADMIN_INGREDIENTS_NEW,
    component: AdminIngredientsAddComponent,
  },
  {
    path: RoutesConstant.ADMIN_INGREDIENTS_EDIT,
    component: AdminIngredientsEditComponent,
    resolve: { ingredient: IngredientResolver },
  },
  {
    path: RoutesConstant.SIGNUP_ROUTE,
    component: SignupComponent,
  },
  {
    path: RoutesConstant.LOGIN_ROUTE,
    component: LoginComponent,
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    resolve: {  nutritionIssues: NutritionIssuesResolver, user: UserResolver },
  },
  {
    path: 'shopping-lists',
    component: ShoppingListComponent,
    resolve: { shoppingLists: ShoppingListsResolver }
  },
  {
    path: 'shopping-list/:id',
    component: ShoppingListDetailsComponent,
    resolve: { shoppingList: ShoppingListResolver, shoppingLists: ShoppingListsResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  RecipesComponent,
  RecipeComponent,
  AdminComponent,
];
