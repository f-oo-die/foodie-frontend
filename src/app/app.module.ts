import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HeaderComponent } from './features/components/header/header.component';
import { FooterComponent } from './features/components/footer/footer.component';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { RecipesResolver } from './resolvers/recipes.resolver';
import { IngredientListsComponent } from './features/containers/ingredient-lists/ingredient-lists.component';
import { IngredientListComponent } from './features/components/ingredient-list/ingredient-list.component';
import { RecipesComponent } from './features/containers/recipes/recipes.component';
import { RecipesListComponent } from './features/components/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './features/components/recipe-details/recipe-details.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRecipesComponent } from './admin/admin-recipes/admin-recipes.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminTopNavigationComponent } from './admin/admin-top-navigation/admin-top-navigation.component';
import { DataTablesModule } from 'angular-datatables';
import { AdminRecipesAddComponent } from './admin/admin-recipes-add/admin-recipes-add.component';
import { AdminNutritionIssuesComponent } from './admin/admin-nutrition-issues/admin-nutrition-issues.component';
import { NutritionIssuesResolver } from './resolvers/nutrition-issues.resolver';
import { AdminNutritionIssuesAddComponent } from './admin/admin-nutrition-issues-add/admin-nutrition-issues-add.component';
import { AdminIngredientsComponent } from './admin/admin-ingredients/admin-ingredients.component';
import { IngredientsResolver } from './resolvers/ingredients.resolver';
import { AdminIngredientsAddComponent } from './admin/admin-ingredients-add/admin-ingredients-add.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    IngredientListsComponent,
    IngredientListComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    AdminComponent,
    AdminRecipesComponent,
    AdminSidebarComponent,
    AdminTopNavigationComponent,
    AdminRecipesAddComponent,
    AdminNutritionIssuesComponent,
    AdminNutritionIssuesAddComponent,
    AdminIngredientsComponent,
    AdminIngredientsAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
  ],
  providers: [
    RecipeResolver,
    RecipesResolver,
    NutritionIssuesResolver,
    IngredientsResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
