import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent} from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { RoutesConstant } from './constants/routes-constant';
import { RecipesResolver } from './resolvers/recipes.resolver';

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
  { path: 'about-us',
  component : AboutUsComponent,

  }
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
