import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesComponent,
    RecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
