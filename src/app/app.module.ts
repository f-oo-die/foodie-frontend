import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { RecipesResolver } from './resolvers/recipes.resolver';
import { IngredientListsComponent } from './components/ingredient-lists/ingredient-lists.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    IngredientListsComponent,
    AboutUsComponent
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
