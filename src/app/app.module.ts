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
import { DataTablesModule } from 'angular-datatables';
import { AdminRecipesAddComponent } from './admin/admin-recipes-add/admin-recipes-add.component';
import { AdminNutritionIssuesComponent } from './admin/admin-nutrition-issues/admin-nutrition-issues.component';
import { NutritionIssuesResolver } from './resolvers/nutrition-issues.resolver';
import { AdminNutritionIssuesAddComponent } from './admin/admin-nutrition-issues-add/admin-nutrition-issues-add.component';
import { AdminIngredientsComponent } from './admin/admin-ingredients/admin-ingredients.component';
import { IngredientsResolver } from './resolvers/ingredients.resolver';
import { AdminIngredientsAddComponent } from './admin/admin-ingredients-add/admin-ingredients-add.component';
import { AdminNutritionIssuesEditComponent } from './admin/admin-nutrition-issues-edit/admin-nutrition-issues-edit.component';
import { NutritionIssueResolver } from './resolvers/nutrition-issue.resolver';
import { AdminIngredientsEditComponent } from './admin/admin-ingredients-edit/admin-ingredients-edit.component';
import { IngredientResolver } from './resolvers/ingredient.resolver';
import { DailyMealPlanComponent } from './features/components/daily-meal-plan/daily-meal-plan.component';
import { DailyMealPlansComponent } from './features/containers/daily-meal-plans/daily-meal-plans.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    AdminRecipesAddComponent,
    AdminNutritionIssuesComponent,
    AdminNutritionIssuesAddComponent,
    AdminIngredientsComponent,
    AdminIngredientsAddComponent,
    AdminNutritionIssuesEditComponent,
    AdminIngredientsEditComponent,
    DailyMealPlanComponent,
    DailyMealPlansComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    RecipeResolver,
    RecipesResolver,
    NutritionIssuesResolver,
    NutritionIssueResolver,
    IngredientsResolver,
    IngredientResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
