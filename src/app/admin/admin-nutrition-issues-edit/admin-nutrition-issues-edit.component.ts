import { Component, OnInit } from '@angular/core';
import {NutritionIssue} from '../../interface/nutrition-issue';
import {ActivatedRoute, Router} from '@angular/router';
import {RoutesConstant} from '../../constants/routes-constant';
import {NutritionIssueService} from '../../services/nutrition-issue.service';

@Component({
  selector: 'app-admin-nutrition-issues-edit',
  templateUrl: './admin-nutrition-issues-edit.component.html',
  styleUrls: ['./admin-nutrition-issues-edit.component.css', '../../../assets/css/admin.css']
})
export class AdminNutritionIssuesEditComponent implements OnInit {

  nutritionIssueModel: NutritionIssue;

  constructor(private nutritionIssueService: NutritionIssueService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(routeData => {
      this.nutritionIssueModel = routeData.nutritionIssue;
    });
  }

  onSubmit(): void {
    this.nutritionIssueService.updateNutritionIssue(this.nutritionIssueModel.id, this.nutritionIssueModel).subscribe(() => {
      this.router.navigateByUrl(`/${RoutesConstant.ADMIN_NUTRITION_ISSUES_LIST}`);
    });
  }
}
