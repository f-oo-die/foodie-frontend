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
