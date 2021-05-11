import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { RoutesConstant } from './constants/routes-constant';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: RoutesConstant.RECIPES_LIST,
    component: RecipesComponent,
  },
  {
    path: RoutesConstant.RECIPES_DETAILS,
    component: RecipeComponent,
    resolve: { recipe: RecipeResolver }
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
];
