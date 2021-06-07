import { Component, OnInit } from '@angular/core';
import {NutritionIssue} from '../../../../interface/nutritionIssue';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {RecipeService} from '../../../../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile-nutrition-issues-edit',
  templateUrl: './profile-nutrition-issues-edit.component.html',
  styleUrls: ['./profile-nutrition-issues-edit.component.css']
})
export class ProfileNutritionIssuesEditComponent implements OnInit {

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }
  faEdit = faEdit;
  nutritionIssues: NutritionIssue[];

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((routeData: { nutritionIssues: NutritionIssue[] }) => {
      this.nutritionIssues = routeData.nutritionIssues;
    });
  }

}
