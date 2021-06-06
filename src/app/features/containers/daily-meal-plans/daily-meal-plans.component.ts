import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/interface/recipe';

@Component({
  selector: 'app-daily-meal-plans',
  templateUrl: './daily-meal-plans.component.html',
  styleUrls: ['./daily-meal-plans.component.css']
})
export class DailyMealPlansComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private activatedRoute: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  public getRecipes(): void {
    this.activatedRoute.data.subscribe((routeData: { recipes: Recipe[] }) => {
      this.recipes = routeData.recipes;
    });
  }
}
