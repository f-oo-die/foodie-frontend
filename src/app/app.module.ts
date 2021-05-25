import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
  ],
  providers: [
    RecipeResolver,
    RecipesResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
