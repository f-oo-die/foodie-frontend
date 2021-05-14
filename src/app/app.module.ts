import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './features/components/footer/footer.component';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { RecipesResolver } from './resolvers/recipes.resolver';
import { IngredientListsComponent } from './features/containers/ingredient-lists/ingredient-lists.component';
import { IngredientListComponent } from './features/components/ingredient-list/ingredient-list.component';
import { RecipesComponent } from './features/containers/recipes/recipes.component';
import { RecipesListComponent } from './features/components/recipes-list/recipes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    IngredientListsComponent,
    IngredientListComponent,
    RecipesComponent,
    RecipesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RecipeResolver,
    RecipesResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
