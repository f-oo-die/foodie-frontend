import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RecipeResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
